---
id: io
title: How do I read and write tabular data?
sidebar_position: 2
description: Learn how to import and export data in various formats with TinyFrameJS
---

# How do I read and write tabular data?

TinyFrameJS provides a variety of functions for reading data from different sources and writing data to different formats. This section covers the most common input/output operations.

<div align="center">
  <img src="/img/io.png" alt="TinyFrameJS I/O Operations" width="25%" />
</div>

## Reading Data

### Reading from CSV

CSV (Comma-Separated Values) is one of the most common formats for tabular data. TinyFrameJS provides the `readCsv` function for reading CSV files:

```js
import { readCsv } from 'tinyframejs/io/readers';

// Asynchronous reading from a CSV file
const df = await readCsv('data.csv');

// Reading from a URL
const dfFromUrl = await readCsv('https://example.com/data.csv');

// Reading from a File object (in browser)
const fileInput = document.getElementById('fileInput');
const file = fileInput.files[0];
const dfFromFile = await readCsv(file);

// With additional options
const dfWithOptions = await readCsv('data.csv', {
  delimiter: ';',             // Delimiter (default ',')
  header: true,               // Use first row as header (default true)
  skipRows: 2,                // Skip first N rows (default 0)
  parseNumbers: true,         // Automatically convert numbers (default true)
  parseDates: true,           // Automatically convert dates (default true)
  dateFormat: 'YYYY-MM-DD',   // Date format (default auto-detection)
  encoding: 'utf-8'           // File encoding (default 'utf-8')
});
```

You can also use the DataFrame class method:

```js
import { DataFrame } from 'tinyframejs';

const df = await DataFrame.readCsv('data.csv');
```

### Reading from TSV

TSV (Tab-Separated Values) is similar to CSV but uses tabs as delimiters. TinyFrameJS provides the `readTsv` function:

```js
import { readTsv } from 'tinyframejs/io/readers';

// Asynchronous reading from a TSV file
const df = await readTsv('data.tsv');

// Reading from a URL
const dfFromUrl = await readTsv('https://example.com/data.tsv');

// With options (similar to readCsv)
const dfWithOptions = await readTsv('data.tsv', {
  header: true,
  skipRows: 1,
  parseNumbers: true,
  parseDates: true
});
```

DataFrame class method:

```js
import { DataFrame } from 'tinyframejs';

const df = await DataFrame.readTsv('data.tsv');
```

### Reading from JSON

JSON is a popular format for data exchange. TinyFrameJS can read JSON files with various structures:

```js
import { readJson } from 'tinyframejs/io/readers';

// Reading from a JSON file
const df = await readJson('data.json');

// Reading from a URL
const dfFromUrl = await readJson('https://example.com/data.json');

// Reading from a File object (in browser)
const fileInput = document.getElementById('fileInput');
const file = fileInput.files[0];
const dfFromFile = await readJson(file);

// With options
const dfWithOptions = await readJson('data.json', {
  recordPath: 'data.records',  // Path to the records array in JSON
  orientation: 'records'       // JSON format: 'records', 'columns', 'split', 'index'
});
```

DataFrame class method:

```js
import { DataFrame } from 'tinyframejs';

const df = await DataFrame.readJson('data.json');
```

### Reading from Excel

TinyFrameJS uses the exceljs library for working with Excel files:

```js
import { readExcel } from 'tinyframejs/io/readers';

// Reading from an Excel file
const df = await readExcel('data.xlsx');

// Reading from a File object (in browser)
const fileInput = document.getElementById('fileInput');
const file = fileInput.files[0];
const dfFromFile = await readExcel(file);

// With options
const dfWithOptions = await readExcel('data.xlsx', {
  sheet: 'Sheet1',           // Sheet name (default first sheet)
  header: true,              // Use first row as header (default true)
  skipRows: 0                // Skip first N rows (default 0)
});
```

DataFrame class method:

```js
import { DataFrame } from 'tinyframejs';

const df = await DataFrame.readExcel('data.xlsx', { sheet: 'Data' });
```

### Reading from array of objects

You can create a DataFrame directly from a JavaScript array of objects:

```js
import { DataFrame } from 'tinyframejs';

const data = [
  { date: '2023-01-01', price: 100, volume: 1000 },
  { date: '2023-01-02', price: 105, volume: 1500 },
  { date: '2023-01-03', price: 102, volume: 1200 }
];

const df = DataFrame.create(data);
```

### Reading from column object

You can also create a DataFrame from an object where keys are column names and values are data arrays:

