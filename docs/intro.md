---
sidebar_position: 1
---

# Introduction

Welcome to **TinyFrameJS** documentation!

TinyFrameJS is a lightweight and powerful JavaScript library for data manipulation, providing DataFrame functionality similar to pandas in Python.

## Getting Started

To start using TinyFrameJS, install the library via npm:

```bash
npm install tinyframejs
```

Or using yarn:

```bash
yarn add tinyframejs
```

## Basic Usage

```javascript
import { createFrame, readCsv } from 'tinyframejs';

// Create DataFrame from array
const data = [
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Alice', age: 25, city: 'Boston' },
  { name: 'Bob', age: 35, city: 'Chicago' }
];

const df = createFrame(data);
console.log(df.head());

// Load data from CSV
readCsv('data.csv').then(df => {
  console.log(df.describe());
});
```

## What's Next?

Check out the [API Reference](/docs/api/README) for detailed information about available functions and methods.
