---
id: time-series
title: How to handle time series data
sidebar_position: 9
description: Learn how to work with time series data in TinyFrameJS
---

# How to handle time series data

Time series data is a sequence of data points collected over time intervals. TinyFrameJS provides powerful tools for handling, analyzing, and visualizing time series data.

## Creating Time Series Data

### From arrays

You can create a time series DataFrame from arrays:

```js
import { DataFrame } from 'tinyframejs';

// Create a time series DataFrame
const timeSeries = new DataFrame({
  date: [
    '2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05',
    '2023-01-06', '2023-01-07', '2023-01-08', '2023-01-09', '2023-01-10'
  ],
  value: [10, 12, 15, 14, 16, 18, 17, 19, 20, 22]
});

timeSeries.print();
```

Output:
```
┌───────┬────────────┬───────┐
│ index │ date       │ value │
├───────┼────────────┼───────┤
│ 0     │ 2023-01-01 │ 10    │
│ 1     │ 2023-01-02 │ 12    │
│ 2     │ 2023-01-03 │ 15    │
│ 3     │ 2023-01-04 │ 14    │
│ 4     │ 2023-01-05 │ 16    │
│ 5     │ 2023-01-06 │ 18    │
│ 6     │ 2023-01-07 │ 17    │
│ 7     │ 2023-01-08 │ 19    │
│ 8     │ 2023-01-09 │ 20    │
│ 9     │ 2023-01-10 │ 22    │
└───────┴────────────┴───────┘
```

### From date range

You can create a time series with a regular date range:

```js
// Create a date range
const dateRange = DataFrame.dateRange({
  start: '2023-01-01',
  end: '2023-01-10',
  freq: 'D'  // Daily frequency
});

// Create a DataFrame with the date range
const emptyTimeSeries = new DataFrame({
  date: dateRange
});

// Add random values
const randomTimeSeries = emptyTimeSeries.assign({
  value: () => Math.floor(Math.random() * 100)
});

randomTimeSeries.print();
```

### From CSV with dates

You can load time series data from a CSV file:

```js
// Load time series data from CSV
const stockPrices = DataFrame.readCSV('stock_prices.csv', {
  parseDate: ['date']  // Parse this column as dates
});

stockPrices.head().print();
```

## Setting a DateTimeIndex

To work effectively with time series data, you should set the date column as the index:

```js
// Set the date column as index
const timeSeriesIndexed = timeSeries.setIndex('date');
timeSeriesIndexed.print();
```

Output:
```
┌────────────┬───────┐
│ date       │ value │
├────────────┼───────┤
│ 2023-01-01 │ 10    │
│ 2023-01-02 │ 12    │
│ 2023-01-03 │ 15    │
│ 2023-01-04 │ 14    │
│ 2023-01-05 │ 16    │
│ 2023-01-06 │ 18    │
│ 2023-01-07 │ 17    │
│ 2023-01-08 │ 19    │
│ 2023-01-09 │ 20    │
│ 2023-01-10 │ 22    │
└────────────┴───────┘
```

## Date and Time Operations

### Extracting date components

You can extract components from date columns:

```js
// Extract date components
const withComponents = timeSeriesIndexed.assign({
  year: row => new Date(row.date).getFullYear(),
  month: row => new Date(row.date).getMonth() + 1,  // Months are 0-indexed
  day: row => new Date(row.date).getDate(),
  dayOfWeek: row => new Date(row.date).getDay(),  // 0 = Sunday, 6 = Saturday
  quarter: row => Math.floor((new Date(row.date).getMonth() + 3) / 3)
});

withComponents.print();
```

Output:
```
┌────────────┬───────┬──────┬───────┬─────┬──────────┬─────────┐
│ date       │ value │ year │ month │ day │ dayOfWeek│ quarter │
├────────────┼───────┼──────┼───────┼─────┼──────────┼─────────┤
│ 2023-01-01 │ 10    │ 2023 │ 1     │ 1   │ 0        │ 1       │
│ 2023-01-02 │ 12    │ 2023 │ 1     │ 2   │ 1        │ 1       │
│ 2023-01-03 │ 15    │ 2023 │ 1     │ 3   │ 2        │ 1       │
│ 2023-01-04 │ 14    │ 2023 │ 1     │ 4   │ 3        │ 1       │
│ 2023-01-05 │ 16    │ 2023 │ 1     │ 5   │ 4        │ 1       │
│ 2023-01-06 │ 18    │ 2023 │ 1     │ 6   │ 5        │ 1       │
│ 2023-01-07 │ 17    │ 2023 │ 1     │ 7   │ 6        │ 1       │
│ 2023-01-08 │ 19    │ 2023 │ 1     │ 8   │ 0        │ 1       │
│ 2023-01-09 │ 20    │ 2023 │ 1     │ 9   │ 1        │ 1       │
│ 2023-01-10 │ 22    │ 2023 │ 1     │ 10  │ 2        │ 1       │
└────────────┴───────┴──────┴───────┴─────┴──────────┴─────────┘
```

