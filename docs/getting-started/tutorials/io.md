---
id: io
title: How do I read and write tabular data?
sidebar_position: 2
description: Learn how to import and export data in various formats with TinyFrameJS
---

# How do I read and write tabular data?

TinyFrameJS provides a variety of functions for reading data from different sources and writing data to different formats. This tutorial covers the most common input/output operations.

## Reading Data

### From CSV files

CSV (Comma-Separated Values) is one of the most common formats for tabular data. TinyFrameJS provides the `readCsv` function to read CSV files:

```js
import { readCsv } from 'tinyframejs';

// Read from a local file (Node.js environment)
const df = readCsv('path/to/file.csv');

// Read from a URL (works in browser and Node.js)
const dfFromUrl = readCsv('https://example.com/data.csv');

// With options
const dfWithOptions = readCsv('path/to/file.csv', {
  delimiter: ';',  // Use semicolon as delimiter
  header: true,    // File has a header row
  skipRows: 1,     // Skip the first row
  parseNumbers: true, // Automatically parse numbers
  parseDates: true,   // Automatically parse dates
  encoding: 'utf-8'   // Specify file encoding
});
```

### From JSON files

JSON is another popular format for data exchange. TinyFrameJS provides the `readJson` function:

```js
import { readJson } from 'tinyframejs';

// Read from a local file
const df = readJson('path/to/file.json');

// Read from a URL
const dfFromUrl = readJson('https://example.com/data.json');

// With options
const dfWithOptions = readJson('path/to/file.json', {
  path: 'data.records',  // Path to the array in the JSON structure
  orient: 'records'      // Format of the JSON data ('records', 'columns', etc.)
});
```

### From Excel files

TinyFrameJS can read Excel files using the `readExcel` function:

```js
import { readExcel } from 'tinyframejs';

// Read from a local file
const df = readExcel('path/to/file.xlsx');

// With options
const dfWithOptions = readExcel('path/to/file.xlsx', {
  sheet: 'Sheet1',  // Specify sheet name
  range: 'A1:D10',  // Specify cell range
  header: true      // File has a header row
});
```

### From SQL databases

TinyFrameJS can connect to SQL databases and read data using the `readSql` function:

```js
import { readSql } from 'tinyframejs';

// Connect to a database and execute a query
const df = readSql({
  connection: {
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
  },
  query: 'SELECT * FROM users WHERE age > 25'
});
```

### From arrays and objects

You can create a DataFrame directly from JavaScript arrays and objects:

```js
import { DataFrame } from 'tinyframejs';

// From an array of objects
const df1 = new DataFrame([
  {name: 'Alice', age: 25},
  {name: 'Bob', age: 30}
]);

// From an object of arrays
const df2 = new DataFrame({
  name: ['Alice', 'Bob'],
  age: [25, 30]
});
```

## Writing Data

### To CSV files

You can write a DataFrame to a CSV file using the `toCsv` method:

```js
// Write to a file (Node.js environment)
df.toCsv('path/to/output.csv');

// With options
df.toCsv('path/to/output.csv', {
  delimiter: ';',     // Use semicolon as delimiter
  header: true,       // Include header row
  index: false,       // Don't include index column
  encoding: 'utf-8'   // Specify file encoding
});

// Get CSV string (works in browser and Node.js)
const csvString = df.toCsv();
console.log(csvString);
```

### To JSON files

You can write a DataFrame to a JSON file using the `toJson` method:

```js
// Write to a file
df.toJson('path/to/output.json');

// With options
df.toJson('path/to/output.json', {
  orient: 'records',  // Format of the JSON data
  indent: 2           // Number of spaces for indentation
});

// Get JSON string
const jsonString = df.toJson();
console.log(jsonString);
```

### To Excel files

You can write a DataFrame to an Excel file using the `toExcel` method:

```js
// Write to a file
df.toExcel('path/to/output.xlsx');

// With options
df.toExcel('path/to/output.xlsx', {
  sheet: 'Data',      // Sheet name
  startCell: 'A1',    // Starting cell
  includeHeader: true // Include header row
});
```

### To SQL databases

You can write a DataFrame to a SQL database using the `toSql` method:

```js
// Write to a database table
df.toSql({
  connection: {
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydb'
  },
  table: 'users',
  ifExists: 'replace'  // 'replace', 'append', or 'fail'
});
```

## Working with large files

When working with large files, you might want to use streaming to avoid loading the entire file into memory:

```js
import { readCsvStream } from 'tinyframejs';

// Process a large CSV file in chunks
readCsvStream('path/to/large-file.csv', {
  chunkSize: 1000,  // Process 1000 rows at a time
  onChunk: (chunk) => {
    // Process each chunk
    console.log(`Processing chunk with ${chunk.rows.length} rows`);
    
    // Do something with the chunk
    const df = new DataFrame(chunk.rows);
    const filtered = df.filter(row => row.value > 100);
    
    // You can return a promise if processing is asynchronous
    return processChunkAsync(filtered);
  }
});
```

## Next Steps

Now that you know how to read and write data with TinyFrameJS, you can:

- Learn about [filtering and selecting data](./filtering)
- Explore how to [create plots from your data](./plotting)
- Discover how to [create derived columns](./derived-columns)
