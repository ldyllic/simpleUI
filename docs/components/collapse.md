---
title: Collapse | Simple UI
description: Collapse 组件的文档
---

# Collapse 折叠面板
通过折叠面板收纳内容区域。

## 基础用法
可同时展开多个面板，面板之间不影响。

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 手风琴效果
每次只能展开一个面板

通过 `accordion` 属性来设置是否以手风琴模式显示。

<preview path="../demo/Collapse/Accordion.vue" title="手风琴效果" description="Collapse 组件的手风琴效果"></preview>

## API文档

### Collapse 折叠面板属性

| 参数                  | 说明                               | 类型                                                 | 可选值 | 默认值 |
| :-------------------- | :--------------------------------- | :--------------------------------------------------- | :----- | :----- |
| model-value / v-model | 当前活动面板                       | string (accordion mode) / array (non-accordion mode) | —      | —      |
| accordion             | 是否激活折叠模式                   | boolean                                              | —      | false  |

### Collapse 折叠面板Events

| 参数   | 说明                 | 参数                                                         |
| :----- | :------------------- | :----------------------------------------------------------- |
| change | 当活动面板更改时触发 | (activeNames: array (non-accordion mode) / string (accordion mode)) |

### Collapse 折叠面板Slots插槽

| 参数 | 说明           | 子标签        |
| :--- | :------------- | :------------ |
| -    | 自定义默认内容 | Collapse Item |

### Collapse Item 属性

| 参数     | 说明               | 类型          | 可选值 | 默认值 |
| :------- | :----------------- | :------------ | :----- | :----- |
| name     | 面板的唯一标识     | string/number | —      | —      |
| title    | 面板的标题         | string        | —      | —      |
| disabled | 禁用 Collapse Item | boolean       | —      | —      |

### Collapse Item Slot插槽

| 参数  | 说明                     |
| :---- | :----------------------- |
| —     | Collapse Item 的内容     |
| title | Collapse Item 标题的内容 |