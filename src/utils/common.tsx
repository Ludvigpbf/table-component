


export const generateHeaders = <T extends object>(data: T[]) => {
    if (data.length === 0) return [];
  
    // Create headers based on the first object's keys
    return Object.keys(data[0]).map((key) => ({
      label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the first letter
      key: key as keyof T,
    }));
  };
  
  export const normalizeHeaders = <T extends object>(
    headers: (string | { label: string; key: keyof T })[],
    autoGenerateHeaders: boolean,
    data: T[],
    defaultHeaders: { label: string; key: keyof T }[]
  ) => {
    return headers.length > 0
      ? headers.map((header) => {
          if (typeof header === "string") {
            return { label: header, key: header as keyof T };
          }
          return header;
        })
      : autoGenerateHeaders && data.length > 0
      ? generateHeaders(data)
      : defaultHeaders;
  };
  
  export const handleNextPage = (
    currentPage: number,
    totalPages: number,
    setCurrentPage: (page: number) => void
  ) => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  export const handlePrevPage = (
    currentPage: number,
    setCurrentPage: (page: number) => void
  ) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  export const handleItemsPerPageChange = (
    newItemsPerPage: number,
    setItemsPerPage: (itemsPerPage: number) => void,
    setCurrentPage: (page: number) => void
  ) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when items per page changes
  };