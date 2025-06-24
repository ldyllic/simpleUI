---
title: Input | Simple UI
description: Input 组件的文档
---

# Input 输入框
通过鼠标或键盘输入字符

## 基础文本框

<preview path="../demo/Input/Basic.vue" title="基础文本框" description="Input 基础文本框"></preview>

## 禁用文本框

通过 **disabled** 属性指定是否禁用 input 组件


<preview path="../demo/Input/Disable.vue" title="禁用文本框" description="Input 禁用文本框"></preview>

## 尺寸
使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： **large**, **small**。

<preview path="../demo/Input/Size.vue" title="不同尺寸文本框" description="不同尺寸文本框"></preview>


## 复合型输入框

可以在输入框前置或后置一个元素，通常是标签或按钮。可以使用 **prepend** 和 **append** 插槽。
要在输入框中添加前后元素，可以使用 **prefix** 和 **suffix** 插槽。

<preview path="../demo/Input/Combo.vue" title="复合型输入框" description="Input 复合型输入框"></preview>

## Textarea

用于输入多行文本信息可缩放的输入框。 添加 **type="textarea"** 属性来将 input 元素转换为原生的 textarea 元素。

<preview path="../demo/Input/Textarea.vue" title="Textarea" description="Textarea"></preview>

## 密码文本框

使用 **show-password** 属性即可得到一个可切换显示隐藏的密码框

<preview path="../demo/Input/Password.vue" title="密码文本框" description="Input 密码文本框"></preview>

## 清空文本框

使用 **clearable** 属性即可得到一个可一键清空的输入框


<preview path="../demo/Input/Clear.vue" title="清空文本框" description="Input 清空文本框"></preview>

### Input 输入框属性

|      参数      |   类型    |  默认值  |             说明              | 必填 |                            可选值                            |
| :------------: | :-------: | :------: | :---------------------------: | :--: | :----------------------------------------------------------: |
|  **类型控制**  |           |          |                               |      |                                                              |
|     `type`     | `string`  | `'text'` |          输入框类型           |  ❌   | `text`, `password`, `email`, `number`, `tel`, `url` 等 HTML5 输入类型 |
|  `modelValue`  | `string`  |    -     | 绑定值，使用 v-model 双向绑定 |  ✅   |                              -                               |
| **尺寸与状态** |           |          |                               |      |                                                              |
|     `size`     | `string`  |   `-`    |          输入框尺寸           |  ❌   |                       `large`, `small`                       |
|   `disabled`   | `boolean` | `false`  |         是否禁用状态          |  ❌   |                       `true`, `false`                        |
|   `readonly`   | `boolean` | `false`  |         是否只读状态          |  ❌   |                       `true`, `false`                        |
|  **功能扩展**  |           |          |                               |      |                                                              |
|  `clearable`   | `boolean` | `false`  |       是否显示清除按钮        |  ❌   |                       `true`, `false`                        |
| `showPassword` | `boolean` | `false`  |     是否显示密码切换按钮      |  ❌   |                       `true`, `false`                        |
|  **表单属性**  |           |          |                               |      |                                                              |
| `placeholder`  | `string`  |   `-`    |        输入框占位文本         |  ❌   |                          任意字符串                          |
| `autocomplete` | `string`  | `'off'`  |         自动补全设置          |  ❌   |        `on`, `off`, `username`, `current-password` 等        |
|  `autofocus`   | `boolean` | `false`  |       是否自动获取焦点        |  ❌   |                       `true`, `false`                        |
|     `form`     | `string`  |   `-`    |         关联的表单 ID         |  ❌   |                         表单元素 ID                          |

### Input 输入框事件

|        事件名称         |        触发时机        |      回调参数       |                      详细说明                      |
| :---------------------: | :--------------------: | :-----------------: | :------------------------------------------------: |
| **`update:modelValue`** |   输入框值变化时触发   |   `value: string`   | Vue 双向绑定机制事件，用于同步输入框值与父组件变量 |
|       **`input`**       | 每次输入内容变化时触发 |   `value: string`   |   值实时变化事件，每输入/删除一个字符即触发一次    |
|      **`change`**       | 值修改且失去焦点后触发 |   `value: string`   | 表单提交场景常用事件，对应原生 HTML `change` 事件  |
|       **`focus`**       |  输入框获得焦点时触发  | `value: FocusEvent` |             包含焦点事件的完整信息对象             |
|       **`blur`**        |  输入框失去焦点时触发  | `value: FocusEvent` |             包含焦点事件的完整信息对象             |
|       **`clear`**       |   点击清除按钮时触发   |         无          |            需配合 `clearable` 属性使用             |