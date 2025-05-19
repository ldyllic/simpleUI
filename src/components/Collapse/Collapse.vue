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
  if (props.accordion) {
    aciveNames.value = [aciveNames.value[0] === item ? "" : item];
  } else {
    const index = aciveNames.value.indexOf(item);
    if (index > -1) {
      // 存在，删除数组对应的一项
      aciveNames.value.splice(index, 1);
    } else {
      // 不存在，插入对应的name
      aciveNames.value.push(item);
    }
  }

  emits("update:modelValue", aciveNames.value);
  emits("change", aciveNames.value);
};
provide(collapseContextKey, {
  aciveNames,
  handleItemClick,
});
</script>

<style scoped></style>
