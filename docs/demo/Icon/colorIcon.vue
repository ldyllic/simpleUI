<template>
  <div class="main type">
    <Icon icon="user" type="primar"/>
    <Icon icon="house" type="primar"/>
    <Icon icon="image" type="primar"/>
    <Icon icon="file" type="success"/>
    <Icon icon="camera" type="success"/>
    <Icon icon="bell" type="success"/>
    <Icon icon="cloud" type="warning"/>
    <Icon icon="envelope" type="warning"/>
    <Icon icon="phone" type="warning"/>
    <Icon icon="star" type="danger"/>
    <Icon icon="bars" type="danger"/>
    <Icon icon="heart" type="danger"/>
    <Icon icon="check" type="info"/>
    <Icon icon="xmark" type="info"/>
  </div>
    <div class="main color">
    <Icon icon="user" color="#303133"/>
    <Icon icon="house" color="#CDD0D6"/>
    <Icon icon="image" color="#E6E8EB"/>
    <Icon icon="file" color="#606266"/>
    <Icon icon="camera" color="#F51C6C"/>
    <Icon icon="bell" color="#E46C6C"/>
    <Icon icon="cloud" color="#6F6C6C"/>
    <Icon icon="envelope" color="#1EEC6C"/>
    <Icon icon="phone" color="#112C6C"/>
    <Icon icon="star" color="#226C6C"/>
    <Icon icon="bars" color="#25644C"/>
    <Icon icon="heart" color="#FFFC6C"/>
    <Icon icon="check" color="#F5223C"/>
    <Icon icon="xmark" color="#691C6C"/>
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
.type{
    margin-bottom: 10px;
}
</style>
