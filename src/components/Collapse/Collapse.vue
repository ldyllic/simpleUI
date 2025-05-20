<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="vk-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from "vue";
import type { NameType, CollapseProps, CollapseEmits } from "./types";
import { collapseContextKey } from "./types";
defineOptions({
  name: "VkCollapse",
});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();

const aciveNames = ref<NameType[]>(props.modelValue);
watch(
  () => props.modelValue,
  () => {
    aciveNames.value = props.modelValue;
  }
);
if (props.accordion && aciveNames.value.length > 1) {
  console.warn("accordion mode should only have one acitve item");
}
const handleItemClick = (item: NameType) => {
  let _aciveNames = [...aciveNames.value];
  if (props.accordion) {
    _aciveNames = [aciveNames.value[0] === item ? "" : item];
    aciveNames.value = _aciveNames;
  } else {
    const index = _aciveNames.indexOf(item);
    if (index > -1) {
      // 存在，删除数组对应的一项
      _aciveNames.splice(index, 1);
    } else {
      // 不存在，插入对应的name
      _aciveNames.push(item);
    }
    aciveNames.value = _aciveNames;
  }

  emits("update:modelValue", _aciveNames);
  emits("change", _aciveNames);
};
provide(collapseContextKey, {
  aciveNames,
  handleItemClick,
});
</script>

<style scoped></style>
