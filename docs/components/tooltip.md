---
title: Tooltip | Simple UI
description: Tooltip 组件的文档
---

# Tooltip 文字提示
常用于展示鼠标 hover 时的提示信息。

## 基础用法
使用 `content` 属性来决定 hover 时的提示信息。

<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## 不同位置
使用 `content` 属性来决定 hover 时的提示信息。

<preview path="../demo/Tooltip/location.vue" title="不同位置" description="Tooltip 组件的不同位置"></preview>

## 触发方式
由 `trigger` 属性决定触发方式： `hover | click`, 默认为 hover

<preview path="../demo/Tooltip/trigger.vue" title="触发方式" description="Tooltip 组件的触发方式"></preview>

## 更多内容的文字提示
展示多行文本或者是设置文本内容的格式

用具名 slot content，替代tooltip中的content属性。

<preview path="../demo/Tooltip/slot.vue" title="更多内容的文字提示" description="Tooltip 组件的更多内容的文字提示"></preview>

## 手动触发
将 `manual` 属性设置为 `true` 即可， 然后可以使用实例上面的 `show` 和 `hide` 方法打开关闭下拉菜单。

<preview path="../demo/Tooltip/manual.vue" title="手动触发" description="Tooltip 组件的手动触发"></preview>

## API文档

### Tooltip 文字提示属性
| 参数           | 说明                                             | 类型                                                         | 默认值 |
| :------------- | :----------------------------------------------- | :----------------------------------------------------------- | :----- |
| content        | 显示内容，可以被 `slot#content` 覆盖             | ^[string]                                                    | ''     |
| placement      | Tooltip 的位置                                   | ^[enum]`'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'` | bottom |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) 参数 | ^[object]refer to [popper.js](https://popper.js.org/docs/v2/) doc | {}     |
| open-delay     | 外观延迟，以毫秒为单位                           | ^[number]                                                    | 0      |
| close-delay    | 消失延迟，以毫秒为单位                           | ^[number]                                                    | 200    |
| trigger        | 应如何触发工具提示 （显示）                      | ^[enum]`'hover' | 'click'`                                   | hover  |
| manual         | 是否开启手动触发模式                             | ^[boolean]`                                                  | false  |
| transition     | 动画名称                                         | ^[string]                                                    | ''     |

### Tooltip 事件Events
| 参数           | 说明                              | 类型      |
| :------------- | :-------------------------------- | :-------- |
| visible-change | 当 tooltip 展示/隐藏时被触发      | `boolean` |
| click-outside  | 当点击到 Tooltip 外侧区域时被触发 | `boolean` |

### Tooltip 插槽Slots
| 参数    | 说明                   |
| :------ | :--------------------- |
| default | Tooltip 触发和参考元素 |
| content | 自定义内容             |

### Tooltip 暴露Exposes
| 参数 | 说明           | 类型                                             |
| :--- | :------------- | :----------------------------------------------- |
| show | 暴露 show 函数 | ^[Function]`(event?: Event | undefined) => void` |
| hide | 暴露 hide函数  | ^[Function]`(event?: Event | undefined) => void` |