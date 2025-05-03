---
id: reshaping
title: How to reshape the layout of tables
sidebar_position: 7
description: Learn how to transform the structure of your data in TinyFrameJS
---

# How to reshape the layout of tables

Reshaping data is a common operation in data analysis. It involves changing the structure or layout of your data without changing the actual values. TinyFrameJS provides several methods for reshaping data to make it suitable for different types of analysis.

## Pivoting Data

### Using `pivot()`

The `pivot()` method allows you to reshape data from long format to wide format:

```js
import { DataFrame } from 'tinyframejs';

// Create a DataFrame in long format
const dfLong = new DataFrame([
  {date: '2023-01-01', city: 'New York', metric: 'temperature', value: 32},
  {date: '2023-01-01', city: 'New York', metric: 'humidity', value: 65},
  {date: '2023-01-01', city: 'Chicago', metric: 'temperature', value: 25},
  {date: '2023-01-01', city: 'Chicago', metric: 'humidity', value: 60},
  {date: '2023-01-02', city: 'New York', metric: 'temperature', value: 35},
  {date: '2023-01-02', city: 'New York', metric: 'humidity', value: 70},
  {date: '2023-01-02', city: 'Chicago', metric: 'temperature', value: 28},
  {date: '2023-01-02', city: 'Chicago', metric: 'humidity', value: 55}
]);

// Pivot the data to wide format
const dfWide = dfLong.pivot({
  index: ['date', 'city'],  // Columns to use as index
  columns: 'metric',        // Column to use for new column names
  values: 'value'           // Column containing the values
});

dfWide.print();
```

Output:
```
┌────────────┬───────────┬─────────────┬──────────┐
│ date       │ city      │ temperature │ humidity │
├────────────┼───────────┼─────────────┼──────────┤
│ 2023-01-01 │ New York  │ 32          │ 65       │
│ 2023-01-01 │ Chicago   │ 25          │ 60       │
│ 2023-01-02 │ New York  │ 35          │ 70       │
│ 2023-01-02 │ Chicago   │ 28          │ 55       │
└────────────┴───────────┴─────────────┴──────────┘
```

### Using `pivotTable()`

The `pivotTable()` method allows you to create a pivot table with aggregation:

```js
// Create a pivot table with aggregation
const pivotTable = dfLong.pivotTable({
  index: 'date',           // Column to use as index
  columns: 'city',         // Column to use for new column names
  values: 'value',         // Column containing the values
  aggfunc: 'mean'          // Aggregation function
});

pivotTable.print();
```

Output:
```
┌────────────┬───────────┬──────────┐
│ date       │ New York  │ Chicago  │
├────────────┼───────────┼──────────┤
│ 2023-01-01 │ 48.5      │ 42.5     │
│ 2023-01-02 │ 52.5      │ 41.5     │
└────────────┴───────────┴──────────┘
```

You can specify multiple aggregation functions:

```js
// Create a pivot table with multiple aggregation functions
const multiAggPivot = dfLong.pivotTable({
  index: 'date',
  columns: 'city',
  values: 'value',
  aggfunc: ['mean', 'sum', 'count']
});

multiAggPivot.print();
```

Output:
```
┌────────────┬───────────────┬───────────────┬───────────────┬───────────────┬───────────────┬───────────────┐
│ date       │ New York_mean │ Chicago_mean  │ New York_sum  │ Chicago_sum   │ New York_count│ Chicago_count │
├────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┤
│ 2023-01-01 │ 48.5          │ 42.5          │ 97            │ 85            │ 2             │ 2             │
│ 2023-01-02 │ 52.5          │ 41.5          │ 105           │ 83            │ 2             │ 2             │
└────────────┴───────────────┴───────────────┴───────────────┴───────────────┴───────────────┴───────────────┘
```

## Melting Data

### Using `melt()`

The `melt()` method allows you to reshape data from wide format to long format:

```js
// Create a DataFrame in wide format
const dfWide = new DataFrame([
  {date: '2023-01-01', city: 'New York', temperature: 32, humidity: 65},
  {date: '2023-01-01', city: 'Chicago', temperature: 25, humidity: 60},
  {date: '2023-01-02', city: 'New York', temperature: 35, humidity: 70},
  {date: '2023-01-02', city: 'Chicago', temperature: 28, humidity: 55}
]);

// Melt the data to long format
const dfLong = dfWide.melt({
  id_vars: ['date', 'city'],      // Columns to keep as is
  value_vars: ['temperature', 'humidity'],  // Columns to melt
  var_name: 'metric',             // Name for the variable column
  value_name: 'value'             // Name for the value column
});

dfLong.print();
```

