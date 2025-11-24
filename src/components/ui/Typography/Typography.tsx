interface TypographyProps {
  variant: "label" | "title" | "description";
  children: React.ReactNode;
  className?: string;
}

export function Typography({variant, children, className}: TypographyProps) {
  const styles = {
    label: "text-sm text-var[(--primary-color)] font-normal",
    title: "text-2xl font-semibold text font-display",
    description: "text-sm text-[#667085] font-normal",
  };

  return <p className={`${styles[variant]} ${className}`}>{children}</p>;
}