### Date arithmetic

You can perform date arithmetic:

```js
// Add days to dates
const withNextDay = timeSeriesIndexed.assign({
  nextDay: row => {
    const date = new Date(row.date);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split('T')[0];
  },
  prevDay: row => {
    const date = new Date(row.date);
    date.setDate(date.getDate() - 1);
    return date.toISOString().split('T')[0];
  }
});

withNextDay.head(3).print();
```

Output:
```
┌────────────┬───────┬────────────┬────────────┐
│ date       │ value │ nextDay    │ prevDay    │
├────────────┼───────┼────────────┼────────────┤
│ 2023-01-01 │ 10    │ 2023-01-02 │ 2022-12-31 │
│ 2023-01-02 │ 12    │ 2023-01-03 │ 2023-01-01 │
│ 2023-01-03 │ 15    │ 2023-01-04 │ 2023-01-02 │
└────────────┴───────┴────────────┴────────────┘
```

## Time Series Analysis

### Resampling

Resampling allows you to change the frequency of your time series data:

```js
// Resample to weekly frequency
const weekly = timeSeriesIndexed.resample('W', {
  aggregation: {
    value: 'mean'  // Calculate mean for each week
  }
});

weekly.print();
```

Output:
```
┌────────────┬───────┐
│ date       │ value │
├────────────┼───────┤
│ 2023-01-01 │ 10    │
│ 2023-01-08 │ 16.29 │
└────────────┴───────┘
```

You can specify different aggregation functions:

```js
// Resample with multiple aggregation functions
const weeklyMulti = timeSeriesIndexed.resample('W', {
  aggregation: {
    value: ['mean', 'min', 'max', 'sum']
  }
});

weeklyMulti.print();
```

Output:
```
┌────────────┬────────────┬────────────┬────────────┬────────────┐
│ date       │ value_mean │ value_min  │ value_max  │ value_sum  │
├────────────┼────────────┼────────────┼────────────┼────────────┤
│ 2023-01-01 │ 10         │ 10         │ 10         │ 10         │
│ 2023-01-08 │ 16.29      │ 14         │ 22         │ 114        │
└────────────┴────────────┴────────────┴────────────┴────────────┘
```

### Upsampling

You can also upsample to a higher frequency:

```js
// Create a weekly time series
const weeklyData = new DataFrame({
  date: ['2023-01-01', '2023-01-08', '2023-01-15', '2023-01-22'],
  value: [10, 15, 20, 25]
}).setIndex('date');

// Upsample to daily frequency
const daily = weeklyData.resample('D', {
  method: 'ffill'  // Forward fill missing values
});

daily.print();
```

Output:
```
┌────────────┬───────┐
│ date       │ value │
├────────────┼───────┤
│ 2023-01-01 │ 10    │
│ 2023-01-02 │ 10    │
│ 2023-01-03 │ 10    │
│ 2023-01-04 │ 10    │
│ 2023-01-05 │ 10    │
│ 2023-01-06 │ 10    │
│ 2023-01-07 │ 10    │
│ 2023-01-08 │ 15    │
│ ...        │ ...   │
└────────────┴───────┘
```

### Rolling windows

You can calculate statistics over a rolling window:

```js
// Calculate rolling mean with a window of 3
const rollingMean = timeSeriesIndexed.rolling(3).mean('value');
console.log('Rolling mean:', rollingMean);
// [null, null, 12.33, 13.67, 15, 16, 17, 18, 18.67, 20.33]

// Calculate multiple rolling statistics
const rollingStats = timeSeriesIndexed.rolling(3).agg({
  value: ['mean', 'std', 'min', 'max']
});

rollingStats.print();
```

Output:
```
┌────────────┬────────────┬────────────┬────────────┬────────────┐
│ date       │ value_mean │ value_std  │ value_min  │ value_max  │
├────────────┼────────────┼────────────┼────────────┼────────────┤
│ 2023-01-01 │ null       │ null       │ null       │ null       │
│ 2023-01-02 │ null       │ null       │ null       │ null       │
│ 2023-01-03 │ 12.33      │ 2.52       │ 10         │ 15         │
│ 2023-01-04 │ 13.67      │ 1.53       │ 12         │ 15         │
│ 2023-01-05 │ 15         │ 1          │ 14         │ 16         │
│ 2023-01-06 │ 16         │ 2          │ 14         │ 18         │
│ 2023-01-07 │ 17         │ 1          │ 16         │ 18         │
│ 2023-01-08 │ 18         │ 1          │ 17         │ 19         │
│ 2023-01-09 │ 18.67      │ 1.53       │ 17         │ 20         │
│ 2023-01-10 │ 20.33      │ 1.53       │ 19         │ 22         │
└────────────┴────────────┴────────────┴────────────┴────────────┘
```

