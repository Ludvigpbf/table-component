# React Table Component

This project is a customizable React table component that allows you to display tabular data with various features such as pagination, row selection, and thumbnail images. The component is highly configurable through a set of props.

## Installation

To install the component, use npm or yarn:

```
npm install @flycktcoding/react-table
```

or

```
yarn add @flycktcoding/react-table
```

## Usage

Here's an example of how to use the table component:

## Props

### Data

- **data:** `T[]` <br/>
  The data to be displayed in the table.
- **headers:** `HeaderConfig<T>[]`<br/>
  Table headers configuration.
- **autoGenerateHeaders:** `boolean`<br/>
  Set if headers should auto-generate from data keys.

### Table Settings

- **rows:** `number`<br/>
  Sets the number of rows if data is not provided.
- **rowItemTitle:** `string`<br/>
  Sets the title of the row item.
- **columns:** `number`<br/>
  Sets the number of columns.
- **header:** `boolean`<br/>
  Show table header.
- **headerTitles:** `string[]`<br/>
  Header titles.
- **menuHeader:** `boolean`<br/>
  Show menu header.
- **menuHeaderClassName:** `string`<br/>
  Menu header class name.
- **footer:** `boolean`<br/>
  Show footer.

### Pagination<br/>

- **pagination:** `boolean`<br/>
  Show pagination.
- **itemsPerPageOptions:** `number[]`<br/>
  Items per page options.

### Styling<br/>

- **wrapperClassName:** `string`<br/>
  Wrapper class name.
- **caption:** `string`<br/>
  Table caption.
- **captionClassName:** `string`<br/>
  Caption class name.
- **rowHoverColor:** `string`<br/>
  Row hover color.
- **thumbnailClass:** `string`<br/>
  Class name for thumbnail images.
- **containerClassName:** `string`<br/>
  Container class name.
- **searchInputClassName:** `string`<br/>
  Search input class name.

### Select Rows<br/>

- **selectRows:** `boolean`<br/>
  Enable row selection.
- **selectedRows:** `number[]`<br/>
  Array of selected row indices.
- **onRowSelect:** `(rowIdx: number) => void`<br/>
  Callback function when a row is selected.
- **onDelete:** `() => void`<br/>
  Callback function when the delete button is clicked.
- **onCopy:** `() => void`<br/>
  Callback function when the copy button is clicked.
- **onMove:** `() => void`<br/>
  Callback function when the move button is clicked.

### Miscellaneous<br/>

- **children:** `React.ReactNode`<br/>
  Children nodes to be rendered inside the table.
- **wrapperRole:** `string`<br/>
  Role attribute for the table wrapper.
- **showThumbnails:** `boolean`<br/>
  Show thumbnails in the table.

License
This project is licensed under the MIT License. See the LICENSE file for details.
