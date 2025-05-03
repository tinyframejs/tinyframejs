---
id: combining-tables
title: How to combine data from multiple tables
sidebar_position: 8
description: Learn how to merge, join, and concatenate DataFrames in TinyFrameJS
---

# How to combine data from multiple tables

Combining data from multiple sources is a common operation in data analysis. TinyFrameJS provides several methods for merging, joining, and concatenating DataFrames, allowing you to combine data in various ways depending on your needs.

## Concatenating DataFrames

### Using `concat()`

The `concat()` method allows you to append rows from one DataFrame to another:

```js
import { DataFrame } from 'tinyframejs';

// Create two DataFrames
const df1 = new DataFrame([
  {id: 1, name: 'Alice', department: 'Engineering'},
  {id: 2, name: 'Bob', department: 'Marketing'}
]);

const df2 = new DataFrame([
  {id: 3, name: 'Charlie', department: 'Sales'},
  {id: 4, name: 'David', department: 'Engineering'}
]);

// Concatenate the DataFrames
const dfConcatenated = DataFrame.concat([df1, df2]);
dfConcatenated.print();
```

Output:
```
┌───────┬─────┬─────────┬─────────────┐
│ index │ id  │ name    │ department  │
├───────┼─────┼─────────┼─────────────┤
│ 0     │ 1   │ Alice   │ Engineering │
│ 1     │ 2   │ Bob     │ Marketing   │
│ 2     │ 3   │ Charlie │ Sales       │
│ 3     │ 4   │ David   │ Engineering │
└───────┴─────┴─────────┴─────────────┘
```

### Concatenating with different columns

When concatenating DataFrames with different columns, you can specify how to handle missing values:

```js
// Create DataFrames with different columns
const df3 = new DataFrame([
  {id: 5, name: 'Eve', salary: 75000},
  {id: 6, name: 'Frank', salary: 80000}
]);

// Concatenate with different columns
const dfDifferentColumns = DataFrame.concat([df1, df3], {
  fillValue: 'N/A'  // Fill missing values with 'N/A'
});
dfDifferentColumns.print();
```

Output:
```
┌───────┬─────┬───────┬─────────────┬────────┐
│ index │ id  │ name  │ department  │ salary │
├───────┼─────┼───────┼─────────────┼────────┤
│ 0     │ 1   │ Alice │ Engineering │ N/A    │
│ 1     │ 2   │ Bob   │ Marketing   │ N/A    │
│ 2     │ 5   │ Eve   │ N/A         │ 75000  │
│ 3     │ 6   │ Frank │ N/A         │ 80000  │
└───────┴─────┴───────┴─────────────┴────────┘
```

### Concatenating along columns

You can also concatenate DataFrames horizontally (along columns):

```js
// Create DataFrames with the same number of rows
const dfA = new DataFrame([
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Bob'}
]);

const dfB = new DataFrame([
  {department: 'Engineering', salary: 75000},
  {department: 'Marketing', salary: 80000}
]);

// Concatenate horizontally
const dfHorizontal = DataFrame.concat([dfA, dfB], {
  axis: 1  // Concatenate along columns
});
dfHorizontal.print();
```

Output:
```
┌───────┬─────┬───────┬─────────────┬────────┐
│ index │ id  │ name  │ department  │ salary │
├───────┼─────┼───────┼─────────────┼────────┤
│ 0     │ 1   │ Alice │ Engineering │ 75000  │
│ 1     │ 2   │ Bob   │ Marketing   │ 80000  │
└───────┴─────┴───────┴─────────────┴────────┘
```

## Merging DataFrames

### Using `merge()`

The `merge()` method allows you to combine DataFrames based on common columns:

```js
// Create two DataFrames with a common column
const employees = new DataFrame([
  {id: 1, name: 'Alice', department_id: 101},
  {id: 2, name: 'Bob', department_id: 102},
  {id: 3, name: 'Charlie', department_id: 101},
  {id: 4, name: 'David', department_id: 103}
]);

const departments = new DataFrame([
  {department_id: 101, department_name: 'Engineering', location: 'Building A'},
  {department_id: 102, department_name: 'Marketing', location: 'Building B'},
  {department_id: 103, department_name: 'Sales', location: 'Building C'}
]);

// Merge the DataFrames on department_id
const merged = employees.merge(departments, {
  on: 'department_id'  // Merge on this column
});
merged.print();
```

