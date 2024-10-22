
interface ToolbarProps {
    className?: string;
    children?: React.ReactNode;
}

const TableToolbar: React.FC<ToolbarProps> = ({children, className}) => {
  return (
    <div className={`toolbar-container${className ? ` ${className}` : ""}`} role="toolbar">
        {children}
    </div>
  )
};

export default TableToolbar;
