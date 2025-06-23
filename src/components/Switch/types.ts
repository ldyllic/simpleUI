// 开关值类型定义
export type SwitchValueType = boolean | string | number;

// 开关组件属性接口
export interface SwtichProps {
  // 双向绑定值（必填）
  modelValue: SwitchValueType;
  
  // 状态控制
  disabled?: boolean;
  
  // 显示文本
  activeText?: string;
  inactiveText?: string;
  
  // 值映射
  activeValue?: SwitchValueType;
  inactiveValue?: SwitchValueType;
  
  // 基础属性
  name?: string;
  id?: string;
  size?: 'small' | 'large';
}

export interface SwtichEmits {
  /**
   * 双向绑定更新事件
   * @param value - 更新后的开关状态值
   */
  (e: 'update:modelValue', value: SwitchValueType): void;
  
  /**
   * 状态改变确认事件
   * @param value - 变化后的开关状态值
   */
  (e: 'change', value: SwitchValueType): void;
}