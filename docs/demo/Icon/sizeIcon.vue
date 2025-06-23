<template>
  <div class="main">
    <Icon icon="user" size="2xs"/>
    <Icon icon="house" size="xs"/>
    <Icon icon="image" size="sm"/>
    <Icon icon="file" size="lg"/>
    <Icon icon="camera" size="xl"/>
    <Icon icon="bell" size="2xl"/>
    <Icon icon="cloud" size="1x"/>
    <Icon icon="envelope" size="2x"/>
    <Icon icon="phone" size="3x"/>
    <Icon icon="star" size="4x"/>
    <Icon icon="bars" size="5x"/>
    <Icon icon="heart" size="6x"/>
    <Icon icon="check" size="7x"/>
    <Icon icon="xmark" size="8x"/>
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
