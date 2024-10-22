type TableFooterProps = {
  children?: React.ReactNode;
  className?: string;
};

const TableFooter: React.FC<TableFooterProps> = ({ children, className }) => {
  return (
    <div className={`table-footer${className ? ` ${className}` : ""}`} role="rowgroup">
      {children && children}
    </div>
  );
};
export default TableFooter;
