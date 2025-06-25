---
title: BarChart | Simple UI
description: BarChart 柱状图组件的文档
---

# BarChart 柱状图
用于展示分类数据的柱状图组件。

## 基础用法
使用 `data` 和 `xAxisData` 属性传入数据源。

<preview path="../demo/BarChart/Basic.vue" title="基础柱状图" description="BarChart 组件的基础用法"></preview>

## 水平柱状图
通过 `type` 属性设置为 `'horizontal'` 来创建水平柱状图。

<preview path="../demo/BarChart/Horizontal.vue" title="水平柱状图" description="水平柱状图的展示效果"></preview>

## 堆叠柱状图
设置 `stacked` 属性为 `true` 来创建堆叠柱状图。

<preview path="../demo/BarChart/Stacked.vue" title="堆叠柱状图" description="堆叠柱状图的展示效果"></preview>

## 主题切换
通过 `theme` 属性切换浅色/深色主题。

<preview path="../demo/BarChart/Theme.vue" title="主题切换" description="柱状图的浅色/深色主题效果"></preview>

## 自定义样式
通过 `colors` 属性自定义柱状图颜色。

<preview path="../demo/BarChart/CustomColors.vue" title="自定义颜色" description="自定义柱状图颜色的效果"></preview>

## 加载状态
通过 `loading` 属性控制加载状态。

<preview path="../demo/BarChart/Loading.vue" title="加载状态" description="柱状图加载中的效果"></preview>

### BarChart 属性

| 参数           | 说明                                                                 | 类型                         | 默认值        |
|----------------|----------------------------------------------------------------------|-----------------------------|---------------|
| data          | 数据源 (`[{ name: string, values: number[] }]`)                      | Array                      | `[]`          |
| xAxisData     | X轴数据 (`string[]`)                                                 | Array                      | `[]`          |
| title         | 图表标题                                                             | String                     | `''`          |
| height        | 图表高度                                                             | String/Number              | `'400px'`     |
| containerHeight | 容器高度                                                           | String/Number              | `''`          |
| theme         | 主题 (`'light'` 或 `'dark'`)                                         | String                     | `'light'`     |
| type          | 柱状图类型 (`'vertical'` 或 `'horizontal'`)                           | String                     | `'vertical'` |
| showLegend    | 是否显示图例                                                         | Boolean                    | `true`        |
| showLabel     | 是否显示标签                                                         | Boolean                    | `false`       |
| showTooltip   | 是否显示提示框                                                       | Boolean                    | `true`        |
| showGrid      | 是否显示网格线                                                       | Boolean                    | `true`        |
| showAxis      | 是否显示坐标轴                                                       | Boolean                    | `true`        |
| colors        | 自定义颜色数组                                                       | Array                      | 内置配色      |
| loading       | 是否显示加载状态                                                     | Boolean                    | `false`       |
| animation     | 是否启用动画                                                         | Boolean                    | `true`        |
| stacked       | 是否堆叠显示                                                         | Boolean                    | `false`       |
| yMin          | Y轴最小值                                                           | Number                     | `null`        |
| yMax          | Y轴最大值                                                           | Number                     | `null`        |

### BarChart 事件

| 事件名称         | 说明                 | 参数格式                                   |
|------------------|----------------------|--------------------------------------------|
| click            | 点击数据项时触发      | `{ data: number, name: string, index: number, category: string }` |

### 数据项结构
```javascript
// data 属性示例
[
  {
    name: '系列1',      // 系列名称
    values: [120, 200, 150, 80, 70], // 数据值数组
    color: '#FF0000'   // 可选，自定义颜色
  },
  {
    name: '系列2',
    values: [100, 150, 180, 90, 60]
  }
]

// xAxisData 属性示例
['一月', '二月', '三月', '四月', '五月']