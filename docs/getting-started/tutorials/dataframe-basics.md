---
id: dataframe-basics
title: What kind of data does TinyFrameJS handle?
sidebar_position: 1
description: Learn about the basic data structures in TinyFrameJS
---

# What kind of data does TinyFrameJS handle?

TinyFrameJS is designed to work with tabular data - data that can be organized into rows and columns, similar to a spreadsheet or a database table. The primary data structure in TinyFrameJS is the `DataFrame`.

## DataFrame Basics

A DataFrame is a two-dimensional labeled data structure with columns that can be of different types. You can think of it like a spreadsheet or SQL table, or a dictionary of Series objects. It's generally the most commonly used TinyFrameJS object.

### Creating a DataFrame

There are several ways to create a DataFrame:

#### From an array of objects

```js
import { DataFrame } from 'tinyframejs';

const df = new DataFrame([
  {name: 'Alice', age: 25, city: 'New York'},
  {name: 'Bob', age: 30, city: 'San Francisco'},
  {name: 'Charlie', age: 35, city: 'Chicago'}
]);

df.print();
```

Output:
```
┌───────┬─────────┬─────┬───────────────┐
│ index │ name    │ age │ city          │
├───────┼─────────┼─────┼───────────────┤
│   0   │ Alice   │ 25  │ New York      │
│   1   │ Bob     │ 30  │ San Francisco │
│   2   │ Charlie │ 35  │ Chicago       │
└───────┴─────────┴─────┴───────────────┘
```

#### From arrays of values

```js
const df = new DataFrame({
  name: ['Alice', 'Bob', 'Charlie'],
  age: [25, 30, 35],
  city: ['New York', 'San Francisco', 'Chicago']
});
```

#### From a 2D array with column names

```js
const df = new DataFrame([
  ['Alice', 25, 'New York'],
  ['Bob', 30, 'San Francisco'],
  ['Charlie', 35, 'Chicago']
], {columns: ['name', 'age', 'city']});
```

### Data Types

TinyFrameJS automatically infers the data type of each column:

- **Numeric**: Integers and floating-point numbers
- **String**: Text data
- **Boolean**: True/false values
- **Date**: Date and time values
- **Object**: Nested JavaScript objects
- **Array**: Arrays of values

You can check the data types of a DataFrame using the `dtypes` property:

```js
console.log(df.dtypes);
// Output: { name: 'string', age: 'number', city: 'string' }
```

### Basic Information

You can get basic information about a DataFrame using various methods:

```js
// Get the dimensions (rows, columns)
console.log(df.shape);  // [3, 3]

// Get column names
console.log(df.columns);  // ['name', 'age', 'city']

// Get a summary of the DataFrame
console.log(df.info());
/*
DataFrame: 3 rows × 3 columns
Columns:
  name: string
  age: number
  city: string
Memory usage: ~X KB
*/

// Get basic statistics for numeric columns
console.log(df.describe());
/*
┌────────────┬─────────┐
│ statistic  │ age     │
├────────────┼─────────┤
│ count      │ 3       │
│ mean       │ 30      │
│ std        │ 5       │
│ min        │ 25      │
│ 25%        │ 27.5    │
│ 50%        │ 30      │
│ 75%        │ 32.5    │
│ max        │ 35      │
└────────────┴─────────┘
*/
```

### Accessing Data

You can access data in a DataFrame in several ways:

#### Accessing columns

```js
// Get a single column as a Series
const ages = df.get('age');
console.log(ages);  // [25, 30, 35]

// Get multiple columns as a new DataFrame
const nameAndCity = df.select(['name', 'city']);
nameAndCity.print();
```

Output:
```
┌───────┬─────────┬───────────────┐
│ index │ name    │ city          │
├───────┼─────────┼───────────────┤
│   0   │ Alice   │ New York      │
│   1   │ Bob     │ San Francisco │
│   2   │ Charlie │ Chicago       │
└───────┴─────────┴───────────────┘
```

#### Accessing rows

```js
// Get a single row by index
const firstRow = df.at(0);
console.log(firstRow);  // {name: 'Alice', age: 25, city: 'New York'}

// Get the first n rows
const firstTwoRows = df.head(2);
firstTwoRows.print();
```

Output:
```
┌───────┬───────┬─────┬───────────────┐
│ index │ name  │ age │ city          │
├───────┼───────┼─────┼───────────────┤
│   0   │ Alice │ 25  │ New York      │
│   1   │ Bob   │ 30  │ San Francisco │
└───────┴───────┴─────┴───────────────┘
```

```js
// Get the last n rows
const lastTwoRows = df.tail(2);
lastTwoRows.print();
```

Output:
```
┌───────┬─────────┬─────┬───────────────┐
│ index │ name    │ age │ city          │
├───────┼─────────┼─────┼───────────────┤
│   1   │ Bob     │ 30  │ San Francisco │
│   2   │ Charlie │ 35  │ Chicago       │
└───────┴─────────┴─────┴───────────────┘
```

### Filtering Data

You can filter data based on conditions:

```js
// Filter rows where age is greater than 25
const olderThan25 = df.filter(row => row.age > 25);
olderThan25.print();
```

Output:
```
┌───────┬─────────┬─────┬───────────────┐
│ index │ name    │ age │ city          │
├───────┼─────────┼─────┼───────────────┤
│   1   │ Bob     │ 30  │ San Francisco │
│   2   │ Charlie │ 35  │ Chicago       │
└───────┴─────────┴─────┴───────────────┘
```

```js
// Filter using a SQL-like query
const fromNewYork = df.query("city == 'New York'");
fromNewYork.print();
```

Output:
```
┌───────┬───────┬─────┬──────────┐
│ index │ name  │ age │ city     │
├───────┼───────┼─────┼──────────┤
│   0   │ Alice │ 25  │ New York │
└───────┴───────┴─────┴──────────┘
```

## Next Steps

Now that you understand the basics of DataFrames in TinyFrameJS, you can:

- Learn how to [read and write tabular data](./io)
- Explore more advanced [filtering and selection techniques](./filtering)
- Discover how to [create plots from your data](./plotting)
