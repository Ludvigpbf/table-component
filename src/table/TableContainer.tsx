interface TableProps {
  children?: React.ReactNode;
  className?: string;
  caption?: string;
  captionClassName?: string;
  wrapperRole?: string;
  horizontalScroll?: boolean;
}

const TableContainer: React.FC<TableProps> = ({
  children,
  className,
  caption,
  captionClassName,
  wrapperRole,
  horizontalScroll = true,
}) => {
  return (
    <div className="table-content">
      {caption && (
        <caption className={`table-caption${captionClassName ? ` ${captionClassName}` : ""}`}>
          {caption}
        </caption>
      )}
      <div className={`table-content${className ? ` ${className}${horizontalScroll ? ` scrollable` : "scrollable"}` : ""}`} role={wrapperRole}>
        {children}
      </div>
    </div>
  );
};

export default TableContainer;
