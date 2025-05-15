import type { PropType } from "vue";

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";

export type BUttonSize = "large" | "small";

export interface ButtonProps {
  type?: ButtonType;
  size?: BUttonSize;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
}

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
  },
  size: {
    type: String as PropType<BUttonSize>,
  },
  plain: {
    type: Boolean,
  },
  round: {
    type: Boolean,
  },
  circle: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
};
