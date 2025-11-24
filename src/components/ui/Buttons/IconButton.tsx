import {ReactNode} from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  active?: boolean;
  color?: string;
  size?: "sm" | "md" | "lg" | number;
}

export default function IconButton({
  children,
  variant = "primary",
  active = false,
  color = "",
  className = "",
  size = "md",
  ...props
}: ButtonProps) {
  let sizeStyle = "";
  if (typeof size === "string") {
    if (size === "sm") sizeStyle = "w-[42px] h-[42px]";
    else if (size === "md") sizeStyle = "w-[46px] h-[46px]";
    else if (size === "lg") sizeStyle = "w-[50px] h-[50px]";
  } else if (typeof size === "number") {
    sizeStyle = `w-[${size}px] h-[${size}px]`;
  }
  const base =
    "rounded-full flex items-center justify-center bg-[var(--icon-bg)] transition-colors duration-200 hover:bg-white hover:text-[var(--active-icon-color)]";

  const getVariantStyles = () => {
    if (active) {
      return "bg-white text-[var(--active-icon-color)]";
    } else if (variant === "primary") {
      return "";
    } else if (variant === "secondary") {
      return "text-white bg-[var(--primary-color)]";
    }
  };

  return (
    <button
      className={`${base} ${sizeStyle} ${getVariantStyles()} ${color}${className}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}
