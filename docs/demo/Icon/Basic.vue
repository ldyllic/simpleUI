<template>
  <div class="main">
    <Icon icon="user" />
    <Icon icon="house" />
    <Icon icon="image" />
    <Icon icon="file" />
    <Icon icon="camera" />
    <Icon icon="bell" />
    <Icon icon="cloud" />
    <Icon icon="envelope" />
    <Icon icon="phone" />
    <Icon icon="star" />
    <Icon icon="bars" />
    <Icon icon="heart" />
    <Icon icon="check" />
    <Icon icon="xmark" />
  </div>
</template>

<script setup>
import Icon from "@/components/Icon/Icon.vue";
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
}
</style>
