---
id: filtering
title: How do I select a subset of a table?
sidebar_position: 3
description: Learn how to filter rows and select columns in TinyFrameJS
---

# How do I select a subset of a table?

One of the most common operations in data analysis is selecting a subset of your data. TinyFrameJS provides several methods for filtering rows and selecting columns.

## Selecting Columns

### Using `select()`

The `select()` method allows you to choose specific columns from a DataFrame:

```js
import { DataFrame } from 'tinyframejs';

const df = new DataFrame([
  {name: 'Alice', age: 25, city: 'New York', salary: 70000},
  {name: 'Bob', age: 30, city: 'San Francisco', salary: 85000},
  {name: 'Charlie', age: 35, city: 'Chicago', salary: 90000}
]);

// Select specific columns
const nameAndAge = df.select(['name', 'age']);
nameAndAge.print();
```

Output:
```
┌───────┬─────────┬─────┐
│ index │ name    │ age │
├───────┼─────────┼─────┤
│   0   │ Alice   │ 25  │
│   1   │ Bob     │ 30  │
│   2   │ Charlie │ 35  │
└───────┴─────────┴─────┘
```

### Using `drop()`

The `drop()` method allows you to remove specific columns:

```js
// Drop specific columns
const withoutCityAndSalary = df.drop(['city', 'salary']);
withoutCityAndSalary.print();
```

Output:
```
┌───────┬─────────┬─────┐
│ index │ name    │ age │
├───────┼─────────┼─────┤
│   0   │ Alice   │ 25  │
│   1   │ Bob     │ 30  │
│   2   │ Charlie │ 35  │
└───────┴─────────┴─────┘
```

### Using column patterns

You can also select columns using patterns:

```js
// Select columns that start with 'a'
const aColumns = df.selectByPattern('^a');
aColumns.print();
```

Output:
```
┌───────┬─────┐
│ index │ age │
├───────┼─────┤
│   0   │ 25  │
│   1   │ 30  │
│   2   │ 35  │
└───────┴─────┘
```

## Filtering Rows

### Using `filter()`

The `filter()` method allows you to select rows based on a condition:

```js
// Filter rows where age is greater than 25
const olderThan25 = df.filter(row => row.age > 25);
olderThan25.print();
```

Output:
```
┌───────┬─────────┬─────┬───────────────┬────────┐
│ index │ name    │ age │ city          │ salary │
├───────┼─────────┼─────┼───────────────┼────────┤
│   1   │ Bob     │ 30  │ San Francisco │ 85000  │
│   2   │ Charlie │ 35  │ Chicago       │ 90000  │
└───────┴─────────┴─────┴───────────────┴────────┘
```

You can use multiple conditions:

```js
// Filter rows where age is greater than 25 AND salary is greater than 85000
const olderAndHighPaid = df.filter(row => row.age > 25 && row.salary > 85000);
olderAndHighPaid.print();
```

Output:
```
┌───────┬─────────┬─────┬─────────┬────────┐
│ index │ name    │ age │ city    │ salary │
├───────┼─────────┼─────┼─────────┼────────┤
│   2   │ Charlie │ 35  │ Chicago │ 90000  │
└───────┴─────────┴─────┴─────────┴────────┘
```

### Using `query()`

The `query()` method allows you to filter rows using a SQL-like syntax:

```js
// Filter using a SQL-like query
const fromNewYork = df.query("city == 'New York'");
fromNewYork.print();
```

Output:
```
┌───────┬───────┬─────┬──────────┬────────┐
│ index │ name  │ age │ city     │ salary │
├───────┼───────┼─────┼──────────┼────────┤
│   0   │ Alice │ 25  │ New York │ 70000  │
└───────┴───────┴─────┴──────────┴────────┘
```

You can use complex expressions:

```js
// Complex query
const complexQuery = df.query("age > 25 and city.includes('Francisco') or salary >= 90000");
complexQuery.print();
```

Output:
```
┌───────┬─────────┬─────┬───────────────┬────────┐
│ index │ name    │ age │ city          │ salary │
├───────┼─────────┼─────┼───────────────┼────────┤
│   1   │ Bob     │ 30  │ San Francisco │ 85000  │
│   2   │ Charlie │ 35  │ Chicago       │ 90000  │
└───────┴─────────┴─────┴───────────────┴────────┘
```

