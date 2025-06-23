## 基于Vue3+TypeScript的轻量级UI组件库

**Simple UI** 是一个专为开发者提供一套现代、灵活且易于定制的UI组件，以便快速构建用户界面，具有较高可维护性和扩展性，并提供全量导入和按需导入两种方式

### 安装


```bash
npm i @vikingmute/v-element --save
```

### 开始使用

**全局使用**


```js
// 引入所有组件
import SimpleUI from '@vikingmute/v-element'
// 引入样式
import '@vikingmute/v-element/dist/style.css'

import App from './App.vue'
// 全局使用
createApp(App).use(SimpleUI).mount('#app')
```

```vue
<template>
  <vk-button>我是 VkButton</vk-button>
</template>
```

**单个导入**

Simple UI 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。


```vue
<template>
  <Button>我是 VkButton</Button>
</template>
<script>
  import { Button } from ' @vikingmute/v-element'
  export default {
    components: { Button },
  }
</script>
```