Output:
```
┌────────────┬───────────┬────────────┬───────┐
│ date       │ city      │ metric     │ value │
├────────────┼───────────┼────────────┼───────┤
│ 2023-01-01 │ New York  │ temperature│ 32    │
│ 2023-01-01 │ Chicago   │ temperature│ 25    │
│ 2023-01-02 │ New York  │ temperature│ 35    │
│ 2023-01-02 │ Chicago   │ temperature│ 28    │
│ 2023-01-01 │ New York  │ humidity   │ 65    │
│ 2023-01-01 │ Chicago   │ humidity   │ 60    │
│ 2023-01-02 │ New York  │ humidity   │ 70    │
│ 2023-01-02 │ Chicago   │ humidity   │ 55    │
└────────────┴───────────┴────────────┴───────┘
```

## Stacking and Unstacking

### Using `stack()`

The `stack()` method allows you to pivot a level of column labels to row labels:

```js
// Create a multi-level column DataFrame
const dfMultiLevel = new DataFrame({
  'New York_temperature': [32, 35],
  'New York_humidity': [65, 70],
  'Chicago_temperature': [25, 28],
  'Chicago_humidity': [60, 55]
}, {
  index: ['2023-01-01', '2023-01-02']
});

// Stack the city-metric level
const stacked = dfMultiLevel.stack();
stacked.print();
```

Output:
```
┌────────────┬──────────┬────────────┬───────┐
│ date       │ city     │ metric     │ value │
├────────────┼──────────┼────────────┼───────┤
│ 2023-01-01 │ New York │ temperature│ 32    │
│ 2023-01-01 │ New York │ humidity   │ 65    │
│ 2023-01-01 │ Chicago  │ temperature│ 25    │
│ 2023-01-01 │ Chicago  │ humidity   │ 60    │
│ 2023-01-02 │ New York │ temperature│ 35    │
│ 2023-01-02 │ New York │ humidity   │ 70    │
│ 2023-01-02 │ Chicago  │ temperature│ 28    │
│ 2023-01-02 │ Chicago  │ humidity   │ 55    │
└────────────┴──────────┴────────────┴───────┘
```

### Using `unstack()`

The `unstack()` method allows you to pivot a level of row labels to column labels:

```js
// Create a multi-level index DataFrame
const dfMultiIndex = new DataFrame({
  'value': [32, 65, 25, 60, 35, 70, 28, 55]
}, {
  index: [
    ['2023-01-01', '2023-01-01', '2023-01-01', '2023-01-01', '2023-01-02', '2023-01-02', '2023-01-02', '2023-01-02'],
    ['New York', 'New York', 'Chicago', 'Chicago', 'New York', 'New York', 'Chicago', 'Chicago'],
    ['temperature', 'humidity', 'temperature', 'humidity', 'temperature', 'humidity', 'temperature', 'humidity']
  ],
  indexNames: ['date', 'city', 'metric']
});

// Unstack the metric level
const unstacked = dfMultiIndex.unstack('metric');
unstacked.print();
```

Output:
```
┌────────────┬──────────┬────────────┬──────────┐
│ date       │ city     │ temperature│ humidity │
├────────────┼──────────┼────────────┼──────────┤
│ 2023-01-01 │ New York │ 32         │ 65       │
│ 2023-01-01 │ Chicago  │ 25         │ 60       │
│ 2023-01-02 │ New York │ 35         │ 70       │
│ 2023-01-02 │ Chicago  │ 28         │ 55       │
└────────────┴──────────┴────────────┴──────────┘
```

## Aggregating Data

### Using `groupby().agg()`

The `groupby().agg()` method allows you to aggregate data by groups:

```js
// Create a DataFrame
const df = new DataFrame([
  {date: '2023-01-01', city: 'New York', category: 'A', sales: 100, profit: 20},
  {date: '2023-01-01', city: 'New York', category: 'B', sales: 150, profit: 30},
  {date: '2023-01-01', city: 'Chicago', category: 'A', sales: 80, profit: 15},
  {date: '2023-01-01', city: 'Chicago', category: 'B', sales: 120, profit: 25},
  {date: '2023-01-02', city: 'New York', category: 'A', sales: 110, profit: 22},
  {date: '2023-01-02', city: 'New York', category: 'B', sales: 160, profit: 32},
  {date: '2023-01-02', city: 'Chicago', category: 'A', sales: 90, profit: 18},
  {date: '2023-01-02', city: 'Chicago', category: 'B', sales: 130, profit: 26}
]);

// Aggregate by city and category
const aggregated = df
  .groupby(['city', 'category'])
  .agg({
    sales: ['sum', 'mean'],
    profit: ['sum', 'mean']
  });

aggregated.print();
```

