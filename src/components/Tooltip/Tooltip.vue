<template>
  <div class="vk-tooltip" ref="popperContainerNode" v-on="outerEvents">
    <div class="vk-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <Transition :name="transition">
      <div v-if="isOpen" class="vk-tooltip__popper" ref="popperNode">
        <slot name="content">{{ content }}</slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, onUnmounted, computed } from "vue";
import type { TooltipProps, TooltipEmits, TooltipInstance } from "./types.ts";
import { createPopper } from "@popperjs/core";
import type { Instance } from "@popperjs/core";
import { debounce } from "lodash-es";
import useClickOutside from "../../hooks/useClickOutside.ts";
defineOptions({
  name: "VkTooltip",
});
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: "bottom",
  trigger: "hover",
  transition: "fade",
  openDelay: 0,
  closeDelay: 0,
});
const emits = defineEmits<TooltipEmits>();

const isOpen = ref(false);
const popperNode = ref<HTMLElement>();
const triggerNode = ref<HTMLElement>();
const popperContainerNode = ref<HTMLElement>();

let popperInstance: Instance | null = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let events: Record<string, any> = reactive({});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let outerEvents: Record<string, any> = reactive({});

let openTimes = 0;
let closeTimes = 0;

// 合并两个placement
const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 9],
        },
      },
    ],
    ...props.popperOptions,
  };
});

// 使用防抖节流避免短时间多次触发
const open = () => {
  openTimes++;
  console.log("open times", openTimes);
  isOpen.value = true;
  emits("visible-change", true);
};

const close = () => {
  closeTimes++;
  console.log("close times", closeTimes);
  isOpen.value = false;
  emits("visible-change", false);
};

// 防抖节流版open
const openDebounce = debounce(open, props.openDelay);
const closeDebounce = debounce(close, props.closeDelay);

// 最终版本
const openFinal = () => {
  closeDebounce.cancel();
  openDebounce();
};
const closeFinal = () => {
  openDebounce.cancel();
  closeDebounce();
};

// 点击事件
const togglePopper = () => {
  if (isOpen.value) {
    closeFinal();
  } else {
    openFinal();
  }
};

// 点击其他区域关闭窗口
useClickOutside(popperContainerNode, () => {
  if (props.trigger === "click" && isOpen.value && !props.manual) {
    closeFinal();
  }
});

// 添加对应的事件
const attachEvents = () => {
  if (props.trigger === "hover") {
    events["mouseenter"] = openFinal;
    outerEvents["mouseleave"] = closeFinal;
  } else if (props.trigger === "click") {
    events["click"] = togglePopper;
  }
};

// 判断是否为手动模式
if (!props.manual) {
  attachEvents();
}
// 监听manual的值来确定是否为手动
watch(
  () => props.manual,
  (isManual) => {
    if (isManual) {
      // 清空事件列表
      events = {};
      outerEvents = {};
    } else {
      attachEvents();
    }
  }
);

// 监听trigger的值来确定启用的事件
watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      // 清空事件列表
      events = {};
      outerEvents = {};
      attachEvents();
    }
  }
);

// 监听isOpen响应式对象的值来进行创建和销毁
watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value);
      } else {
        popperInstance?.destroy();
      }
    }
  },
  { flush: "post" }
);

onUnmounted(() => {
  popperInstance?.destroy();
});

defineExpose<TooltipInstance>({
  show: openFinal,
  hide: closeFinal,
});
</script>

<style scoped></style>