### Using `where()`

The `where()` method allows you to filter rows using column-wise conditions:

```js
// Filter using column conditions
const highSalary = df.where('salary', '>', 80000);
highSalary.print();
```

Output:
```
┌───────┬─────────┬─────┬───────────────┬────────┐
│ index │ name    │ age │ city          │ salary │
├───────┼─────────┼─────┼───────────────┼────────┤
│   1   │ Bob     │ 30  │ San Francisco │ 85000  │
│   2   │ Charlie │ 35  │ Chicago       │ 90000  │
└───────┴─────────┴─────┴───────────────┴────────┘
```

You can chain multiple conditions:

```js
// Chain multiple conditions
const filtered = df
  .where('age', '>=', 30)
  .where('city', '!=', 'Chicago');

filtered.print();
```

Output:
```
┌───────┬─────┬─────┬───────────────┬────────┐
│ index │ name│ age │ city          │ salary │
├───────┼─────┼─────┼───────────────┼────────┤
│   1   │ Bob │ 30  │ San Francisco │ 85000  │
└───────┴─────┴─────┴───────────────┴────────┘
```

## Selecting by Index

### Using `at()`

The `at()` method allows you to select a row by its index:

```js
// Get a single row by index
const firstRow = df.at(0);
console.log(firstRow);
// Output: {name: 'Alice', age: 25, city: 'New York', salary: 70000}
```

### Using `iloc()`

The `iloc()` method allows you to select rows and columns by their integer positions:

```js
// Select rows 0 and 2, columns 1 and 3
const subset = df.iloc([0, 2], [1, 3]);
subset.print();
```

Output:
```
┌───────┬─────┬────────┐
│ index │ age │ salary │
├───────┼─────┼────────┤
│   0   │ 25  │ 70000  │
│   2   │ 35  │ 90000  │
└───────┴─────┴────────┘
```

### Using `loc()`

The `loc()` method allows you to select rows and columns by their labels:

```js
// Select rows with index 0 and 2, columns 'age' and 'salary'
const subset = df.loc([0, 2], ['age', 'salary']);
subset.print();
```

Output:
```
┌───────┬─────┬────────┐
│ index │ age │ salary │
├───────┼─────┼────────┤
│   0   │ 25  │ 70000  │
│   2   │ 35  │ 90000  │
└───────┴─────┴────────┘
```

## Sampling Data

### Random sampling

You can select a random sample of rows:

```js
// Get a random sample of 2 rows
const sample = df.sample(2);
sample.print();
```

Output (will vary):
```
┌───────┬─────────┬─────┬───────────────┬────────┐
│ index │ name    │ age │ city          │ salary │
├───────┼─────────┼─────┼───────────────┼────────┤
│   0   │ Alice   │ 25  │ New York      │ 70000  │
│   2   │ Charlie │ 35  │ Chicago       │ 90000  │
└───────┴─────────┴─────┴───────────────┴────────┘
```

### Stratified sampling

You can also perform stratified sampling, which maintains the proportion of values in a specific column:

```js
// Get a stratified sample based on the 'city' column
const stratifiedSample = df.stratifiedSample('city', 0.5);
stratifiedSample.print();
```

## Combining Operations

You can chain multiple operations together:

```js
// Chain operations
const result = df
  .select(['name', 'age', 'salary'])  // Select only these columns
  .filter(row => row.age >= 30)       // Filter rows where age >= 30
  .sort('salary', {ascending: false}); // Sort by salary in descending order

result.print();
```

Output:
```
┌───────┬─────────┬─────┬────────┐
│ index │ name    │ age │ salary │
├───────┼─────────┼─────┼────────┤
│   2   │ Charlie │ 35  │ 90000  │
│   1   │ Bob     │ 30  │ 85000  │
└───────┴─────────┴─────┴────────┘
```

## Next Steps

Now that you know how to select subsets of your data, you can:

- Learn how to [create plots from your data](./plotting)
- Explore how to [create derived columns](./derived-columns)
- Discover how to [calculate summary statistics](./statistics)
