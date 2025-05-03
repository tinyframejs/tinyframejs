[**tinyframejs**](../README.md)

***

[tinyframejs](../README.md) / DataFrame

# Class: DataFrame

Defined in: [core/DataFrame.js:15](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/core/DataFrame.js#L15)

DataFrame — chainable API wrapper for TinyFrame structure.
Provides convenient access to columns, row count, and conversion to array of objects.

## Constructors

### Constructor

> **new DataFrame**(`frame`): `DataFrame`

Defined in: [core/DataFrame.js:21](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/core/DataFrame.js#L21)

Main constructor.

#### Parameters

##### frame

`TinyFrame`

The underlying TinyFrame data structure

#### Returns

`DataFrame`

#### Throws

If frame is not a valid TinyFrame

## Properties

### \_frame

> **\_frame**: `TinyFrame`

Defined in: [core/DataFrame.js:25](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/core/DataFrame.js#L25)

## Accessors

### columns

#### Get Signature

> **get** **columns**(): `string`[]

Defined in: [core/DataFrame.js:43](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/core/DataFrame.js#L43)

Returns the list of column names.

##### Returns

`string`[]

***

### frame

#### Get Signature

> **get** **frame**(): `TinyFrame`

Defined in: [core/DataFrame.js:79](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/core/DataFrame.js#L79)

Returns the underlying TinyFrame data structure.

##### Returns

`TinyFrame`

***

### rowCount

#### Get Signature

> **get** **rowCount**(): `number`

Defined in: [core/DataFrame.js:51](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/core/DataFrame.js#L51)

Returns the number of rows in the DataFrame.

##### Returns

`number`

## Methods

### toArray()

> **toArray**(): `any`[]

Defined in: [core/DataFrame.js:60](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/core/DataFrame.js#L60)

Converts the DataFrame to an array of plain JavaScript objects (row-wise).

#### Returns

`any`[]

Array of row objects

***

### create()

> `static` **create**(`input`, `options?`): `DataFrame`

Defined in: [core/DataFrame.js:34](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/core/DataFrame.js#L34)

Factory method for creating a DataFrame from rows, columns, or another frame.

#### Parameters

##### input

`any`[] | `Record`\<`string`, `any`[]\> | `TinyFrame`

##### options?

`any` = `{}`

#### Returns

`DataFrame`
