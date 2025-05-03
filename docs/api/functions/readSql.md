[**tinyframejs**](../README.md)

***

[tinyframejs](../README.md) / readSql

# Function: readSql()

> **readSql**(`connection`, `query`, `options`): `Promise`\<[`DataFrame`](../classes/DataFrame.md)\>

Defined in: [io/readers/sql.js:16](https://github.com/AlphaQuantJS/tinyframejs/blob/8368a3e56ba5f1155368e642d928da821698888c/src/io/readers/sql.js#L16)

Reads data from a SQL database and returns a DataFrame.
This function requires a database connection object that supports a query method.

## Parameters

### connection

`any`

Database connection object

### query

`string`

SQL query to execute

### options

Options for reading

#### frameOptions?

`any`

Options to pass to DataFrame.create

#### params?

`any`[]

Parameters for the query

## Returns

`Promise`\<[`DataFrame`](../classes/DataFrame.md)\>

Promise resolving to DataFrame created from the query results