```js
import { DataFrame } from 'tinyframejs';

const data = {
  date: ['2023-01-01', '2023-01-02', '2023-01-03'],
  price: [100, 105, 102],
  volume: [1000, 1500, 1200]
};

const df = DataFrame.create(data);
```

## Writing Data

### Writing to CSV

```js
import { writeCsv } from 'tinyframejs/io/writers';

// Writing DataFrame to a CSV file
await writeCsv(df, 'output.csv');

// With options
await writeCsv(df, 'output.csv', {
  delimiter: ';',             // Delimiter (default ',')
  header: true,               // Include header (default true)
  index: false,               // Include index (default false)
  encoding: 'utf-8',          // File encoding (default 'utf-8')
  dateFormat: 'YYYY-MM-DD'    // Date format (default ISO)
});
```

DataFrame method:

```js
// Writing to CSV via DataFrame method
await df.toCsv('output.csv');
```

### Writing to JSON

```js
import { writeJson } from 'tinyframejs/io/writers';

// Writing DataFrame to a JSON file
await writeJson(df, 'output.json');

// With options
await writeJson(df, 'output.json', {
  orientation: 'records',     // JSON format: 'records', 'columns', 'split', 'index'
  indent: 2,                  // Indentation for formatting (default 2)
  dateFormat: 'ISO'           // Date format (default ISO)
});
```

DataFrame method:

```js
// Writing to JSON via DataFrame method
await df.toJson('output.json');
```

### Writing to Excel

```js
import { writeExcel } from 'tinyframejs/io/writers';

// Writing DataFrame to an Excel file
await writeExcel(df, 'output.xlsx');

// With options
await writeExcel(df, 'output.xlsx', {
  sheet: 'Data',              // Sheet name (default 'Sheet1')
  header: true,               // Include header (default true)
  index: false,               // Include index (default false)
  startCell: 'A1',            // Starting cell (default 'A1')
  dateFormat: 'YYYY-MM-DD'    // Date format (default ISO)
});
```

DataFrame method:

```js
// Writing to Excel via DataFrame method
await df.toExcel('output.xlsx');
```

### Converting to string

For debugging or console output, you can convert a DataFrame to a string:

```js
import { toString } from 'tinyframejs/methods/display';

// Converting DataFrame to string
const str = toString(df);

// With options
const strWithOptions = toString(df, {
  maxRows: 10,               // Maximum number of rows (default 10)
  maxCols: 5,                // Maximum number of columns (default all)
  precision: 2,              // Precision for floating-point numbers (default 2)
  includeIndex: true         // Include index (default true)
});
```

DataFrame method:

```js
// Converting to string via DataFrame method
const str = df.toString();

// Console output
console.log(df.toString());
```

## Data Conversion

When reading data, TinyFrameJS automatically converts it to an optimized TinyFrame structure:

- String data is stored as regular JavaScript arrays
- Numeric data is converted to Float64Array for efficient storage and calculations
- Integer data is converted to Int32Array
- Dates are converted to Date objects or stored in a special format for efficient time series operations

This process happens automatically and ensures optimal performance when working with data.

## Streaming Processing of Large Files

For working with files that don't fit in memory, TinyFrameJS provides StreamingFrame:

```js
import { StreamingFrame } from 'tinyframejs';

// Creating a StreamingFrame for a large CSV file
const streaming = new StreamingFrame({
  source: 'large-data.csv',
  format: 'csv',
  chunkSize: 10000,  // Chunk size in rows
  options: {
    delimiter: ',',
    header: true
  }
});

// Processing file in chunks
let total = 0;
await streaming.process(chunk => {
  // chunk is a DataFrame with a portion of data
  total += chunk.sum('value');
  return null; // Return null if you don't need to save the result
});

console.log(`Total sum: ${total}`);

// Or collecting results
const result = await streaming.process(chunk => {
  // Filter and aggregate each chunk
  return chunk.filter(row => row.value > 100).mean('price');
});

console.log(`Mean values by chunk: ${result}`);
```

## Conclusion

TinyFrameJS provides flexible and efficient tools for reading and writing tabular data in various formats. Thanks to the optimized TinyFrame data structure, input/output operations are performed quickly and with minimal memory usage.

For more complex scenarios, such as processing large files or streaming data processing, TinyFrameJS offers specialized tools like StreamingFrame.

## Next Steps

Now that you know how to read and write data with TinyFrameJS, you can:

- Learn about [filtering and selecting data](./filtering)
- Explore how to [create plots from your data](./plotting)
- Discover how to [create derived columns](./derived-columns)
