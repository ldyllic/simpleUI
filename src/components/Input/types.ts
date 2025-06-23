export interface InputProps {
  /** 输入框类型（默认：'text'） */
  type?: string;
  
  /** 双向绑定值（必填） */
  modelValue: string;
  
  /** 输入框尺寸 */
  size?: 'large' | 'small';
  
  /** 是否禁用状态（默认：false） */
  disabled?: boolean;
  
  /** 是否显示清除按钮（默认：false） */
  clearable?: boolean;
  
  /** 是否显示密码切换按钮（默认：false） */
  showPassword?: boolean;
  
  /** 输入框占位文本 */
  placeholder?: string;
  
  /** 是否只读状态（默认：false） */
  readonly?: boolean;
  
  /** 自动补全设置（默认：'off'） */
  autocomplete?: string;
  
  /** 是否自动获取焦点（默认：false） */
  autofocus?: boolean;
  
  /** 关联的表单 ID */
  form?: string;
}
export interface InputEmits {
  /** Vue 双向绑定事件 - 同步输入框值变化 */
  (e: 'update:modelValue', value: string): void;
  
  /** 实时输入变化事件 - 每次值变化时触发 */
  (e: 'input', value: string): void;
  
  /** 确认值变化事件 - 失焦后触发 */
  (e: 'change', value: string): void;
  
  /** 获得焦点事件 */
  (e: 'focus', value: FocusEvent): void;
  
  /** 失去焦点事件 */
  (e: 'blur', value: FocusEvent): void;
  
  /** 清除按钮点击事件 */
  (e: 'clear'): void;
}

export interface InputInstance {
  ref: HTMLInputElement | HTMLTextAreaElement;
}