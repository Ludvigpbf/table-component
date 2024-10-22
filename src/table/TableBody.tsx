
type TableBodyProps = {
    children?: React.ReactNode;
    className?: string;
    horizontalScroll?: boolean;
};

const TableBody: React.FC<TableBodyProps> = ({children, className, horizontalScroll}) => {
    return (
        <div className={`table-body${className ? ` ${className}` : ""}${horizontalScroll ? ` scrollable` : ""}`} role="rowgroup">
            {children}
        </div>
    );
}

export default TableBody;