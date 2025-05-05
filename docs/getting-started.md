---
id: getting-started
sidebar_position: 1
title: Getting started
description: Install TinyFrameJS, see quick examples, explore tutorials and compare it with other data‑frame libraries.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

# Getting started

Welcome to **TinyFrameJS** — a tiny, lightning‑fast dataframe engine for JavaScript inspired by pandas.

---

## Installation

Use your favourite package manager:

<Tabs>
<TabItem value="npm" label="npm">

```bash
npm install tinyframejs
```

</TabItem>
<TabItem value="pnpm" label="pnpm">

```bash
pnpm add tinyframejs
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn add tinyframejs
```

</TabItem>
<TabItem value="cdn" label="CDN / ESM">

```html
<script type="module">
  import { DataFrame } from 'https://cdn.jsdelivr.net/npm/tinyframejs/+esm';
</script>
```

</TabItem>
</Tabs>

> **Works everywhere:** Node ≥ 16, modern browsers, Vite / Webpack, Deno.

---

## First 1‑minute example

```js title="src/quick-start.js"
import { DataFrame } from 'tinyframejs';

const df = new DataFrame([
  {ticker: 'AAPL', price: 187.2},
  {ticker: 'MSFT', price: 413.9},
  {ticker: 'NVDA', price: 875.4}
]);

df
  .sort('price', {ascending: false})
  .head(2)
  .print();
```

```txt
┌───────┬────────┬────────┐
│ index │ ticker │ price  │
├───────┼────────┼────────┤
│   2   │ NVDA   │ 875.4  │
│   1   │ MSFT   │ 413.9  │
└───────┴────────┴────────┘
```

---

## Intro tutorials

<div className="intro-tutorials-grid">

<div className="tutorial-card">
<h3>What kind of data does TinyFrameJS handle?</h3>
<img src="/tinyframejs/img/gs-data-table.svg" alt="Data table" />
<p>TinyFrameJS reads JavaScript arrays / objects and turns them into a <strong>DataFrame</strong> — a table with labelled columns and automatic dtype inference.</p>
<Link className="button button--primary button--sm" to="/docs/intro#dataframe-basics">Go to intro tutorial</Link>
</div>

<div className="tutorial-card">
<h3>How do I read and write tabular data?</h3>
<img src="/tinyframejs/img/gs-io.svg" alt="I/O formats" />
<p>Use <strong><code>readCsv</code></strong>, <strong><code>readJson</code></strong>, <strong><code>readSql</code></strong> & friends to import, or the matching <code>to*</code> methods to export (CSV, JSON, Arrow, Parquet soon).</p>
<Link className="button button--primary button--sm" to="/docs/guide/io">Learn I/O</Link>
</div>

<div className="tutorial-card">
<h3>How do I select a subset of a table?</h3>
<img src="/tinyframejs/img/gs-subset.svg" alt="Subset rows" />
<p><code>df.filter(row => …)</code> for boolean masks, <code>df.select(['colA','colB'])</code> for column projection, and SQL‑like <code>df.query()</code> for complex conditions.</p>
<Link className="button button--primary button--sm" to="/docs/guide/chaining#filter-select">Filter & select</Link>
</div>

<div className="tutorial-card">
<h3>How to create plots in TinyFrameJS?</h3>
<img src="/tinyframejs/img/gs-plot.svg" alt="Plots" />
<p><code>df.plot.scatter('x','y')</code> uses lightweight <a href="https://www.chartjs.org/">Chart.js</a> under the hood. No heavy python stacks involved!</p>
<Link className="button button--primary button--sm" to="/docs/guide/visual">Plotting</Link>
</div>

<div className="tutorial-card">
<h3>How to manipulate and reshape tables?</h3>
<img src="/tinyframejs/img/gs-reshape.svg" alt="Reshape tables" />
<p>With TinyFrameJS you can:</p>
<ul>
<li>Add new columns with <code>df.assign()</code></li>
<li>Apply transforms with <code>df.apply()</code></li>
<li>Sort with <code>df.sort()</code></li>
<li>Reshape with <code>df.melt()</code> / <code>df.pivot()</code></li>
<li>Group & aggregate with <code>df.groupby().agg()</code></li>
</ul>
<Link className="button button--primary button--sm" to="/docs/guide/transform">Transform data</Link>
</div>

<div className="tutorial-card">
<h3>How to join and merge datasets?</h3>
<img src="/tinyframejs/img/gs-join.svg" alt="Join datasets" />
<p>Use <code>df1.join(df2, 'key')</code> for SQL-like joins, or <code>df1.concat(df2)</code> to stack tables vertically. Supports inner, left, right, and outer joins.</p>
<Link className="button button--primary button--sm" to="/docs/guide/merge">Join & merge</Link>
</div>

