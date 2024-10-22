interface HeaderConfig<T> {
  label: string; // The label to display in the table header
  key: keyof T; // The key that maps to the data property
}

export default HeaderConfig;
