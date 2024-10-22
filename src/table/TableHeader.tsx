
interface HeaderProps {
    className?: string;
    children?: React.ReactNode;
}

const TableHeader: React.FC<HeaderProps> = ({children, className}) => {
  return (
    <div className={`table-header${className ? ` ${className}` : ""}`} role="header">
        {children}
    </div>
  )
};

export default TableHeader;
