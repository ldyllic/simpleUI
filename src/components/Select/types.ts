import type { VNode } from "vue";

// 选项类型定义
export interface SelectOption {
  label: string;       // 选项显示文本（必填）
  value: string;       // 选项实际值（必填）
  disabled?: boolean;  // 是否禁用该选项（可选）
}

export type RenderLabelFunc = (option: SelectOption) => VNode
export type CustomFilterFunc = (value: string) => SelectOption[]
export type CustomFilterRemoteFunc = (value: string) => Promise<SelectOption[]>

// 组件属性接口
export interface SelectProps {
  modelValue: string;    // 当前选中的选项值（必填）
  options?: SelectOption[]; // 选项列表（必填）
  placeholder: string;   // 占位提示文本（必填）
  disabled: boolean;     // 是否禁用选择器（必填）
  clearable?: boolean;
  renderLabel?: RenderLabelFunc;
  filterable?: boolean;
  filterMethod?: CustomFilterFunc;
  remote?: boolean;
  remoteMethod?: CustomFilterRemoteFunc;
}

// 组件内部状态
export interface SelectStates {
  inputValue: string;            // 输入框显示值
  selectedOption: null | SelectOption; // 当前选中项
  mouseHover: boolean;
  loading: boolean;
  highlightIndex: number
}

export interface SelectEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
  (e: 'visible-change', value: boolean): void;
  (e: 'clear'): void;
}