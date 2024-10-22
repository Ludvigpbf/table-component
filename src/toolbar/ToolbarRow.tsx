import { useState } from "react";

type ToolbarRowProps = {
  children?: React.ReactNode;
  className?: string;
  onHoverColor?: string;
};

const ToolbarRow: React.FC<ToolbarRowProps> = ({
  children,
  className,
  onHoverColor = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const rowStyle = isHovered ? { backgroundColor: onHoverColor } : {};

  return (
    <div
      className={`toolbar-row${className ? ` ${className}` : ""}`}
      role="row"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={rowStyle}
    >
      {children}
    </div>
  );
};

export default ToolbarRow;
