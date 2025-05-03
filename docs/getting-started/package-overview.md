---
id: package-overview
title: Package Overview
sidebar_position: 2
description: Overview of TinyFrameJS package structure and components
---

# Package Overview

TinyFrameJS is a lightweight data manipulation library for JavaScript, designed to provide pandas-like functionality with a minimal footprint. This page provides an overview of the package structure and its main components.

## Package Structure

TinyFrameJS is organized into several logical components:

```
tinyframejs/
├── core/           # Core data structures and low-level operations
├── dataframe/      # DataFrame implementation and methods
├── io/             # Input/output functionality
├── ops/            # Data operations and transformations
├── utils/          # Utility functions
└── index.js        # Main entry point
```

## Main Components

### DataFrame

The `DataFrame` class is the central component of TinyFrameJS. It represents a two-dimensional tabular data structure with labeled axes (rows and columns).

```js
import { DataFrame } from 'tinyframejs';

const df = new DataFrame([
  {name: 'Alice', age: 25, city: 'New York'},
  {name: 'Bob', age: 30, city: 'San Francisco'},
  {name: 'Charlie', age: 35, city: 'Chicago'}
]);
```

### Data Input/Output

TinyFrameJS provides functions for reading and writing data in various formats:

```js
import { readCsv, readJson, readExcel } from 'tinyframejs';

// Read data from CSV file
const df1 = readCsv('data.csv');

// Read data from JSON file
const df2 = readJson('data.json');

// Read data from Excel file
const df3 = readExcel('data.xlsx');
```

### Data Operations

TinyFrameJS includes a wide range of operations for data manipulation:

- **Filtering**: Select rows based on conditions
- **Selection**: Select specific columns
- **Sorting**: Sort data by one or more columns
- **Aggregation**: Compute summary statistics
- **Grouping**: Group data by one or more columns
- **Joining**: Combine data from multiple DataFrames
- **Reshaping**: Change the layout of data

### Utility Functions

TinyFrameJS includes various utility functions for common data manipulation tasks:

```js
import { mean, sum, count, first } from 'tinyframejs';

// Calculate mean of a column
const avgAge = mean(df, 'age');

// Calculate sum of a column
const totalAge = sum(df, 'age');

// Count rows
const rowCount = count(df);

// Get first row
const firstRow = first(df);
```

## Bundle Size

One of the key advantages of TinyFrameJS is its small size:

| Format | Size |
|--------|------|
| Minified | ~30 KB |
| Minified + gzipped | ~12 KB |

This makes TinyFrameJS an excellent choice for browser applications where bundle size is critical.

## Performance Considerations

TinyFrameJS is designed to be fast and efficient:

- Uses native JavaScript arrays and objects for optimal performance
- Implements lazy evaluation for certain operations
- Minimizes data copying when possible
- Provides specialized data structures for numeric data

## Next Steps

Now that you understand the package structure, you can:

- Explore the [Tutorials](./tutorials/dataframe-basics) to learn how to use TinyFrameJS
- Check the [API Reference](/docs/api/README) for detailed documentation
- Compare TinyFrameJS with [other tools](./comparison/other-js-libraries) to understand its advantages
