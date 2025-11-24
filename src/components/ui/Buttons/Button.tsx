import { ReactNode } from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[#306af4] hover:bg-[#1953e6] text-white',
  link: 'text-[#306af4] bg-transparent hover:bg-[#eaf0fe]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2 text-[15px]',
  lg: 'px-8 py-3 text-base',
};

const baseStyles =
  'inline-flex items-center font-medium rounded-full transition-colors font-display gap-2';

const iconSizeMap: Record<ButtonSize, string> = {
  sm: 'w-[16px] h-[16px]',
  md: 'w-[18px] h-[18px]',
  lg: 'w-[20px] h-[20px]',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {icon && (
        <span className={clsx(iconSizeMap[size], 'flex items-center justify-center')}>{icon}</span>
      )}
      {children}
    </button>
  );
}

export default Button;
