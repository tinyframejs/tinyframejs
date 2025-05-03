[**tinyframejs**](../README.md)

***

[tinyframejs](../README.md) / readExcel

# Function: readExcel()

> **readExcel**(`data`, `options`): [`DataFrame`](../classes/DataFrame.md)

Defined in: [io/readers/excel.js:25](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/io/readers/excel.js#L25)

Reads Excel data and returns a DataFrame.
Uses the 'exceljs' package for Excel file parsing.

## Parameters

### data

Excel file data as ArrayBuffer, Uint8Array, or path to file

`string` | `ArrayBuffer` | `Uint8Array`

### options

Options for parsing

#### dynamicTyping?

`boolean`

Whether to automatically detect and convert types

#### frameOptions?

`any`

Options to pass to DataFrame.create

#### header?

`boolean`

Whether the sheet has a header row

#### sheet?

`string` \| `number`

Sheet name or index to read (empty for first sheet)

## Returns

[`DataFrame`](../classes/DataFrame.md)

DataFrame created from the Excel data
