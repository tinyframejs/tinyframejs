[**tinyframejs**](../README.md)

***

[tinyframejs](../README.md) / arrayToFrame

# Function: arrayToFrame()

> **arrayToFrame**(`arrayData`, `options`): [`DataFrame`](../classes/DataFrame.md)

Defined in: [io/transformers/arrayToFrame.js:17](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/io/transformers/arrayToFrame.js#L17)

Transforms array data into a DataFrame.

## Parameters

### arrayData

`any`[]

Array data to transform

### options

Transformation options

#### columns?

`any`[]

Column names for the data

#### copy?

`string`

Copy mode

#### headerRow?

`boolean`

Whether the first row contains column names

#### saveRawData?

`boolean`

Whether to save raw data in the frame

#### useTypedArrays?

`boolean`

Whether to use TypedArrays for numeric columns

## Returns

[`DataFrame`](../classes/DataFrame.md)

DataFrame created from the array data
