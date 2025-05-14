[**tinyframejs**](../README.md)

***

[tinyframejs](../README.md) / stratifiedSample

# Function: stratifiedSample()

> **stratifiedSample**(`deps`): `Function`

Defined in: [methods/filtering/stratifiedSample.js:12](https://github.com/AlphaQuantJS/tinyframejs/blob/774ec19a646fb36d00f0c4a06bec916acd1a47d8/src/methods/filtering/stratifiedSample.js#L12)

Creates a function that selects a stratified sample of rows from a DataFrame.
Maintains the proportion of values in a specific column.

## Parameters

### deps

Dependencies

#### validateColumn

`Function`

Function to validate column names

## Returns

`Function`

Function that selects a stratified sample of rows
