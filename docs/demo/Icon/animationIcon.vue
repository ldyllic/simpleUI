<template>
  <div class="main">
    <Icon icon="user" spin/>
    <Icon icon="house" pulse/>
    <Icon icon="image" bounce/>
    <Icon icon="file" shake/>
    <Icon icon="camera" beat/>
    <Icon icon="bell" fade/>
    <Icon icon="cloud" beatFade/>
    <Icon icon="envelope" spinPulse/>
    <Icon icon="phone" spinRevers/>
    <Icon icon="heart" swapopacity/>
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
