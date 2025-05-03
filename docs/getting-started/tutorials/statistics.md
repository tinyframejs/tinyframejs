---
id: statistics
title: How to calculate summary statistics
sidebar_position: 6
description: Learn how to calculate and analyze summary statistics in TinyFrameJS
---

# How to calculate summary statistics

Statistical analysis is a fundamental part of data exploration and understanding. TinyFrameJS provides a comprehensive set of methods for calculating summary statistics on your data.

## Basic Summary Statistics

### Using `describe()`

The `describe()` method provides a comprehensive summary of numeric columns in your DataFrame:

```js
import { DataFrame } from 'tinyframejs';

// Create a sample DataFrame
const df = new DataFrame([
  {name: 'Alice', age: 25, salary: 70000, department: 'Engineering'},
  {name: 'Bob', age: 30, salary: 85000, department: 'Marketing'},
  {name: 'Charlie', age: 35, salary: 90000, department: 'Engineering'},
  {name: 'David', age: 28, salary: 75000, department: 'Sales'},
  {name: 'Eve', age: 32, salary: 88000, department: 'Marketing'}
]);

// Get summary statistics for all numeric columns
const summary = df.describe();
summary.print();
```

Output:
```
┌────────────┬─────────┬────────────┐
│ statistic  │ age     │ salary     │
├────────────┼─────────┼────────────┤
│ count      │ 5       │ 5          │
│ mean       │ 30      │ 81600      │
│ std        │ 3.74    │ 8443.46    │
│ min        │ 25      │ 70000      │
│ 25%        │ 28      │ 75000      │
│ 50%        │ 30      │ 85000      │
│ 75%        │ 32      │ 88000      │
│ max        │ 35      │ 90000      │
└────────────┴─────────┴────────────┘
```

### Using `summary()`

For a more customized summary, you can use the `summary()` method:

```js
// Get a customized summary
const customSummary = df.summary({
  columns: ['age', 'salary'],
  statistics: ['count', 'mean', 'min', 'max', 'median']
});
customSummary.print();
```

Output:
```
┌────────────┬─────────┬────────────┐
│ statistic  │ age     │ salary     │
├────────────┼─────────┼────────────┤
│ count      │ 5       │ 5          │
│ mean       │ 30      │ 81600      │
│ min        │ 25      │ 70000      │
│ max        │ 35      │ 90000      │
│ median     │ 30      │ 85000      │
└────────────┴─────────┴────────────┘
```

## Individual Statistics

### Central Tendency

TinyFrameJS provides methods for calculating various measures of central tendency:

```js
// Calculate mean (average)
const meanAge = df.mean('age');
console.log('Mean age:', meanAge);  // 30

// Calculate median (middle value)
const medianAge = df.median('age');
console.log('Median age:', medianAge);  // 30

// Calculate mode (most frequent value)
const modeAge = df.mode('age');
console.log('Mode age:', modeAge);  // [25, 30, 35, 28, 32] (all values appear once)

// Calculate weighted mean
const weightedMean = df.weightedMean('age', 'salary');
console.log('Weighted mean age:', weightedMean);  // 30.51
```

### Dispersion

You can calculate various measures of dispersion:

```js
// Calculate variance
const varAge = df.variance('age');
console.log('Variance of age:', varAge);  // 14

// Calculate standard deviation
const stdAge = df.std('age');
console.log('Standard deviation of age:', stdAge);  // 3.74

// Calculate range
const rangeAge = df.range('age');
console.log('Range of age:', rangeAge);  // 10

// Calculate interquartile range (IQR)
const iqrAge = df.iqr('age');
console.log('IQR of age:', iqrAge);  // 4
```

### Percentiles and Quantiles

You can calculate percentiles and quantiles:

```js
// Calculate a specific percentile
const p75Age = df.percentile('age', 75);
console.log('75th percentile of age:', p75Age);  // 32

// Calculate multiple percentiles
const percentiles = df.percentiles('age', [25, 50, 75]);
console.log('Percentiles of age:', percentiles);  // [28, 30, 32]

// Calculate quartiles
const quartiles = df.quartiles('age');
console.log('Quartiles of age:', quartiles);  // [28, 30, 32]
```

### Correlation and Covariance

You can calculate correlation and covariance between columns:

```js
// Calculate correlation between age and salary
const correlation = df.corr('age', 'salary');
console.log('Correlation between age and salary:', correlation);  // 0.86

// Calculate covariance between age and salary
const covariance = df.cov('age', 'salary');
console.log('Covariance between age and salary:', covariance);  // 27000
```

### Correlation Matrix

You can calculate a correlation matrix for all numeric columns:

```js
// Calculate correlation matrix
const corrMatrix = df.corrMatrix();
corrMatrix.print();
```

Output:
```
┌────────┬─────────┬────────────┐
│        │ age     │ salary     │
├────────┼─────────┼────────────┤
│ age    │ 1       │ 0.86       │
│ salary │ 0.86    │ 1          │
└────────┴─────────┴────────────┘
```

## Grouped Statistics

### Using `groupby()`

You can calculate statistics for groups of data:

```js
// Group by department and calculate statistics
const groupedStats = df
  .groupby('department')
  .agg({
    age: ['count', 'mean', 'std'],
    salary: ['mean', 'min', 'max']
  });

groupedStats.print();
```