Output:
```
┌───────┬─────┬─────────┬───────────────┬────────────────────┬────────────┐
│ index │ id  │ name    │ department_id │ department_name    │ location   │
├───────┼─────┼─────────┼───────────────┼────────────────────┼────────────┤
│ 0     │ 1   │ Alice   │ 101           │ Engineering        │ Building A │
│ 1     │ 3   │ Charlie │ 101           │ Engineering        │ Building A │
│ 2     │ 2   │ Bob     │ 102           │ Marketing          │ Building B │
│ 3     │ 4   │ David   │ 103           │ Sales              │ Building C │
└───────┴─────┴─────────┴───────────────┴────────────────────┴────────────┘
```

### Different types of merges

TinyFrameJS supports different types of merges:

```js
// Inner merge (default) - only keep rows with matching keys in both DataFrames
const innerMerge = employees.merge(departments, {
  on: 'department_id',
  how: 'inner'
});

// Left merge - keep all rows from the left DataFrame
const leftMerge = employees.merge(departments, {
  on: 'department_id',
  how: 'left'
});

// Right merge - keep all rows from the right DataFrame
const rightMerge = employees.merge(departments, {
  on: 'department_id',
  how: 'right'
});

// Outer merge - keep all rows from both DataFrames
const outerMerge = employees.merge(departments, {
  on: 'department_id',
  how: 'outer'
});
```

### Merging on different column names

You can merge DataFrames with different column names:

```js
// Create DataFrames with different column names
const employeesAlt = new DataFrame([
  {employee_id: 1, name: 'Alice', dept_id: 101},
  {employee_id: 2, name: 'Bob', dept_id: 102},
  {employee_id: 3, name: 'Charlie', dept_id: 101},
  {employee_id: 4, name: 'David', dept_id: 103}
]);

// Merge on different column names
const mergedDifferentColumns = employeesAlt.merge(departments, {
  left_on: 'dept_id',        // Column name in the left DataFrame
  right_on: 'department_id'  // Column name in the right DataFrame
});
mergedDifferentColumns.print();
```

Output:
```
┌───────┬────────────┬─────────┬─────────┬───────────────┬────────────────────┬────────────┐
│ index │ employee_id│ name    │ dept_id │ department_id │ department_name    │ location   │
├───────┼────────────┼─────────┼─────────┼───────────────┼────────────────────┼────────────┤
│ 0     │ 1          │ Alice   │ 101     │ 101           │ Engineering        │ Building A │
│ 1     │ 3          │ Charlie │ 101     │ 101           │ Engineering        │ Building A │
│ 2     │ 2          │ Bob     │ 102     │ 102           │ Marketing          │ Building B │
│ 3     │ 4          │ David   │ 103     │ 103           │ Sales              │ Building C │
└───────┴────────────┴─────────┴─────────┴───────────────┴────────────────────┴────────────┘
```

### Merging on multiple columns

You can merge DataFrames based on multiple columns:

```js
// Create DataFrames with multiple common columns
const orders = new DataFrame([
  {order_id: 1, customer_id: 101, product_id: 201, quantity: 2},
  {order_id: 2, customer_id: 102, product_id: 202, quantity: 1},
  {order_id: 3, customer_id: 101, product_id: 203, quantity: 3},
  {order_id: 4, customer_id: 103, product_id: 201, quantity: 1}
]);

const inventory = new DataFrame([
  {product_id: 201, customer_id: 101, price: 10.99, in_stock: 50},
  {product_id: 201, customer_id: 103, price: 9.99, in_stock: 50},
  {product_id: 202, customer_id: 102, price: 15.99, in_stock: 30},
  {product_id: 203, customer_id: 101, price: 5.99, in_stock: 100}
]);

// Merge on multiple columns
const multiColumnMerge = orders.merge(inventory, {
  on: ['product_id', 'customer_id']  // Merge on these columns
});
multiColumnMerge.print();
```

Output:
```
┌───────┬──────────┬─────────────┬────────────┬──────────┬───────┬──────────┐
│ index │ order_id │ customer_id │ product_id │ quantity │ price │ in_stock │
├───────┼──────────┼─────────────┼────────────┼──────────┼───────┼──────────┤
│ 0     │ 1        │ 101         │ 201        │ 2        │ 10.99 │ 50       │
│ 1     │ 2        │ 102         │ 202        │ 1        │ 15.99 │ 30       │
│ 2     │ 3        │ 101         │ 203        │ 3        │ 5.99  │ 100      │
│ 3     │ 4        │ 103         │ 201        │ 1        │ 9.99  │ 50       │
└───────┴──────────┴─────────────┴────────────┴──────────┴───────┴──────────┘
```

