import { ReactNode } from "react";

interface ForecastButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "link";
  icon?: ReactNode;
  className?: string;
}

export function ForecastButton({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}: ForecastButtonProps) {
  if (variant === "link") {
    return (
      <button
        type="button"
        className={`inline-flex items-center text-[#306af4] bg-transparent font-medium rounded-full px-6 py-2 text-[15px] gap-2 hover:bg-[#eaf0fe] transition-colors font-display ${className}`}
        {...props}
      >
        {icon && <span className="w-[18px] h-[18px] flex items-center">{icon}</span>}
        {children}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`inline-flex items-center bg-[#306af4] hover:bg-[#1953e6] text-white font-medium rounded-full px-6 py-2 text-[15px] transition-colors font-display ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default ForecastButton;