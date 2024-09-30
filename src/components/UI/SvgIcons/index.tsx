import React, { SVGProps, ReactNode } from 'react';

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  width: number | string;
  height: number | string;
  color?: string;
  children?: ReactNode;
}

const SvgIcon: React.FC<SvgIconProps> = ({ width = 24, height = 24, color, children, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`} // Adjust the viewBox as needed for your SVG
      fill={color}
      {...props}
    >
      {children}
    </svg>
  );
};

export default SvgIcon;
