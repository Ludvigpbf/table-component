export type ToolbarCtaData = {
  key: number;
  label: string;
  onClick: () => void;
};

export type ToolbarCellProps = {
  children?: React.ReactNode;
  className?: string;
  toolbarCta?: boolean;
  toolbarCtaData?: ToolbarCtaData[];
  selectedRows?: number[];
  setSelectedRows?: React.Dispatch<React.SetStateAction<number[]>>;
  data?: unknown[];
};

const ToolbarCell: React.FC<ToolbarCellProps> = ({
  children,
  className,
  toolbarCta,
  toolbarCtaData,
  selectedRows = [],
  setSelectedRows = () => {},
  data = [],
}) => {
  const handleDelete = () => {
    const selectedData = selectedRows.map((rowIdx) => data[rowIdx]);
    alert(`Deleted rows: ${JSON.stringify(selectedData)}`);
    setSelectedRows([]); // Clear selection after delete
  };
  
  const handleCopy = () => {
    const selectedData = selectedRows.map((rowIdx) => data[rowIdx]);
    alert(`Copied rows: ${JSON.stringify(selectedData)}`);
  }
  const defaultToolbarCtaData: ToolbarCtaData[] = [
    { key: 1, label: "Delete", onClick: handleDelete },
    { key: 2, label: "Copy", onClick: handleCopy },
  ];

    const effectiveToolbarCtaData = toolbarCtaData || defaultToolbarCtaData;
  
  return (
    <div className={`toolbar-cell${className ? ` ${className}` : ""}`}>
      {toolbarCta && (
        <div className="toolbar-cta-container">
          {effectiveToolbarCtaData.map((cta) => (
            <button key={cta?.key} onClick={cta?.onClick}>
              {cta.label}
            </button>
          ))}
        </div>
      )}
      {children}
    </div>
  );
};

export default ToolbarCell;
