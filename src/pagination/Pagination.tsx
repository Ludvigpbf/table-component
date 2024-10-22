type PaginationProps = {
  children?: React.ReactNode;
  className?: string;
};

const Pagination: React.FC<PaginationProps> = ({ children, className }) => {
  return (
    <div className={`pagination${className ? ` ${className}` : ""}`} role="pagination">
      {children && children}
    </div>
  );
};
export default Pagination;
