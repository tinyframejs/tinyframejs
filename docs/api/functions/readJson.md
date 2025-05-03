[**tinyframejs**](../README.md)

***

[tinyframejs](../README.md) / readJson

# Function: readJson()

> **readJson**(`content`, `options`): [`DataFrame`](../classes/DataFrame.md)

Defined in: [io/readers/json.js:15](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/io/readers/json.js#L15)

Reads JSON content and returns a DataFrame.
Uses native JSON parsing capabilities of JavaScript.

## Parameters

### content

`any`

JSON content as a string or parsed object

### options

Options for parsing

#### frameOptions?

`any`

Options to pass to DataFrame.create

#### recordPath?

`string`

Path to records in nested JSON (dot notation)

## Returns

[`DataFrame`](../classes/DataFrame.md)

DataFrame created from the JSON
