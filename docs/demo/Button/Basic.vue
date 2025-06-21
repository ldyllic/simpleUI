<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Button ref="buttonRef">Test Button</Button>
  <Button circle>VK</Button>
  <Button disabled>Disabled Button</Button><br /><br />
  <Button type="primary">Primary</Button>
  <Button type="success">Success</Button>
  <Button type="warning">Warning</Button>
  <Button type="danger">Danger</Button><br /><br />
  <Button type="primary" plain>Primary</Button>
  <Button type="success" plain>Success</Button>
  <Button type="info" plain>Info</Button>
  <Button type="warning" plain>Warning</Button>
  <Button type="danger" plain>Danger</Button><br /><br />
  <Button size="large" plain>Large</Button>
  <Button size="small" plain>Small</Button><br /><br />
  <Button size="large" loading>Loading</Button>
  <Button size="large" icon="arrow-up">Arrow</Button><br /><br />
</template>
<script setup lang="ts">
import Button from "../../../src/components/Button/Button.vue";
</script>
