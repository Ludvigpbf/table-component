import HeaderConfig from "./header-config.ts";

interface TableProps<T extends object> {
  // Data
  data?: T[];
  headers?: HeaderConfig<T>[]; // Table headers
  autoGenerateHeaders?: boolean; // Set if headers should auto generate from data keys,

  // Toolbar settings
  toolbar?: boolean; // Show toolbar
  toolbarCta?: boolean; //
  toolbarCtaData?: { key: number; label: string; onClick: () => void }[]; // Add toolbarCtaData prop

  // Table settings
  rows?: number; // Sets number of rows if data is not provided
  rowItemTitle?: string; // Sets title of row item
  columns?: number; // Sets number of columns
  headerTitles?: string[]; // Header titles

  menuHeaderClassName?: string; // Menu header class name
  footer?: boolean; // Show footer
  horizontalScroll?: boolean; // Enable horizontal scroll

  // Pagination
  pagination?: boolean; // Show pagination
  itemsPerPageOptions?: number[]; // Items per page options
  wrapperClassName?: string; // Wrapper class name

  // Caption
  caption?: string;
  captionClassName?: string;

  // Elements

  // Styling
  rowHoverColor?: string;
  thumbnailClass?: string;
  containerClassName?: string;
  searchInputClassName?: string;
  font?: string;
  headerFont?: string;
  headerFontColor?: string;
  headerColor?: string;
  rowFont?: string;
  rowFontColor?: string;
  rowColor?: string;
  fontColor?: string;
  bodyColor?: string;
  rounded?: boolean;

  // Select rows
  selectRows?: boolean;
  selectedRows?: number[];
  onRowSelect?: (rowIdx: number) => void;
  onDelete?: () => void;
  onCopy?: () => void;
  onMove?: () => void;
  children?: React.ReactNode;
  wrapperRole?: string;
  showThumbnails?: boolean;
  /* columnMapping?: (item: T, colIdx: number) => React.ReactNode; */
}

export default TableProps;