<div className="tutorial-card">
<h3>How to optimize performance?</h3>
<img src="/tinyframejs/img/gs-performance.svg" alt="Performance" />
<p>TinyFrameJS is already fast, but you can make it even faster with typed columns, lazy evaluation, and parallel processing.</p>
<Link className="button button--primary button--sm" to="/docs/guide/performance">Performance tips</Link>
</div>

</div>

---

## Comparison with other libraries

| Feature | TinyFrameJS | Pandas | Danfo.js |
|---------|------------|--------|----------|
| Size    | 12 KB†     | ~50 MB | ~180 KB  |
| Speed   | ⭐⭐⭐⭐⭐    | ⭐⭐⭐⭐ | ⭐⭐⭐   |
| API     | pandas-like| reference | pandas-like |
| Dependencies | zero native | heavy (numpy) | TensorFlow.js |
| TypeScript | 100% | Python | partial |

<sub>† minified + gzip.</sub>

TinyFrameJS aims to offer **pandas‑like ergonomics** at a fraction of the size, with zero native dependencies and 🤏 minimal learning curve.

---

## Under the hood: Architecture & Design

<div className="architecture-section">

<h3 className="architecture-title">Why TinyFrameJS is different</h3>

TinyFrameJS was built from the ground up with a focus on performance, modularity, and developer experience. Here's what makes it special:

<div className="architecture-grid">
  <div className="architecture-card">
    <h3>Optimized Core Architecture</h3>
    <p>TinyFrameJS uses a modular architecture that separates concerns:</p>
    <ul>
      <li><strong>Core data structures</strong> — optimized for memory efficiency using TypedArrays</li>
      <li><strong>DataFrame API</strong> — high-level interface for data manipulation</li>
      <li><strong>Utility functions</strong> — standalone helpers that can be tree-shaken</li>
    </ul>
    <p>This separation allows for better tree-shaking, smaller bundle sizes, and clearer code organization.</p>
  </div>
  
  <div className="architecture-card">
    <h3>Performance Optimizations</h3>
    <p>Several techniques make TinyFrameJS fast:</p>
    <ul>
      <li><strong>Typed Arrays</strong> — numeric data is stored in native JavaScript TypedArrays</li>
      <li><strong>Lazy evaluation</strong> — operations are deferred until results are needed</li>
      <li><strong>Column-oriented storage</strong> — enables faster column operations and better memory usage</li>
      <li><strong>Minimal copying</strong> — views and references are used when possible to avoid data duplication</li>
    </ul>
  </div>

  <div className="architecture-card">
    <h3>Clean API Design</h3>
    <p>The API is designed for clarity and consistency:</p>
    <ul>
      <li><strong>Method chaining</strong> — fluent interface for composing operations</li>
      <li><strong>Immutable operations</strong> — most methods return new DataFrames</li>
      <li><strong>Familiar patterns</strong> — similar to pandas for easy adoption</li>
      <li><strong>TypeScript support</strong> — full type definitions for better developer experience</li>
    </ul>
  </div>
  
  <div className="architecture-card">
    <h3>Recommended Code Organization</h3>
    <p>When contributing to or extending TinyFrameJS, follow these principles:</p>
    <ul>
      <li><strong>Core functions</strong> like <code>createFrame</code> and <code>cloneFrame</code> should focus only on data structure creation</li>
      <li><strong>DataFrame methods</strong> should handle user-facing operations and transformations</li>
      <li><strong>Utility functions</strong> should be pure and focused on a single task</li>
      <li><strong>Avoid duplication</strong> — define logic in one place and reuse it</li>
    </ul>
    <p>This approach makes the codebase more maintainable and easier to understand.</p>
  </div>
</div>

<div style={{marginTop: '2rem'}}>
  <h4>Example: Core Architecture Separation</h4>

```js
// src/core/createFrame.js - Focused on creation and core structure
export function createFrame(data, options) {
  // Core data structure creation logic
}

// src/DataFrame.js - User-facing API
class DataFrame {
  constructor(data, options) {
    this._frame = createFrame(data, options);
  }
  
  // Methods that operate on the internal structure
  filter(predicate) {
    // Implementation using the internal _frame
  }
}
```

This separation keeps the codebase clean, testable, and maintainable while delivering excellent performance.
</div>

</div>

---

## Community & next steps

* ⭐ Star the project on [GitHub](https://github.com/AlphaQuantJS/tinyframejs)
* 📖 Read the full [API Reference](/docs/api/README)
* ✍🏻 Contribute tutorials — submit a PR to `/docs/getting-started`.

<div style={{marginTop:'2rem', textAlign:'center'}}>
  <Link className="button button--primary button--lg" to="/docs/guide/index">Dive into User Guide →</Link>
</div>
