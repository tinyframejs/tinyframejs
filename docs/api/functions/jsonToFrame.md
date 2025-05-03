[**tinyframejs**](../README.md)

***

[tinyframejs](../README.md) / jsonToFrame

# Function: jsonToFrame()

> **jsonToFrame**(`jsonData`, `options`): [`DataFrame`](../classes/DataFrame.md)

Defined in: [io/transformers/jsonToFrame.js:15](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/io/transformers/jsonToFrame.js#L15)

Transforms JSON data into a DataFrame.

## Parameters

### jsonData

`any`

JSON data to transform

### options

Transformation options

#### copy?

`string`

Copy mode: 'none', 'shallow', or 'deep'

#### saveRawData?

`boolean`

Whether to save raw data in the frame

#### useTypedArrays?

`boolean`

Whether to use TypedArrays for numeric columns

## Returns

[`DataFrame`](../classes/DataFrame.md)

DataFrame created from the JSON data
