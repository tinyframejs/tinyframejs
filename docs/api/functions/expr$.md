[**tinyframejs**](../README.md)

***

[tinyframejs](../README.md) / expr$

# Function: expr$()

> **expr$**(): `Function`

Defined in: methods/filtering/expr$.js:11

Creates a function that filters rows in a DataFrame using template literals.
This provides a more intuitive syntax similar to Pandas:
df.expr$`age > 40` or df.expr$`department == "IT"`

## Returns

`Function`

Function that filters rows using template literals
