type TableCellProps = {
  children?: React.ReactNode;
  className?: string;
  isHeader?: boolean;
  isImageCell?: boolean;
  imageUrl?: string;
  thumbnailClass?: string;
  colSpan?: number;
  isSmallCell?: boolean;
};

const TableCell: React.FC<TableCellProps> = ({
  children,
  className,
  isHeader,
  isImageCell = false,
  imageUrl,
  thumbnailClass,
  colSpan = 1,
  isSmallCell = false,
}) => {
  return (
    <div
      className={`table-cell${isHeader ? " header-cell" : ""}${
        className ? ` ${className}` : ""
      }${isSmallCell ? " small-cell" : ""}`} // Add small-cell class if isSmallCell is true`}
      role={isHeader ? "columnheader" : "cell"}
      style={{
        flexGrow: colSpan, // Control the column span by flex-grow
      }}
    >
      {isImageCell && imageUrl ? (
        <img
          className={`thumbnail ${thumbnailClass}`}
          src={imageUrl}
          alt="Thumbnail"
        />
      ) : (
        children
      )}
    </div>
  );
};

export default TableCell;
