---
title: Icon | Simple UI
description: Icon 组件的文档
---

# Icon 图标
一套常用的图标集合。

## 基础用法
使用 `icon` 属性添加图标。图标名称请看 [fontawesome](https://fontawesome.com/icons) 官网 

<preview path="../demo/Icon/Basic.vue" title="基础用法" description="Icon 组件的基础用法"></preview>

## 颜色控制
修改 `type` 值来定义图标的样式颜色。
修改 `color` 值来自定义更丰富的色彩。

<preview path="../demo/Icon/colorIcon.vue" title="颜色控制" description="Icon 组件的颜色控制"></preview>

## 尺寸控制
修改 `size` 值来定义图标的尺寸大小。

<preview path="../demo/Icon/sizeIcon.vue" title="尺寸控制" description="Icon 组件的尺寸控制"></preview>

## 动画效果
修改 `spin` 、`pulse` 、`bounce` 、`shake` 等值来定义图标的动画效果。

<preview path="../demo/Icon/animationIcon.vue" title="动画效果" description="Icon 组件的动画效果"></preview>

### Icon 图标属性

|   **参数**    |                         **类型**                         | **默认值** |        **说明**        |                          **可选值**                          |
| :-----------: | :------------------------------------------------------: | :--------: | :--------------------: | :----------------------------------------------------------: |
| **基础属性**  |                                                          |            |                        |                                                              |
|   `border`    |                        `boolean`                         |  `false`   |      是否添加边框      |                       `true`, `false`                        |
| `fixedWidth`  |                        `boolean`                         |  `false`   |    是否启用等宽布局    |                       `true`, `false`                        |
|   `inverse`   |                        `boolean`                         |  `false`   |    是否启用反色模式    |                       `true`, `false`                        |
| **颜色控制**  |                                                          |            |                        |                                                              |
|    `type`     |                         `string`                         |     -      |      预设颜色类型      | `'primary'`, `'success'`, `'warning'`, `'danger'`, `'info'`  |
|    `color`    |                         `string`                         |     -      | 自定义颜色（覆盖type） |                      任意合法CSS颜色值                       |
| **尺寸控制**  |                                                          |            |                        |                                                              |
|    `size`     |                         `string`                         |     -      |        图标尺寸        | `'2xs'`, `'xs'`, `'sm'`, `'lg'`, `'xl'`, `'2xl'`, `'1x'`, `'2x'`, `'3x'`, `'4x'`, `'5x'`, `'6x'`, `'7x'`, `'8x'`, `'9x'`, `'10x'` |
| **变换效果**  |                                                          |            |                        |                                                              |
|    `flip`     |                         `string`                         |     -      |      镜像翻转方向      |            `'horizontal'`, `'vertical'`, `'both'`            |
|  `rotation`   |                   `number` | `string`                    |     -      |        旋转角度        |         `90`, `180`, `270`, `'90'`, `'180'`, `'270'`         |
| `swapOpacity` |                        `boolean`                         |  `false`   |    交换内外层透明度    |                       `true`, `false`                        |
| **动画效果**  |                                                          |            |                        |                                                              |
|    `spin`     |                        `boolean`                         |  `false`   |      持续旋转效果      |                       `true`, `false`                        |
|    `pulse`    |                        `boolean`                         |  `false`   |       脉冲式旋转       |                       `true`, `false`                        |
|   `bounce`    |                        `boolean`                         |  `false`   |        弹跳效果        |                       `true`, `false`                        |
|    `shake`    |                        `boolean`                         |  `false`   |        抖动效果        |                       `true`, `false`                        |
|    `beat`     |                        `boolean`                         |  `false`   |      心跳跳动效果      |                       `true`, `false`                        |
|    `fade`     |                        `boolean`                         |  `false`   |      渐隐渐现效果      |                       `true`, `false`                        |
|  `beatFade`   |                        `boolean`                         |  `false`   |      跳动淡入效果      |                       `true`, `false`                        |
|  `spinPulse`  |                        `boolean`                         |  `false`   |     脉冲式旋转组合     |                       `true`, `false`                        |
| `spinReverse` |                        `boolean`                         |  `false`   |      反向旋转模式      |                       `true`, `false`                        |
| **内容定义**  |                                                          |            |                        |                                                              |
|    `icon`     | `object` | `Array<string>` | `string` | `IconDefinition` |  **必填**  |        图标定义        |           Font Awesome对象、CSS类名、Iconify格式等           |
|    `mask`     |          `object` | `Array<string>` | `string`           |     -      |      叠加遮罩图标      |                 Font Awesome对象、CSS类名等                  |
|   `symbol`    |                   `boolean` | `string`                   |  `false`   |     SVG symbol模式     |               `true`（自动ID）, 自定义ID字符串               |
|    `title`    |                         `string`                         |     -      |     无障碍访问标题     |                        任意描述性文本                        |
| **布局控制**  |                                                          |            |                        |                                                              |
|  `listItem`   |                        `boolean`                         |  `false`   |       列表项模式       |                       `true`, `false`                        |
|    `pull`     |                         `string`                         |     -      |        浮动方向        |                     `'right'`, `'left'`                      |