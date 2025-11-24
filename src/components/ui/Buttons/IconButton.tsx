import {ReactNode} from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "static";
type ButtonSize = "sm" | "md" | "lg" | number;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  active?: boolean;
  color?: string;
  iconSize?: number;
  size?: ButtonSize;
  className?: string;
}

const sizeToStyle: Record<Exclude<ButtonSize, number>, string> = {
  sm: "w-[42px] h-[42px]",
  md: "w-[46px] h-[46px]",
  lg: "w-[50px] h-[50px]",
};

const variantToStyle: Record<ButtonVariant, string> = {
  primary: "hover:bg-white hover:text-[var(--active-icon-color)]",
  secondary: "text-white bg-[var(--primary-color)] hover:bg-white hover:text-[var(--active-icon-color)]",
  static: "",
};

const baseStyles =
  "rounded-full flex items-center justify-center bg-[var(--icon-bg)] transition-colors duration-200";

export default function IconButton({
  children,
  variant = "primary",
  active = false,
  color = "",
  className = "",
  size = "md",
  iconSize = 20,
  ...props
}: ButtonProps) {
  const sizeStyle =
    typeof size === "number"
      ? `w-[${size}px] h-[${size}px]`
      : sizeToStyle[size];

  const variantStyle = active
    ? "bg-white text-[var(--active-icon-color)]"
    : variantToStyle[variant];

  return (
    <button
      className={clsx(baseStyles, sizeStyle, variantStyle, color, className)}
      {...props}
    >
      <span
        className="flex items-center justify-center"
        style={{width: iconSize, height: iconSize}}
      >
        {children}
      </span>
    </button>
  );
}
