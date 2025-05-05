---
id: package-overview
title: Package Overview
sidebar_position: 2
description: Overview of TinyFrameJS package structure and components
---

# Package Overview

TinyFrameJS is a high-performance JavaScript framework for processing tabular and financial data. It is optimized for the JavaScript environment and provides efficient tools for data analysis. This page describes the package structure and its main components.

## Core Principles and Advantages

TinyFrameJS is designed with the following principles in mind:

- **Performance**: Using TypedArray and optimized algorithms provides a 10-100× speed increase compared to traditional JS data structures.
- **Pure JavaScript**: Fully native implementation without binary dependencies.
- **Modularity**: Support for tree-shaking to optimize bundle size.
- **Ease of Use**: Intuitive API with support for method chaining.
- **Flexibility**: Ability to work with both small and large datasets.

TinyFrameJS is especially useful for:

- Financial data analysis
- Time series processing
- Statistical calculations
- Data preparation for visualization
- Working with tabular data in web applications

## Data Structures

TinyFrameJS provides two main data structures:

| Dimensionality | Name | Description |
|-------------|----------|----------|
| 1D | Series | One-dimensional typed array with labels |
| 2D | DataFrame | Two-dimensional tabular structure with labels and columns of different types |

### TinyFrame

At the core of TinyFrameJS is the low-level data structure TinyFrame:

```js
// Internal TinyFrame structure
{
  columns: {
    date: ['2023-01-01', '2023-01-02', ...],
    price: Float64Array([100, 105, ...]),
    volume: Float64Array([1000, 1500, ...])
  },
  index: Int32Array([0, 1, 2, ...])
}
```

TinyFrame organizes data in a columnar format, which provides:

- Efficient memory usage
- Fast operations on columns
- Optimized aggregations and transformations

### DataFrame

DataFrame is a high-level class that wraps TinyFrame and provides a convenient API:

```js
import { DataFrame } from 'tinyframejs';

// Creating a DataFrame
const df = DataFrame.create({
  date: ['2023-01-01', '2023-01-02'],
  price: [100, 105],
  volume: [1000, 1500]
});

// Accessing data
console.log(df.columns);    // ['date', 'price', 'volume']
console.log(df.rowCount);   // 2
```

## Project Structure

TinyFrameJS is organized into the following logical structure:

```
tinyframejs/
├── src/
│   ├── core/                  # Basic data structures and utilities
│   │   ├── DataFrame.js       # DataFrame class
│   │   ├── StreamingFrame.js  # Processing large datasets
│   │   ├── LazyPipeline.js    # Lazy calculations
│   │   ├── createFrame.js     # Creating TinyFrame structure
│   │   └── ...
│   │
│   ├── io/                    # Input-output module
│   │   ├── readers/           # Reading from different sources
│   │   ├── writers/           # Writing to different formats
│   │   └── ...
│   │
│   ├── methods/               # Methods for working with data
│   │   ├── aggregation/       # Aggregation functions
│   │   ├── filtering/         # Filtering functions
│   │   ├── sorting/           # Sorting methods
│   │   ├── transform/         # Transformation methods
│   │   ├── reshape/           # Reshaping methods
│   │   ├── window/            # Window functions
│   │   ├── display/           # Display methods
│   │   ├── autoExtend.js      # Automatic extension of DataFrame
│   │   └── ...
│   │
│   ├── utils/                 # Utilities
│   └── ...
│
├── test/                      # Tests
├── examples/                  # Usage examples
└── ...
```

## Automatic Extension Mechanism

One of the key features of TinyFrameJS is the automatic method extension mechanism:

- All methods are defined as pure functions with dependency injection
- The `inject.js` module centralizes dependencies (validators, loggers, etc.)
- The `autoExtend.js` module automatically attaches methods to `DataFrame.prototype`
- This happens once during library initialization

```js
// Method definition
export const mean = 
  ({ validateColumn }) => 
  (frame, column) => {
    validateColumn(frame, column);
    // Method implementation
  };

// Automatic extension
DataFrame.prototype.mean = function(column) {
  return mean({ validateColumn })(this._frame, column);
};
```

This approach provides:

- Modularity and tree-shaking capability
- Clean separation of logic and API
- No boilerplate for method registration

## Core Functionality

### Data Input/Output

```js
// Reading from CSV
const dfFromCSV = await DataFrame.readCSV('data.csv');

// Reading from JSON
const dfFromJSON = await DataFrame.readJSON('data.json');

// Writing to CSV
await df.writeCSV('output.csv');
```

### Data Transformations

```js
// Transformation chain
const result = df
  .dropNaN('price')    // Removes rows with NaN
  .sort('price')       // Sorts by column
  .head(10)            // Takes the first 10 rows
  .derive({            // Creates new columns
    pricePerUnit: row => row.price / row.volume,
    logPrice: row => Math.log(row.price)
  });
```

### Aggregations

```js
// Basic aggregations
const mean = df.mean('price');
const sum = df.sum('volume');
const min = df.min('price');
const max = df.max('price');

// Descriptive statistics
const stats = df.describe();
```

### Grouping and Pivot Tables

```js
// Grouping and aggregation
const grouped = df.groupBy('category').aggregate({
  price: 'mean',
  volume: 'sum'
});

// Pivot table
const pivoted = df.pivot('date', 'category', 'price');
```

### Window Functions

```js
// Rolling mean
const rolling = df.rollingMean('price', 5);

// Exponentially weighted mean
const ewm = df.ewm('price', 0.5);
```

## Advanced Features

### StreamingFrame

StreamingFrame is designed for processing datasets that don't fit in memory:

```js
import { StreamingFrame } from 'tinyframejs';

const streamingFrame = new StreamingFrame({
  source: 'large-file.csv',
  chunkSize: 10000,  // Rows at a time
});

// Processing data in chunks
await streamingFrame.process(chunk => {
  // Processing a chunk of data
  return processedChunk;
});
```

### LazyPipeline

LazyPipeline optimizes the execution of complex operation chains:

```js
// Creating a lazy operation chain
const pipeline = df.lazy()
  .dropNaN('price')
  .sort('price')
  .head(100)
  .mean('price');

// Executing the chain only when the result is requested
const result = pipeline.compute();
```

## Performance

TinyFrameJS provides a significant performance advantage:

| Operation | tinyframejs | Other JS libraries |
| ------------ | ----------- | -------------------- |
| rollingMean| ~50ms | ~400ms |
| normalize | ~35ms | ~300ms |
| corrMatrix | ~60ms | ~500ms |
| dropNaN | ~20ms | ~100ms |

All results measured on 100,000 rows × 10 columns.

## Community and Support

TinyFrameJS is actively supported by the developer community. If you have questions or suggestions:

- Visit the GitHub repository
- Check out the usage examples
- Join the discussions

## Conclusion

TinyFrameJS provides a powerful and efficient tool for data analysis in JavaScript. Thanks to its optimized data structure, modular design, and automatic method extension, TinyFrameJS delivers high performance while maintaining the flexibility and ease of use of JavaScript.

For more detailed information on working with DataFrame, see the [DataFrame Basics](./tutorials/dataframe-basics) section.
