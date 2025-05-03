[**tinyframejs**](../README.md)

***

[tinyframejs](../README.md) / apiToFrame

# Function: apiToFrame()

> **apiToFrame**(`apiData`, `options`): [`DataFrame`](../classes/DataFrame.md)

Defined in: [io/transformers/apiToFrame.js:254](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/io/transformers/apiToFrame.js#L254)

Transforms API response data into a DataFrame
Handles various API response formats and normalizes them

## Parameters

### apiData

`any`

API data to transform

### options

Transformation options

#### clean?

Object with the following properties:

- `booleanFields?`: `string[]` - Array of fields to convert to booleans
- `customCleaner?`: `Function` - Custom cleaning function for each record
- `dateField?`: `string` - Name of date field to convert to Date object
- `numericFields?`: `string[]` - Array of fields to convert to numbers
- `removeEmptyStrings?`: `boolean` - Whether to remove empty strings
- `removeFields?`: `string[]` - Array of fields to remove
- `removeNulls?`: `boolean` - Whether to remove null/undefined values
- `renameFields?`: `any` - Object for renaming fields (oldName: newName)
- `stringFields?`: `string[]` - Array of fields to convert to strings
- `trimStrings?`: `boolean` - Whether to trim whitespace in strings

#### cleanFirst?

`boolean`

Whether to clean data before converting to DataFrame

#### copy?

`string`

Copy mode: 'none', 'shallow', or 'deep'

#### dataPath?

`string`

Path to data in the response (dot notation)

#### mapping?

`any`

Mapping of API fields to column names

#### postClean?

`any`

DataFrame cleaning options after conversion

#### saveRawData?

`boolean`

Whether to save raw data in the frame

#### transform?

`Function`

Custom transform function for each row

#### useTypedArrays?

`boolean`

Whether to use TypedArrays for numeric columns

## Returns

[`DataFrame`](../classes/DataFrame.md)

DataFrame created from the API data
