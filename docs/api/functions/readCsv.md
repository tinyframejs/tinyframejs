[**tinyframejs**](../README.md)

***

[tinyframejs](../README.md) / readCsv

# Function: readCsv()

> **readCsv**(`content`, `options`): [`DataFrame`](../classes/DataFrame.md)

Defined in: [io/readers/csv.js:23](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/io/readers/csv.js#L23)

Reads a CSV file and returns a DataFrame.
Uses the csv-parse module for parsing if available, or the built-in parser
if the external module is not available.

## Parameters

### content

`string`

CSV content as a string

### options

Options for parsing

#### delimiter?

`string`

Delimiter character

#### dynamicTyping?

`boolean`

Whether to automatically
  detect and convert types

#### frameOptions?

`any`

Options to pass to DataFrame.create

#### header?

`boolean`

Whether the CSV has a header row

#### skipEmptyLines?

`boolean`

Whether to skip empty lines

## Returns

[`DataFrame`](../classes/DataFrame.md)

DataFrame created from the CSV