### Expanding windows

You can calculate statistics over an expanding window:

```js
// Calculate expanding mean
const expandingMean = timeSeriesIndexed.expanding().mean('value');
console.log('Expanding mean:', expandingMean);
// [10, 11, 12.33, 12.75, 13.4, 14.17, 14.57, 15.12, 15.67, 16.3]

// Calculate multiple expanding statistics
const expandingStats = timeSeriesIndexed.expanding().agg({
  value: ['mean', 'std', 'min', 'max']
});

expandingStats.print();
```

Output:
```
┌────────────┬────────────┬────────────┬────────────┬────────────┐
│ date       │ value_mean │ value_std  │ value_min  │ value_max  │
├────────────┼────────────┼────────────┼────────────┼────────────┤
│ 2023-01-01 │ 10         │ 0          │ 10         │ 10         │
│ 2023-01-02 │ 11         │ 1.41       │ 10         │ 12         │
│ 2023-01-03 │ 12.33      │ 2.52       │ 10         │ 15         │
│ 2023-01-04 │ 12.75      │ 2.22       │ 10         │ 15         │
│ 2023-01-05 │ 13.4       │ 2.41       │ 10         │ 16         │
│ 2023-01-06 │ 14.17      │ 2.93       │ 10         │ 18         │
│ 2023-01-07 │ 14.57      │ 2.82       │ 10         │ 18         │
│ 2023-01-08 │ 15.12      │ 3.09       │ 10         │ 19         │
│ 2023-01-09 │ 15.67      │ 3.35       │ 10         │ 20         │
│ 2023-01-10 │ 16.3       │ 3.8        │ 10         │ 22         │
└────────────┴────────────┴────────────┴────────────┴────────────┘
```

## Time Series Visualization

TinyFrameJS provides methods for visualizing time series data:

```js
// Plot a time series
timeSeriesIndexed.plot({
  x: 'date',
  y: 'value',
  type: 'line',
  title: 'Time Series Plot',
  xLabel: 'Date',
  yLabel: 'Value'
});
```

### Multiple time series

You can plot multiple time series:

```js
// Create a DataFrame with multiple time series
const multiSeries = new DataFrame({
  date: [
    '2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05',
    '2023-01-06', '2023-01-07', '2023-01-08', '2023-01-09', '2023-01-10'
  ],
  series1: [10, 12, 15, 14, 16, 18, 17, 19, 20, 22],
  series2: [8, 9, 11, 13, 15, 14, 16, 18, 17, 19],
  series3: [5, 7, 8, 10, 12, 14, 15, 16, 18, 20]
}).setIndex('date');

// Plot multiple time series
multiSeries.plot({
  x: 'date',
  y: ['series1', 'series2', 'series3'],
  type: 'line',
  title: 'Multiple Time Series Plot',
  xLabel: 'Date',
  yLabel: 'Value'
});
```

### Seasonal decomposition

You can decompose a time series into trend, seasonal, and residual components:

```js
// Create a seasonal time series
const seasonalData = new DataFrame({
  date: Array.from({length: 365}, (_, i) => {
    const date = new Date('2023-01-01');
    date.setDate(date.getDate() + i);
    return date.toISOString().split('T')[0];
  }),
  value: Array.from({length: 365}, (_, i) => {
    // Trend component
    const trend = 100 + i * 0.1;
    // Seasonal component (yearly cycle)
    const seasonal = 20 * Math.sin(2 * Math.PI * i / 365);
    // Random noise
    const noise = Math.random() * 5;
    return trend + seasonal + noise;
  })
}).setIndex('date');

// Decompose the time series
const decomposed = seasonalData.decompose('value', {
  model: 'additive',
  period: 365
});

// Plot the decomposition
decomposed.plot();
```

## Time Series Forecasting

### Simple forecasting

You can perform simple forecasting using moving averages:

```js
// Create a time series
const data = new DataFrame({
  date: Array.from({length: 100}, (_, i) => {
    const date = new Date('2023-01-01');
    date.setDate(date.getDate() + i);
    return date.toISOString().split('T')[0];
  }),
  value: Array.from({length: 100}, (_, i) => {
    return 100 + i * 0.5 + Math.random() * 10;
  })
}).setIndex('date');

// Split into training and test sets
const train = data.iloc({rows: [0, 80]});
const test = data.iloc({rows: [80, 100]});

// Forecast using moving average
const forecastMA = train.forecast('value', {
  method: 'ma',
  steps: 20,
  window: 7
});

// Plot the forecast
data.plot({
  x: 'date',
  y: 'value',
  type: 'line',
  title: 'Moving Average Forecast',
  xLabel: 'Date',
  yLabel: 'Value'
});

forecastMA.plot({
  x: 'date',
  y: 'forecast',
  type: 'line',
  color: 'red',
  addTo: true
});
```

