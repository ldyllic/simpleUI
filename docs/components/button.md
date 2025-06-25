---
title: Button | Simple UI
description: Button 组件的文档
---

# Button 按钮
常用的操作按钮。

## 基础用法
使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<preview path="../demo/Button/Basic.vue" title="基础用法" description="Button 组件的基础用法"></preview>

## 禁用状态
使用 `disabled` 属性来定义按钮是否被禁用

<preview path="../demo/Button/disabledBtn.vue" title="禁用状态" description="Button 组件的禁用状态"></preview>

## 图标按钮
使用 `icon` 属性来为按钮添加图标。图标名称请看 [fontawesome](https://fontawesome.com/icons) 官网 

<preview path="../demo/Button/iconBtn.vue" title="图标按钮" description="Button 组件的图标按钮"></preview>

## 加载状态
通过设置 `loading` 属性为 true 来显示正在加载的状态。

<preview path="../demo/Button/loadingBtn.vue" title="加载状态" description="Button 组件的加载状态"></preview>

## 调整尺寸
通过设置 `size` 属性为 `small` | `large` 来调整图标的大小。

<preview path="../demo/Button/sizeBtn.vue" title="调整尺寸" description="Button 组件的调整尺寸"></preview>

## API文档

### Button 按钮属性

| 参数        | 说明                              | 类型                                                         | 默认值 |
| ----------- | --------------------------------- | ------------------------------------------------------------ | ------ |
| size        | button 按钮尺寸                   | `enum` - `'large'\| 'small'`                                 | —      |
| type        | button 按钮类型                   | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | —      |
| plain       | 确定它是否为普通按钮              | `boolean`                                                    | false  |
| round       | 确定它是否为round按钮             | `boolean`                                                    | false  |
| circle      | 确定它是否为circle按钮            | `boolean`                                                    | false  |
| loading     | 确定它是否正在加载                | `boolean`                                                    | false  |
| disabled    | 禁用 button                       | `boolean`                                                    | false  |
| icon        | icon 元件                         | `string`                                                     | —      |
| autofocus   | 与原生 Button 的 `autofocus` 相同 | `boolean`                                                    | false  |
| native-type | 与原生 Button 的 `type`           | `enum` - `'button'\| 'submit'\| 'reset'`                     | button |
