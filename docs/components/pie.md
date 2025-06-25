---
title: PieChart | Simple UI
description: PieChart 饼图的文档
---

# PieChart 饼图

基于 ECharts 封装的饼图组件，支持多种饼图类型（普通饼图、环形图、南丁格尔玫瑰图）和丰富的自定义配置。

## 基础用法

使用 `data` 属性传入数据源，`type` 属性指定饼图类型（默认普通饼图）。

<preview path="../demo/PieChart/Basic.vue" title="基础饼图" description="基础饼图"></preview>

## 饼图类型

通过 `type` 属性切换饼图展示形式：

- pie：普通饼图
- ring：环形饼图
- rose：南丁格尔玫瑰图

<preview path="../demo/PieChart/Type.vue" title="饼图类型" description="三种饼图类型"></preview>

## 主题切换

通过 `theme` 属性切换浅色/深色主题，适配不同背景的仪表盘。

<preview path="../demo/PieChart/Theme.vue" title="主题切换" description="饼图的浅色/深色主题效果"></preview>

## 禁用图例

设置 `legend` 属性为 false 可隐藏图例，配合 `showLabel` 使用。

<preview path="../demo/PieChart/Legend.vue" title="禁用图例" description="隐藏饼图的图例信息"></preview>

## 加载状态

通过 `loading` 属性控制加载状态，数据加载时显示加载动画。

<preview path="../demo/PieChart/Loading.vue" title="加载状态" description="饼图数据加载中的效果"></preview>

### PieChart 饼图属性

|     参数     |                               说明                               |      类型      |     默认值      |
| :----------: | :--------------------------------------------------------------: | :------------: | :-------------: |
|     data     |           数据源 (`[{ name: string, value: number }]`)           |     Array      |      `[]`       |
|    theme     |                   主题 (`'light'` 或 `'dark'`)                   |     String     |    `'light'`    |
|     type     |             饼图类型 (`'pie'`, `'ring'` 或 `'rose'`)             |     String     |     `'pie'`     |
|    radius    |      饼图半径 (数组或字符串: `[内半径, 外半径]` 或 `'75%'`)      |  Array/String  |     `'75%'`     |
|    center    |              饼图中心位置 (`[水平位置, 垂直位置]`)               |     Array      | `['50%','50%']` |
|    legend    | 图例配置 (`false`: 隐藏, `true`: 显示默认, `object`: 自定义配置) | Boolean/Object |     `true`      |
|  showLabel   |                         是否显示数据标签                         |    Boolean     |     `true`      |
|    label     |               标签配置对象 (支持 ECharts 标签属性)               |     Object     |      `{}`       |
| showTooltip  |                          是否显示提示框                          |    Boolean     |     `true`      |
|    colors    |                   自定义颜色数组 (十六进制值)                    |     Array      |    内置配色     |
|   loading    |                         是否显示加载状态                         |    Boolean     |     `false`     |
|    height    |                     图表高度 (像素或百分比)                      | String/Number  |    `'400px'`    |
| rippleEffect |                      是否启用点击水波纹效果                      |    Boolean     |     `true`      |

### PieChart 饼图事件

|      事件名称       |          说明          |                    参数格式                     |
| :-----------------: | :--------------------: | :---------------------------------------------: |
|        click        |    点击数据项时触发    | `{ data: object, name: string, index: number }` |
| legendselectchanged | 图例选中状态变化时触发 |              ECharts 原生事件参数               |

### 数据项结构

```javascript
// data 属性示例
[
  {
    name: "类别1", // 类别名称 (必需)
    value: 1230, // 类别的数值 (必需)
    color: "#36a2eb", // 可选，自定义颜色
  },
  {
    name: "类别1",
    value: 980,
  },
];
```