Output:
```
┌─────────────┬────────────┬────────────┬────────────┬────────────────┬────────────────┬────────────────┐
│ department  │ age_count  │ age_mean   │ age_std    │ salary_mean    │ salary_min     │ salary_max     │
├─────────────┼────────────┼────────────┼────────────┼────────────────┼────────────────┼────────────────┤
│ Engineering │ 2          │ 30         │ 7.07       │ 80000          │ 70000          │ 90000          │
│ Marketing   │ 2          │ 31         │ 1.41       │ 86500          │ 85000          │ 88000          │
│ Sales       │ 1          │ 28         │ 0          │ 75000          │ 75000          │ 75000          │
└─────────────┴────────────┴────────────┴────────────┴────────────────┴────────────────┴────────────────┘
```

### Custom Aggregation Functions

You can define custom aggregation functions:

```js
// Group by department and apply custom aggregation
const customAgg = df
  .groupby('department')
  .agg({
    age: [
      'count',
      'mean',
      rows => Math.max(...rows) - Math.min(...rows)  // Custom range function
    ],
    salary: [
      'mean',
      rows => rows.reduce((a, b) => a + b, 0) / rows.length,  // Custom mean function
      rows => rows.filter(x => x > 80000).length  // Count of salaries > 80000
    ]
  }, {
    columnNames: [
      'count', 'mean', 'range',  // Names for age aggregations
      'avg', 'custom_mean', 'high_salary_count'  // Names for salary aggregations
    ]
  });

customAgg.print();
```

## Rolling Statistics

You can calculate statistics over a rolling window:

```js
// Create a time series DataFrame
const timeSeries = new DataFrame({
  date: ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05',
         '2023-01-06', '2023-01-07', '2023-01-08', '2023-01-09', '2023-01-10'],
  value: [10, 12, 15, 14, 16, 18, 17, 19, 20, 22]
});

// Calculate rolling mean with a window of 3
const rollingMean = timeSeries.rolling(3).mean('value');
console.log('Rolling mean:', rollingMean);
// [null, null, 12.33, 13.67, 15, 16, 17, 18, 18.67, 20.33]

// Calculate multiple rolling statistics
const rollingStats = timeSeries.rolling(3).agg({
  value: ['mean', 'std', 'min', 'max']
});
rollingStats.print();
```

## Expanding Statistics

You can calculate statistics over an expanding window:

```js
// Calculate expanding mean
const expandingMean = timeSeries.expanding().mean('value');
console.log('Expanding mean:', expandingMean);
// [10, 11, 12.33, 12.75, 13.4, 14.17, 14.57, 15.12, 15.67, 16.3]

// Calculate multiple expanding statistics
const expandingStats = timeSeries.expanding().agg({
  value: ['mean', 'std', 'min', 'max']
});
expandingStats.print();
```

## Statistical Tests

TinyFrameJS provides methods for performing statistical tests:

```js
// Create two samples
const sample1 = new DataFrame({
  value: [10, 12, 15, 14, 16, 18, 17, 19, 20, 22]
});

const sample2 = new DataFrame({
  value: [11, 13, 14, 15, 17, 19, 18, 20, 21, 23]
});

// Perform t-test
const tTest = sample1.tTest(sample2, 'value');
console.log('T-test result:', tTest);
// { t: -1.34, pValue: 0.197, df: 18 }

// Perform Mann-Whitney U test
const uTest = sample1.mannWhitneyU(sample2, 'value');
console.log('Mann-Whitney U test result:', uTest);
// { u: 35, pValue: 0.218 }
```

## Descriptive Statistics by Category

You can calculate descriptive statistics for each category:

```js
// Calculate statistics by department
const statsByDept = df.describeBy('department');
statsByDept.print();
```

Output:
```
┌─────────────┬────────────┬────────────┬────────────┬────────────────┬────────────────┬────────────────┐
│ department  │ statistic  │ age        │ salary     │
├─────────────┼────────────┼────────────┼────────────┼────────────────┼────────────────┼────────────────┤
│ Engineering │ count      │ 2          │ 2          │
│             │ mean       │ 30         │ 80000      │
│             │ std        │ 7.07       │ 14142.14   │
│             │ min        │ 25         │ 70000      │
│             │ 25%        │ 27.5       │ 75000      │
│             │ 50%        │ 30         │ 80000      │
│             │ 75%        │ 32.5       │ 85000      │
│             │ max        │ 35         │ 90000      │
├─────────────┼────────────┼────────────┼────────────┼────────────────┼────────────────┼────────────────┤
│ Marketing   │ count      │ 2          │ 2          │
│             │ mean       │ 31         │ 86500      │
│             │ std        │ 1.41       │ 2121.32    │
│             │ min        │ 30         │ 85000      │
│             │ 25%        │ 30.5       │ 85750      │
│             │ 50%        │ 31         │ 86500      │
│             │ 75%        │ 31.5       │ 87250      │
│             │ max        │ 32         │ 88000      │
├─────────────┼────────────┼────────────┼────────────┼────────────────┼────────────────┼────────────────┤
│ Sales       │ count      │ 1          │ 1          │
│             │ mean       │ 28         │ 75000      │
│             │ std        │ NaN        │ NaN        │
│             │ min        │ 28         │ 75000      │
│             │ 25%        │ 28         │ 75000      │
│             │ 50%        │ 28         │ 75000      │
│             │ 75%        │ 28         │ 75000      │
│             │ max        │ 28         │ 75000      │
└─────────────┴────────────┴────────────┴────────────┴────────────────┴────────────────┴────────────────┘
```

## Next Steps

Now that you know how to calculate summary statistics with TinyFrameJS, you can:

- Learn how to [reshape your data](./reshaping) for different analyses
- Explore how to [combine data from multiple tables](./combining-tables)
- Discover how to [handle time series data](./time-series)
