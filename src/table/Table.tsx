import { useState } from "react";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableContainer from "./TableContainer";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import InputField from "../input/InputField";
import { defaultData, defaultHeaders } from "../mockData/data.ts";
/* import {
  generateHeaders,
  normalizeHeaders,
  handleItemsPerPageChange,
  handleNextPage,
  handlePrevPage,
} from "../utils/common.ts"; */
import TableProps from "../interface/table-interface.ts";
import TableToolbar from "../toolbar/TableToolbar.tsx";
import ToolbarRow from "../toolbar/ToolbarRow.tsx";
import ToolbarCell from "../toolbar/ToolbarCell.tsx";
import Pagination from "../pagination/Pagination.tsx";
import TableWrapper from "./TableWrapper.tsx";

const Table = <T extends object>({
  data = [],
  headers = [],
  autoGenerateHeaders = false,
  caption,
  captionClassName,
  wrapperClassName,
  wrapperRole = "table",
  columns = 5,
  rows = 10,
  rowItemTitle = "Rows",
  toolbar = true,
  toolbarCta,
  toolbarCtaData = [],

  menuHeaderClassName,
  footer = true,

  // Styling
  rowHoverColor = "#f5f5f5",
  thumbnailClass,
  horizontalScroll = true,
  /* font,
  headerFont,
  headerFontColor,
  headerColor,
  rowFont,
  rowFontColor,
  rowColor,
  fontColor,
  bodyColor,
   */

  selectRows = true,
  pagination = true,
  itemsPerPageOptions = [10, 20, 30], // Items per page default
  selectedRows = [],
  onRowSelect = () => {},
  containerClassName,
  searchInputClassName,
  showThumbnails = false,
}: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]); // Items per page
  const totalPages = Math.ceil(rows / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const effectiveColumns = headers.length > 0 ? headers.length : columns;
  const effectiveData = data.length > 0 ? data : defaultData;
  const currentRows = effectiveData.slice(startIdx, startIdx + itemsPerPage);

  /*   const normalizedHeaders = normalizeHeaders(headers, autoGenerateHeaders, data, defaultHeaders);
   */
  const generateHeaders = (data: T[]) => {
    if (data.length === 0) return [];

    // Create headers based on the first object's keys
    return Object.keys(data[0]).map((key) => ({
      label: key.charAt(0).toUpperCase() + key.slice(1), // Gör första bokstaven stor
      key: key as keyof T,
    }));
  };
  const normalizedHeaders =
    headers.length > 0
      ? headers.map((header) => {
          if (typeof header === "string") {
            return { label: header, key: header as keyof T };
          }
          return header;
        })
      : autoGenerateHeaders && data.length > 0
      ? generateHeaders(data)
      : defaultHeaders;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Återställ till första sidan när antal rader per sida ändras
  };

  return (
    <TableWrapper
      className={wrapperClassName}
      caption={caption}
      captionClassName={captionClassName}
      wrapperRole={wrapperRole}
      horizontalScroll={horizontalScroll}
    >
      {toolbar && (
        <TableToolbar>
          <ToolbarRow
            className={`${
              menuHeaderClassName ? ` ${menuHeaderClassName}` : ""
            }`}
            onHoverColor={rowHoverColor}
          >
            <ToolbarCell>
              <InputField
                label="Search"
                name="searchfield"
                containerClassName={containerClassName}
                className={searchInputClassName}
              />
            </ToolbarCell>
            {selectRows &&
              toolbarCtaData.map((cta) => (
                <ToolbarCell
                  key={cta.key}
                  toolbarCta={toolbarCta}
                  toolbarCtaData={[cta]}
                ></ToolbarCell>
              ))}
          </ToolbarRow>
        </TableToolbar>
      )}

      <TableContainer>
        <TableHeader>
          <TableRow
            horizontalScroll={horizontalScroll}
            onHoverColor={rowHoverColor}
          >
            {selectRows && (
              <TableCell isHeader isSmallCell>
                Select
              </TableCell>
            )}
            {normalizedHeaders.length > 0
              ? normalizedHeaders.map((header, idx) => (
                  <TableCell
                    key={idx}
                    isHeader
                    isSmallCell={header.key === "thumbnail"}
                  >
                    <h2>{header.label}</h2>
                  </TableCell>
                ))
              : Array.from({ length: effectiveColumns }, (_, colIdx) => (
                  <TableCell key={colIdx} isHeader>
                    <h2>Header {colIdx + 1}</h2>
                  </TableCell>
                ))}
          </TableRow>
        </TableHeader>
        <TableBody horizontalScroll={horizontalScroll}>
          {currentRows.map((item, rowIdx) => (
            <TableRow
              key={rowIdx}
              onHoverColor={rowHoverColor}
              horizontalScroll={horizontalScroll}
            >
              {selectRows && (
                <TableCell className="checkbox" isSmallCell>
                  <input
                    type="checkbox"
                    checked={selectedRows?.includes(rowIdx)}
                    onChange={() => onRowSelect(rowIdx)}
                  />
                </TableCell>
              )}
              {normalizedHeaders.map((header, colIdx) => {
                const cellValue = (item as T)[header.key as keyof T];
                return (
                  <TableCell
                    key={colIdx}
                    thumbnailClass={thumbnailClass}
                    isImageCell={showThumbnails && header.key === "thumbnail"}
                    imageUrl={
                      showThumbnails && header.key === "thumbnail"
                        ? (cellValue as string)
                        : undefined
                    }
                    isSmallCell={showThumbnails && header.key === "thumbnail"}
                  >
                    <p>{cellValue as React.ReactNode}</p>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
        {footer && <TableFooter></TableFooter>}
      </TableContainer>
      {pagination && (
        <Pagination>
          {pagination ? (
            <TableRow>
              <TableCell colSpan={columns}>
                {/* Paginering */}
                {/* Val av antal rader per sida */}
                <div className="row-option-container">
                  <span>Rows per page: </span>
                  {itemsPerPageOptions.map((option) => (
                    <button
                      className="cta-btn"
                      key={option}
                      onClick={() => handleItemsPerPageChange(option)}
                      style={{
                        fontWeight: itemsPerPage === option ? "bold" : "normal",
                      }}
                    >
                      {option}
                    </button>
                  ))}{" "}
                  <span>
                    ({rows} {rowItemTitle})
                  </span>
                </div>
                <div
                  style={{ display: "flex", gap: "1rem", marginLeft: "auto" }}
                >
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="cta-btn"
                  >
                    Previous
                  </button>
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    className="cta-btn"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            <TableRow>
              {Array.from({ length: columns }, (_, colIdx) => (
                <TableCell key={colIdx}></TableCell>
              ))}
            </TableRow>
          )}
        </Pagination>
      )}
    </TableWrapper>
  );
};

export default Table;
