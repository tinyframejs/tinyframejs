[**tinyframejs**](../README.md)

***

[tinyframejs](../README.md) / readTsv

# Function: readTsv()

> **readTsv**(`content`, `options`): [`DataFrame`](../classes/DataFrame.md)

Defined in: [io/readers/tsv.js:17](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/io/readers/tsv.js#L17)

Reads a TSV file and returns a DataFrame.

## Parameters

### content

`string`

TSV content as a string

### options

Options for parsing

#### delimiter?

`string`

Delimiter character (default is tab)

#### dynamicTyping?

`boolean`

Whether to automatically detect and convert types

#### frameOptions?

`any`

Options to pass to DataFrame.create

#### header?

`boolean`

Whether the TSV has a header row

#### skipEmptyLines?

`boolean`

Whether to skip empty lines

## Returns

[`DataFrame`](../classes/DataFrame.md)

DataFrame created from the TSV
