import { Interpolation, Theme, css, useTheme } from "@emotion/react";
import { ClassAttributes, HTMLAttributes } from "react";

const Button = ({
  variant = "primary",
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement> &
  ClassAttributes<HTMLButtonElement> & {
    css?: Interpolation<Theme>;
    variant?: "primary" | "secondary" | "extra";
  }) => {
  const theme = useTheme();

  return (
    <button
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        font-size: 14px;
        font-weight: 700;
        border-radius: 4px;
        padding: 0 16px;
        cursor: pointer;
        flex-shrink: 0;
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
