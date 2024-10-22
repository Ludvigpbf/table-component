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
};
const defaultToolbarCtaData: ToolbarCtaData[] = [
  { key: 1, label: "Delete", onClick: () => console.log("Delete action") },
  { key: 2, label: "Copy", onClick: () => console.log("Copy action") },
  { key: 3, label: "Move", onClick: () => console.log("Move action") },
];

const ToolbarCell: React.FC<ToolbarCellProps> = ({
  children,
  className,
  toolbarCtaData = defaultToolbarCtaData,
  toolbarCta,
}) => {
  return (
    <div className={`toolbar-cell${className ? ` ${className}` : ""}`}>
      {toolbarCta && (
        <div className="toolbar-cta-container">
          {toolbarCtaData &&
            toolbarCtaData?.map((cta) => (
              <button key={cta?.key} onClick={cta?.onClick}>
                {cta?.label}
              </button>
            ))}
        </div>
      )}
      {children}
    </div>
  );
};

export default ToolbarCell;