Output:
```
┌──────────┬──────────┬────────────┬────────────┬────────────┬────────────┐
│ city     │ category │ sales_sum  │ sales_mean │ profit_sum │ profit_mean│
├──────────┼──────────┼────────────┼────────────┼────────────┼────────────┤
│ Chicago  │ A        │ 170        │ 85         │ 33         │ 16.5       │
│ Chicago  │ B        │ 250        │ 125        │ 51         │ 25.5       │
│ New York │ A        │ 210        │ 105        │ 42         │ 21         │
│ New York │ B        │ 310        │ 155        │ 62         │ 31         │
└──────────┴──────────┴────────────┴────────────┴────────────┴────────────┘
```

## Transposing Data

### Using `transpose()`

The `transpose()` method allows you to swap rows and columns:

```js
// Create a DataFrame
const df = new DataFrame({
  'A': [1, 2, 3],
  'B': [4, 5, 6],
  'C': [7, 8, 9]
}, {
  index: ['X', 'Y', 'Z']
});

// Transpose the DataFrame
const transposed = df.transpose();
transposed.print();
```

Output:
```
┌───────┬─────┬─────┬─────┐
│ index │ X   │ Y   │ Z   │
├───────┼─────┼─────┼─────┤
│ A     │ 1   │ 2   │ 3   │
│ B     │ 4   │ 5   │ 6   │
│ C     │ 7   │ 8   │ 9   │
└───────┴─────┴─────┴─────┘
```

## Reshaping Time Series Data

### Using `resample()`

The `resample()` method allows you to resample time series data to a different frequency:

```js
// Create a time series DataFrame
const timeSeries = new DataFrame({
  'date': [
    '2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05',
    '2023-01-06', '2023-01-07', '2023-01-08', '2023-01-09', '2023-01-10'
  ],
  'value': [10, 12, 15, 14, 16, 18, 17, 19, 20, 22]
});

// Set the date column as index
const timeSeriesIndexed = timeSeries.setIndex('date');

// Resample to weekly frequency
const weekly = timeSeriesIndexed.resample('W', {
  aggregation: {
    value: 'mean'
  }
});

weekly.print();
```

Output:
```
┌────────────┬───────┐
│ date       │ value │
├────────────┼───────┤
│ 2023-01-01 │ 13.4  │
│ 2023-01-08 │ 19.2  │
└────────────┴───────┘
```

## Exploding Lists

### Using `explode()`

The `explode()` method allows you to transform list-like elements in a column to rows:

```js
// Create a DataFrame with list-like elements
const dfLists = new DataFrame([
  {id: 1, tags: ['red', 'blue']},
  {id: 2, tags: ['green']},
  {id: 3, tags: ['red', 'green', 'blue']}
]);

// Explode the tags column
const exploded = dfLists.explode('tags');
exploded.print();
```

Output:
```
┌───────┬─────┬───────┐
│ index │ id  │ tags  │
├───────┼─────┼───────┤
│ 0     │ 1   │ red   │
│ 0     │ 1   │ blue  │
│ 1     │ 2   │ green │
│ 2     │ 3   │ red   │
│ 2     │ 3   │ green │
│ 2     │ 3   │ blue  │
└───────┴─────┴───────┘
```

## Combining Reshaping Operations

You can combine multiple reshaping operations to transform your data in complex ways:

```js
// Create a DataFrame
const df = new DataFrame([
  {date: '2023-01-01', city: 'New York', category: 'A', sales: 100, profit: 20},
  {date: '2023-01-01', city: 'New York', category: 'B', sales: 150, profit: 30},
  {date: '2023-01-01', city: 'Chicago', category: 'A', sales: 80, profit: 15},
  {date: '2023-01-01', city: 'Chicago', category: 'B', sales: 120, profit: 25},
  {date: '2023-01-02', city: 'New York', category: 'A', sales: 110, profit: 22},
  {date: '2023-01-02', city: 'New York', category: 'B', sales: 160, profit: 32},
  {date: '2023-01-02', city: 'Chicago', category: 'A', sales: 90, profit: 18},
  {date: '2023-01-02', city: 'Chicago', category: 'B', sales: 130, profit: 26}
]);

// Combine multiple reshaping operations
const result = df
  // First, melt the sales and profit columns
  .melt({
    id_vars: ['date', 'city', 'category'],
    value_vars: ['sales', 'profit'],
    var_name: 'metric',
    value_name: 'value'
  })
  // Then, pivot to get metrics as columns and categories as rows
  .pivot({
    index: ['date', 'city'],
    columns: ['category', 'metric'],
    values: 'value'
  })
  // Finally, aggregate by date
  .groupby('date')
  .agg({
    'A_sales': 'sum',
    'B_sales': 'sum',
    'A_profit': 'sum',
    'B_profit': 'sum'
  });

result.print();
```

## Next Steps

Now that you know how to reshape data with TinyFrameJS, you can:

- Learn how to [combine data from multiple tables](./combining-tables)
- Explore how to [handle time series data](./time-series)
- Discover how to [process textual data](./text-processing)
