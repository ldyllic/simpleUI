<template>
  <header>
    <Tooltip placement="right" :trigger="trigger" ref="tooltipRef" :open-delay="1000" :close-delay="1000">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <template #content>
        <h1>hello Tooltip</h1>
      </template>
    </Tooltip>
  </header>
  <Icon icon="user-secret" />
  <Icon icon="arrow-up" size="2xl" type="danger" color="#2f987e" />
  <main>
    <Button ref="buttonRef">Test Button</Button>
    <Button plain @click="open">Plain Button</Button>
    <Button round @click="close">Round Button</Button>
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

    <Collapse v-model="openedValue">
      <Item name="a" title="Title A">
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </Item>
      <Item name="b" title="Title B">
        <div>this is bbbbb test</div>
      </Item>
      <Item name="c" title="Disabled Title" disabled>
        <div>this is cccc test</div>
      </Item>
    </Collapse>
    {{ openedValue }}
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "./components/Button/Button.vue";
import Collapse from "./components/Collapse/Collapse.vue";
import Item from "./components/Collapse/CollapseItem.vue";
import Icon from "./components/Icon/Icon.vue";
import Tooltip from "./components/Tooltip/Tooltip.vue";
// import type { Options } from "@popperjs/core";
import type { ButtonInstance } from "./components/Button/types";
import type { TooltipInstance } from "./components/Tooltip/types";

const buttonRef = ref<ButtonInstance | null>(null);
const tooltipRef = ref<TooltipInstance | null>(null);

const openedValue = ref(["a"]);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const trigger = ref<any>("click");
// const options:Partial<Options> ={placement:'right-end',strategy:'fixed'}

const open=()=>{
  tooltipRef.value?.show()
}

const close=()=>{
  tooltipRef.value?.hide()
}

onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref);
  }
  setTimeout(() => {
    // trigger.value = "hover";
  }, 2000);
});
</script>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
