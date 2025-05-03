---
id: installation
title: Installation
sidebar_position: 1
description: How to install TinyFrameJS in your project
---

# Installation

TinyFrameJS is designed to be lightweight and easy to install in any JavaScript environment. You can use it in Node.js projects, browser applications, or even in serverless functions.

## Prerequisites

- **Node.js**: Version 16.0.0 or higher (for Node.js applications)
- **Browser**: Any modern browser with ES6 support (for browser applications)

## Installation methods

### Using npm (recommended)

```bash
npm install tinyframejs
```

### Using yarn

```bash
yarn add tinyframejs
```

### Using pnpm

```bash
pnpm add tinyframejs
```

### Using CDN for browser applications

```html
<script type="module">
  import { DataFrame } from 'https://cdn.jsdelivr.net/npm/tinyframejs/+esm';
</script>
```

## Verifying installation

After installation, you can verify that TinyFrameJS is working correctly by creating a simple test:

```js
import { DataFrame } from 'tinyframejs';

// Create a simple DataFrame
const df = new DataFrame([
  { a: 1, b: 'x' },
  { a: 2, b: 'y' },
  { a: 3, b: 'z' }
]);

// Print the DataFrame to console
console.log(df.toString());
```

If everything is working correctly, you should see a formatted table in your console output.

## TypeScript support

TinyFrameJS includes TypeScript type definitions out of the box. No additional installation steps are required to use TinyFrameJS with TypeScript.

```ts
import { DataFrame } from 'tinyframejs';

// TypeScript will provide type checking and autocompletion
const df: DataFrame = new DataFrame([
  { a: 1, b: 'x' },
  { a: 2, b: 'y' },
  { a: 3, b: 'z' }
]);
```

## Next steps

Now that you have TinyFrameJS installed, you can:

- Check out the [Package Overview](./package-overview) to understand what's included
- Start with the [DataFrame Basics](./tutorials/dataframe-basics) tutorial
- Explore the [API Reference](/docs/api/README) for detailed documentation
