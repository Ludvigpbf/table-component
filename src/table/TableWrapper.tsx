interface TableProps {
  children?: React.ReactNode;
  className?: string;
  caption?: string;
  captionClassName?: string;
  wrapperRole?: string;
  horizontalScroll?: boolean;
}

const TableWrapper: React.FC<TableProps> = ({
  children,
  className,
  caption,
  captionClassName,
  wrapperRole,
  horizontalScroll = true,
}) => {
  return (
    <div
      className={`table-wrapper${
        className
          ? ` ${className}${horizontalScroll ? ` scrollable` : "scrollable"}`
          : ""
      }`}
      role={wrapperRole}
    >
      {caption && (
        <caption
          className={`table-caption${
            captionClassName ? ` ${captionClassName}` : ""
          }`}
        >
          {caption}
        </caption>
      )}

      {children}
    </div>
  );
};

export default TableWrapper;