### Handling duplicate column names

When merging DataFrames with duplicate column names, you can specify suffixes:

```js
// Create DataFrames with duplicate column names
const customers = new DataFrame([
  {id: 101, name: 'Alice', age: 30},
  {id: 102, name: 'Bob', age: 25},
  {id: 103, name: 'Charlie', age: 35}
]);

const purchases = new DataFrame([
  {id: 1, customer_id: 101, name: 'Purchase 1', amount: 100},
  {id: 2, customer_id: 102, name: 'Purchase 2', amount: 200},
  {id: 3, customer_id: 101, name: 'Purchase 3', amount: 150}
]);

// Merge with suffixes for duplicate column names
const mergedWithSuffixes = customers.merge(purchases, {
  left_on: 'id',
  right_on: 'customer_id',
  suffixes: ['_customer', '_purchase']  // Suffixes for duplicate column names
});
mergedWithSuffixes.print();
```

Output:
```
┌───────┬──────┬────────────────┬──────────────┬─────┬─────────────┬────────────────┬────────┐
│ index │ id_cu│ name_customer  │ age          │ id_p│ customer_id │ name_purchase  │ amount │
├───────┼──────┼────────────────┼──────────────┼─────┼─────────────┼────────────────┼────────┤
│ 0     │ 101  │ Alice          │ 30           │ 1   │ 101         │ Purchase 1     │ 100    │
│ 1     │ 101  │ Alice          │ 30           │ 3   │ 101         │ Purchase 3     │ 150    │
│ 2     │ 102  │ Bob            │ 25           │ 2   │ 102         │ Purchase 2     │ 200    │
└───────┴──────┴────────────────┴──────────────┴─────┴─────────────┴────────────────┴────────┘
```

## Joining DataFrames

### Using `join()`

The `join()` method is similar to `merge()` but uses the index of the right DataFrame:

```js
// Create DataFrames with indices
const dfLeft = new DataFrame([
  {name: 'Alice', age: 30},
  {name: 'Bob', age: 25},
  {name: 'Charlie', age: 35}
], {
  index: [101, 102, 103]  // Set custom indices
});

const dfRight = new DataFrame([
  {department: 'Engineering', salary: 75000},
  {department: 'Marketing', salary: 80000},
  {department: 'Sales', salary: 70000}
], {
  index: [101, 102, 104]  // Set custom indices
});

// Join the DataFrames on their indices
const joined = dfLeft.join(dfRight);
joined.print();
```

Output:
```
┌───────┬─────────┬─────┬─────────────┬────────┐
│ index │ name    │ age │ department  │ salary │
├───────┼─────────┼─────┼─────────────┼────────┤
│ 101   │ Alice   │ 30  │ Engineering │ 75000  │
│ 102   │ Bob     │ 25  │ Marketing   │ 80000  │
└───────┴─────────┴─────┴─────────────┴────────┘
```

### Different types of joins

Similar to `merge()`, `join()` supports different types of joins:

```js
// Inner join (default)
const innerJoin = dfLeft.join(dfRight, {
  how: 'inner'
});

// Left join
const leftJoin = dfLeft.join(dfRight, {
  how: 'left'
});

// Right join
const rightJoin = dfLeft.join(dfRight, {
  how: 'right'
});

// Outer join
const outerJoin = dfLeft.join(dfRight, {
  how: 'outer'
});
```

## Advanced Combining Techniques

### Combining multiple DataFrames

You can combine multiple DataFrames in a single operation:

```js
// Create multiple DataFrames
const df1 = new DataFrame([{id: 1, name: 'Alice'}]);
const df2 = new DataFrame([{id: 2, name: 'Bob'}]);
const df3 = new DataFrame([{id: 3, name: 'Charlie'}]);

// Concatenate multiple DataFrames
const combined = DataFrame.concat([df1, df2, df3]);
combined.print();
```

### Combining with aggregation

You can combine DataFrames and then aggregate the results:

```js
// Create DataFrames
const sales2022 = new DataFrame([
  {region: 'North', product: 'A', sales: 100},
  {region: 'North', product: 'B', sales: 150},
  {region: 'South', product: 'A', sales: 80},
  {region: 'South', product: 'B', sales: 120}
]);

const sales2023 = new DataFrame([
  {region: 'North', product: 'A', sales: 110},
  {region: 'North', product: 'B', sales: 160},
  {region: 'South', product: 'A', sales: 90},
  {region: 'South', product: 'B', sales: 130}
]);

// Add a year column to each DataFrame
const sales2022WithYear = sales2022.assign({year: 2022});
const sales2023WithYear = sales2023.assign({year: 2023});

// Concatenate the DataFrames
const allSales = DataFrame.concat([sales2022WithYear, sales2023WithYear]);

// Aggregate by region and product
const aggregated = allSales
  .groupby(['region', 'product'])
  .agg({
    sales: ['sum', 'mean']
  });

aggregated.print();
```

Output:
```
┌────────┬─────────┬────────────┬────────────┐
│ region │ product │ sales_sum  │ sales_mean │
├────────┼─────────┼────────────┼────────────┤
│ North  │ A       │ 210        │ 105        │
│ North  │ B       │ 310        │ 155        │
│ South  │ A       │ 170        │ 85         │
│ South  │ B       │ 250        │ 125        │
└────────┴─────────┴────────────┴────────────┘
```

### Cross join (Cartesian product)

You can create a cross join (Cartesian product) of two DataFrames:

```js
// Create DataFrames
const colors = new DataFrame([
  {color: 'red'},
  {color: 'blue'},
  {color: 'green'}
]);

const sizes = new DataFrame([
  {size: 'small'},
  {size: 'medium'},
  {size: 'large'}
]);

// Create a cross join
const crossJoin = colors.merge(sizes, {
  how: 'cross'  // Cross join
});
crossJoin.print();
```

Output:
```
┌───────┬───────┬───────┐
│ index │ color │ size  │
├───────┼───────┼───────┤
│ 0     │ red   │ small │
│ 1     │ red   │ medium│
│ 2     │ red   │ large │
│ 3     │ blue  │ small │
│ 4     │ blue  │ medium│
│ 5     │ blue  │ large │
│ 6     │ green │ small │
│ 7     │ green │ medium│
│ 8     │ green │ large │
└───────┴───────┴───────┘
```

## Handling Duplicate Rows

When combining DataFrames, you might end up with duplicate rows. TinyFrameJS provides methods to handle this:

```js
// Create DataFrames with potential duplicates
const df1 = new DataFrame([
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Bob'}
]);

const df2 = new DataFrame([
  {id: 2, name: 'Bob'},
  {id: 3, name: 'Charlie'}
]);

// Concatenate the DataFrames
const concatenated = DataFrame.concat([df1, df2]);
concatenated.print();
```

Output:
```
┌───────┬─────┬─────────┐
│ index │ id  │ name    │
├───────┼─────┼─────────┤
│ 0     │ 1   │ Alice   │
│ 1     │ 2   │ Bob     │
│ 2     │ 2   │ Bob     │
│ 3     │ 3   │ Charlie │
└───────┴─────┴─────────┘
```

### Removing duplicates

You can remove duplicate rows using the `dropDuplicates()` method:

```js
// Remove duplicate rows
const uniqueRows = concatenated.dropDuplicates();
uniqueRows.print();
```

Output:
```
┌───────┬─────┬─────────┐
│ index │ id  │ name    │
├───────┼─────┼─────────┤
│ 0     │ 1   │ Alice   │
│ 1     │ 2   │ Bob     │
│ 3     │ 3   │ Charlie │
└───────┴─────┴─────────┘
```

### Removing duplicates based on specific columns

You can remove duplicates based on specific columns:

```js
// Remove duplicates based on the 'id' column
const uniqueIds = concatenated.dropDuplicates(['id']);
uniqueIds.print();
```

Output:
```
┌───────┬─────┬─────────┐
│ index │ id  │ name    │
├───────┼─────┼─────────┤
│ 0     │ 1   │ Alice   │
│ 1     │ 2   │ Bob     │
│ 3     │ 3   │ Charlie │
└───────┴─────┴─────────┘
```

## Next Steps

Now that you know how to combine data from multiple tables with TinyFrameJS, you can:

- Learn how to [handle time series data](./time-series)
- Explore how to [process textual data](./text-processing)
- Discover how to [work with missing data](./missing-data)
