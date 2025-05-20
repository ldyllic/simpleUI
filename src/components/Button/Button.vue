<template>
  <button
    ref="_ref"
    class="vk-button"
    :class="{
      [`vk-button--${type}`]: type,
      [`vk-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "./types.ts";
import Icon from "../Icon/Icon.vue";
defineOptions({
  name: "VkButton",
});

// 类型默认值
withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button",
});

// 获取组件实例
const _ref = ref<HTMLButtonElement>();

// 暴露组件实例
defineExpose({
  ref: _ref,
});
</script>

<style>
/* .vk-button{
  background-color: var(--main-bg-color);
} */
</style>