### Exponential smoothing

You can use exponential smoothing for forecasting:

```js
// Forecast using exponential smoothing
const forecastES = train.forecast('value', {
  method: 'ets',
  steps: 20,
  alpha: 0.3,  // Smoothing parameter
  beta: 0.1,   // Trend parameter
  gamma: 0.1   // Seasonal parameter
});

// Plot the forecast
data.plot({
  x: 'date',
  y: 'value',
  type: 'line',
  title: 'Exponential Smoothing Forecast',
  xLabel: 'Date',
  yLabel: 'Value'
});

forecastES.plot({
  x: 'date',
  y: 'forecast',
  type: 'line',
  color: 'red',
  addTo: true
});
```

## Working with Multiple Time Zones

TinyFrameJS supports working with multiple time zones:

```js
// Create a time series with time zone information
const timeZoneSeries = new DataFrame({
  datetime: [
    '2023-01-01T00:00:00Z',
    '2023-01-01T01:00:00Z',
    '2023-01-01T02:00:00Z',
    '2023-01-01T03:00:00Z'
  ],
  value: [10, 12, 15, 14]
});

// Convert to a different time zone
const convertedSeries = timeZoneSeries.assign({
  datetime_est: row => {
    const date = new Date(row.datetime);
    return new Date(date.getTime() - 5 * 60 * 60 * 1000).toISOString();
  }
});

convertedSeries.print();
```

Output:
```
┌───────┬─────────────────────┬───────┬─────────────────────┐
│ index │ datetime            │ value │ datetime_est        │
├───────┼─────────────────────┼───────┼─────────────────────┤
│ 0     │ 2023-01-01T00:00:00Z│ 10    │ 2022-12-31T19:00:00Z│
│ 1     │ 2023-01-01T01:00:00Z│ 12    │ 2022-12-31T20:00:00Z│
│ 2     │ 2023-01-01T02:00:00Z│ 15    │ 2022-12-31T21:00:00Z│
│ 3     │ 2023-01-01T03:00:00Z│ 14    │ 2022-12-31T22:00:00Z│
└───────┴─────────────────────┴───────┴─────────────────────┘
```

## Handling Missing Data in Time Series

Time series data often contains missing values. TinyFrameJS provides methods for handling them:

```js
// Create a time series with missing values
const missingData = new DataFrame({
  date: [
    '2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05',
    '2023-01-06', '2023-01-07', '2023-01-08', '2023-01-09', '2023-01-10'
  ],
  value: [10, null, 15, 14, null, 18, 17, null, 20, 22]
}).setIndex('date');

// Fill missing values with forward fill
const forwardFilled = missingData.fillna({
  columns: ['value'],
  method: 'ffill'
});

forwardFilled.print();
```

Output:
```
┌────────────┬───────┐
│ date       │ value │
├────────────┼───────┤
│ 2023-01-01 │ 10    │
│ 2023-01-02 │ 10    │
│ 2023-01-03 │ 15    │
│ 2023-01-04 │ 14    │
│ 2023-01-05 │ 14    │
│ 2023-01-06 │ 18    │
│ 2023-01-07 │ 17    │
│ 2023-01-08 │ 17    │
│ 2023-01-09 │ 20    │
│ 2023-01-10 │ 22    │
└────────────┴───────┘
```

### Interpolation

You can interpolate missing values:

```js
// Interpolate missing values
const interpolated = missingData.interpolate({
  columns: ['value'],
  method: 'linear'
});

interpolated.print();
```

Output:
```
┌────────────┬───────┐
│ date       │ value │
├────────────┼───────┤
│ 2023-01-01 │ 10    │
│ 2023-01-02 │ 12.5  │
│ 2023-01-03 │ 15    │
│ 2023-01-04 │ 14    │
│ 2023-01-05 │ 16    │
│ 2023-01-06 │ 18    │
│ 2023-01-07 │ 17    │
│ 2023-01-08 │ 18.5  │
│ 2023-01-09 │ 20    │
│ 2023-01-10 │ 22    │
└────────────┴───────┘
```

## Next Steps

Now that you know how to handle time series data with TinyFrameJS, you can:

- Learn how to [process textual data](./text-processing)
- Explore how to [work with missing data](./missing-data)
- Discover how to [optimize performance](./performance-optimization)
