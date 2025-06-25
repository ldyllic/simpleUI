---
title: LineChart | Simple UI
description: LineChart 折线图组件的文档
---

# LineChart 折线图
用于展示数据趋势的折线图组件。

## 基础用法
使用 `data` 和 `xAxisData` 属性传入数据源。

<preview path="../demo/LineChart/Basic.vue" title="基础折线图" description="LineChart 组件的基础用法"></preview>

## 折线图类型
通过 `type` 属性切换折线图类型：
- `line`: 普通折线图
- `smooth`: 平滑曲线图
- `step`: 阶梯线图

<preview path="../demo/LineChart/Type.vue" title="折线图类型" description="展示三种折线图类型的效果"></preview>

## 面积图
设置 `showArea` 属性为 `true` 来创建面积图。

<preview path="../demo/LineChart/Area.vue" title="面积图" description="面积图的展示效果"></preview>

## 主题切换
通过 `theme` 属性切换浅色/深色主题。

<preview path="../demo/LineChart/Theme.vue" title="主题切换" description="折线图的浅色/深色主题效果"></preview>

## 数据缩放
设置 `dataZoom` 属性为 `true` 来启用数据缩放功能。

<preview path="../demo/LineChart/DataZoom.vue" title="数据缩放" description="折线图的数据缩放功能"></preview>

## 加载状态
通过 `loading` 属性控制加载状态。

<preview path="../demo/LineChart/Loading.vue" title="加载状态" description="折线图加载中的效果"></preview>

## API文档

### LineChart 属性

| 参数           | 说明                                                                 | 类型                         | 默认值        |
|----------------|----------------------------------------------------------------------|-----------------------------|---------------|
| data          | 数据源 (`[{ name: string, values: number[] }]`)                      | Array                      | `[]`          |
| xAxisData     | X轴数据 (`string[]` 或 `number[]`)                                  | Array                      | `[]`          |
| title         | 图表标题                                                             | String                     | `''`          |
| height        | 图表高度                                                             | String/Number              | `'400px'`     |
| containerHeight | 容器高度                                                           | String/Number              | `''`          |
| theme         | 主题 (`'light'` 或 `'dark'`)                                         | String                     | `'light'`     |
| type          | 折线图类型 (`'line'`, `'smooth'` 或 `'step'`)                         | String                     | `'line'`      |
| showLegend    | 是否显示图例                                                         | Boolean                    | `true`        |
| showLabel     | 是否显示标签                                                         | Boolean                    | `false`       |
| showTooltip   | 是否显示提示框                                                       | Boolean                    | `true`        |
| showGrid      | 是否显示网格线                                                       | Boolean                    | `true`        |
| showAxis      | 是否显示坐标轴                                                       | Boolean                    | `true`        |
| showSymbol    | 是否显示数据点                                                       | Boolean                    | `true`        |
| showArea      | 是否显示面积图                                                       | Boolean                    | `false`       |
| colors        | 自定义颜色数组                                                       | Array                      | 内置配色      |
| loading       | 是否显示加载状态                                                     | Boolean                    | `false`       |
| animation     | 是否启用动画                                                         | Boolean                    | `true`        |
| yMin          | Y轴最小值                                                           | Number                     | `null`        |
| yMax          | Y轴最大值                                                           | Number                     | `null`        |
| dataZoom      | 是否启用数据缩放                                                     | Boolean                    | `false`       |

### LineChart 事件

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