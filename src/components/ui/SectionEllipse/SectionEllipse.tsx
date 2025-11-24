import React from "react";

interface CardEllipseProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  left?: number | string;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  color?: string;
  opacity?: number;
  blur?: number | string;
  style?: React.CSSProperties;
  className?: string;
}

const SectionEllipse: React.FC<CardEllipseProps> = ({
  width = 260,
  height = 120,
  left,
  top,
  right,
  bottom,
  color = "#b4e3fd",
  opacity = 0.5,
  blur = 32,
  style,
  className = "",
  ...rest
}) => {
  return (
    <div
      className={`absolute rounded-full pointer-events-none z-0 ${className}`}
      style={{
        width,
        height,
        left,
        top,
        right,
        bottom,
        background: color,
        opacity,
        filter: `blur(${typeof blur === "number" ? `${blur}px` : blur})`,
        ...style,
      }}
      aria-hidden="true"
      {...rest}
    />
  );
};

export default SectionEllipse;
