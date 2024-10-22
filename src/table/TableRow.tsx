import { useState } from "react";

type TableRowProps = {
  children?: React.ReactNode;
  className?: string;
  isClickable?: boolean;
  asButton?: boolean; // Om true, rendera som <button>
  href?: string; // URL om raden ska vara en länk
  onClick?: () => void; // Klick-funktion för knappar
  onHoverColor?: string;
  horizontalScroll?: boolean;
};

const TableRow: React.FC<TableRowProps> = ({
  children,
  className,
  isClickable = false,
  asButton = false,
  href,
  onClick,
  onHoverColor = "",
  horizontalScroll = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const Component = isClickable
    ? asButton
      ? "button"
      : href
      ? "a"
      : "div"
    : "div";

  const props =
    isClickable && asButton ? { onClick } : isClickable && href ? { href } : {};

  const rowStyle = isHovered ? { backgroundColor: onHoverColor } : {};

  return (
    <Component
      className={`table-row${className ? ` ${className}` : ""}${horizontalScroll ? ` scrollable-x` : ""}`}
      role="row"
      {...props}
      onMouseEnter={() => setIsHovered(true)} // När musen är över raden
      onMouseLeave={() => setIsHovered(false)} // När musen lämnar raden
      style={rowStyle}
    >
      {children}
    </Component>
  );
};

export default TableRow;
