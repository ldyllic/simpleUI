---
title: Switch | Simple UI
description: Switch 组件的文档
---

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 v-model 到一个 Boolean 类型的变量。 可以使用 **--vk-switch-on-color** 属性与 **--vk-switch-off-color** 属性来设置开关的背景色。

<preview path="../demo/Switch/Basic.vue" title="基础Switch" description="Switch 基础用例"></preview>

## 禁用状态

设置 **disabled** 属性，接受一个 boolean，设置true即可禁用。

<preview path="../demo/Switch/Disabled.vue" title="Switch 禁用状态" description="Switch 禁用状态"></preview>

## 不同尺寸

设置 **size** 属性，接受**large / small**，呈现不同的尺寸。

<preview path="../demo/Switch/Size.vue" title="Switch 不同尺寸" description="Switch 不同尺寸"></preview>

## 支持自定义 value 类型

你可以设置 **active-value** 和 **inactive-value** 属性， 它们接受 boolean | string | number 类型的值。
<preview path="../demo/Switch/CustomValue.vue" title="支持自定义 value 类型" description="Switch 支持自定义 value 类型"></preview>

## 文字描述

使用 **active-text** 属性与 **inactive-text** 属性来设置开关的文字描述。

<preview path="../demo/Switch/Text.vue" title="支持文字描述" description="Switch 文字描述"></preview>

## API文档

### Switch 开关属性

|      参数       |       类型        | 默认值  |       说明       | 必填 |            可选值            |
| :-------------: | :---------------: | :-----: | :--------------: | :--: | :--------------------------: |
|   **模型值**    |                   |         |                  |      |                              |
|  `modelValue`   | `SwitchValueType` |    -    |  开关状态绑定值  |  ✅   | `true`/`false`, 字符串，数字 |
|  **状态控制**   |                   |         |                  |      |                              |
|   `disabled`    |     `boolean`     | `false` |   是否禁用状态   |  ❌   |       `true`, `false`        |
|  **显示文本**   |                   |         |                  |      |                              |
|  `activeText`   |     `string`      |    -    | 开启状态显示文本 |  ❌   |          任意字符串          |
| `inactiveText`  |     `string`      |    -    | 关闭状态显示文本 |  ❌   |          任意字符串          |
|   **值映射**    |                   |         |                  |      |                              |
|  `activeValue`  | `SwitchValueType` | `true`  | 开启状态的绑定值 |  ❌   | `true`/`false`, 字符串，数字 |
| `inactiveValue` | `SwitchValueType` | `false` | 关闭状态的绑定值 |  ❌   | `true`/`false`, 字符串，数字 |
|  **基础属性**   |                   |         |                  |      |                              |
|     `size`      |     `string`      |    -    |     开关尺寸     |  ❌   |       `small`, `large`       |
|     `name`      |     `string`      |    -    |  原生 name 属性  |  ❌   |          任意字符串          |
|      `id`       |     `string`      |    -    |   原生 id 属性   |  ❌   |          任意字符串          |

### Switch 开关事件

|        事件名称         |           触发时机           |         回调参数         |                  说明                  |
| :---------------------: | :--------------------------: | :----------------------: | :------------------------------------: |
| **`update:modelValue`** |    开关状态变化时实时触发    | `value: SwitchValueType` |   实现 `v-model` 双向绑定的核心事件    |
|      **`change`**       | 开关交互完成且状态变化后触发 | `value: SwitchValueType` | 状态改变确认事件，适用于提交或记录操作 |