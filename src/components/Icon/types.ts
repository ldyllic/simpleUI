import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface IconProps {
  // ======= 视觉样式控制 ======= //
  border?: boolean       // 添加边框，默认false
  fixedWidth?: boolean   // 启用等宽布局，默认false
  inverse?: boolean      // 反色模式，默认false
  
  // 颜色控制
  type?: 'primary'| 'success'| 'warning'| 'danger'| 'info' // 预设颜色类型
  color?: string         // 自定义颜色（覆盖type设置）
  
  // ======= 尺寸控制 ======= //
  size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | 
         '1x' | '2x' | '3x' | '4x' | '5x' | 
         '6x' | '7x' | '8x' | '9x' | '10x'  // 16种尺寸选项
  
  // ======= 变换效果 ======= //
  flip?: 'horizontal' | 'vertical' | 'both'  // 镜像翻转方向
  rotation?: 90 | 180 | 270 | '90' | '180' | '270' // 旋转角度选项
  swapOpacity?: boolean  // 交换内外层透明度，默认false
  
  // ======= 动画控制 ======= //
  // 基础动画
  spin?: boolean         // 持续旋转效果
  pulse?: boolean        // 脉冲式旋转
  
  // 高级动画
  bounce?: boolean       // 弹跳效果
  shake?: boolean        // 抖动效果
  beat?: boolean         // 心跳跳动效果
  fade?: boolean         // 渐隐渐现效果
  beatFade?: boolean     // 跳动淡入效果
  spinPulse?: boolean    // 脉冲式旋转组合
  spinReverse?: boolean  // 反向旋转模式
  
  // ======= 内容控制 ======= //
  // 图标定义（必需）
  icon: object | Array<string> | string | IconDefinition
  
  // 遮罩功能
  mask?: object | Array<string> | string  // 叠加遮罩图标
  
  // 高级渲染
  symbol?: boolean | string  // SVG symbol模式（true或自定义ID）
  title?: string         // 无障碍访问标题
  
  // ======= 布局控制 ======= //
  listItem?: boolean    // 列表项模式，默认false
  pull?: 'right' | 'left' // 浮动方向（left/right）
}