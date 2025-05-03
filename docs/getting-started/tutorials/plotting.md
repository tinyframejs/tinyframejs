---
id: plotting
title: How to create plots in TinyFrameJS?
sidebar_position: 4
description: Learn how to create visualizations from your data using TinyFrameJS
---

# How to create plots in TinyFrameJS?

Data visualization is an essential part of data analysis. TinyFrameJS provides a simple and intuitive API for creating various types of plots from your data. Under the hood, TinyFrameJS uses [Chart.js](https://www.chartjs.org/), a popular JavaScript charting library, to render visualizations.

## Basic Plotting

### Line Charts

Line charts are useful for showing trends over time or continuous data:

```js
import { DataFrame } from 'tinyframejs';

// Create a DataFrame with time series data
const df = new DataFrame({
  date: ['2023-01-01', '2023-02-01', '2023-03-01', '2023-04-01', '2023-05-01'],
  value: [10, 15, 13, 17, 20],
  forecast: [11, 14, 15, 16, 19]
});

// Create a simple line chart
df.plot.line('date', 'value');

// Create a line chart with multiple series
df.plot.line('date', ['value', 'forecast']);

// Customize the chart
df.plot.line('date', ['value', 'forecast'], {
  title: 'Monthly Values',
  xLabel: 'Month',
  yLabel: 'Value',
  colors: ['#3394d6', '#ff6b6b'],
  legend: true,
  height: 400,
  width: 800
});
```

### Bar Charts

Bar charts are great for comparing discrete categories:

```js
// Create a DataFrame with categorical data
const df = new DataFrame({
  category: ['A', 'B', 'C', 'D', 'E'],
  value: [10, 15, 7, 12, 9],
  comparison: [8, 12, 10, 9, 11]
});

// Create a simple bar chart
df.plot.bar('category', 'value');

// Create a bar chart with multiple series
df.plot.bar('category', ['value', 'comparison']);

// Create a horizontal bar chart
df.plot.barh('category', 'value');

// Create a stacked bar chart
df.plot.bar('category', ['value', 'comparison'], {
  stacked: true,
  title: 'Comparison by Category'
});
```

### Scatter Plots

Scatter plots are useful for showing the relationship between two variables:

```js
// Create a DataFrame with two numeric variables
const df = new DataFrame({
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  y: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
  size: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  category: ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'C']
});

// Create a simple scatter plot
df.plot.scatter('x', 'y');

// Create a scatter plot with bubble size
df.plot.scatter('x', 'y', {
  size: 'size',
  title: 'X vs Y with Size'
});

// Create a scatter plot with color by category
df.plot.scatter('x', 'y', {
  color: 'category',
  title: 'X vs Y by Category'
});
```

### Pie Charts

Pie charts are useful for showing proportions of a whole:

```js
// Create a DataFrame with categorical data
const df = new DataFrame({
  category: ['A', 'B', 'C', 'D', 'E'],
  value: [10, 15, 7, 12, 9]
});

// Create a simple pie chart
df.plot.pie('category', 'value');

// Create a donut chart
df.plot.pie('category', 'value', {
  donut: true,
  title: 'Distribution by Category'
});
```

## Advanced Plotting

### Histograms

Histograms show the distribution of a numeric variable:

```js
// Create a DataFrame with numeric data
const df = new DataFrame({
  value: [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 7]
});

// Create a simple histogram
df.plot.histogram('value');

// Customize the histogram
df.plot.histogram('value', {
  bins: 10,
  title: 'Distribution of Values',
  xLabel: 'Value',
  yLabel: 'Frequency',
  color: '#3394d6'
});
```

### Box Plots

Box plots show the distribution of a numeric variable across categories:

```js
// Create a DataFrame with numeric data by category
const df = new DataFrame({
  category: ['A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'C'],
  value: [1, 2, 3, 4, 2, 3, 4, 5, 3, 4, 5, 6]
});

// Create a box plot
df.plot.box('category', 'value');

// Customize the box plot
df.plot.box('category', 'value', {
  title: 'Distribution by Category',
  xLabel: 'Category',
  yLabel: 'Value',
  colors: ['#3394d6', '#ff6b6b', '#7ec699']
});
```

### Heatmaps

Heatmaps show the relationship between two categorical variables:

```js
// Create a DataFrame with data for a heatmap
const df = new DataFrame({
  x: ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C'],
  y: ['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z'],
  value: [1, 2, 3, 4, 5, 6, 7, 8, 9]
});

// Create a heatmap
df.plot.heatmap('x', 'y', 'value');

// Customize the heatmap
df.plot.heatmap('x', 'y', 'value', {
  title: 'Heatmap Example',
  colorScale: 'viridis',
  showValues: true
});
```

## Interactive Plots

TinyFrameJS supports interactive plots with tooltips, zooming, and panning:

```js
// Create an interactive line chart
df.plot.line('date', 'value', {
  interactive: true,
  tooltip: true,
  zoom: true,
  pan: true
});
```

## Multiple Plots

You can create multiple plots in a grid layout:

```js
// Create a 2x2 grid of plots
df.plot.grid(2, 2, [
  { type: 'line', x: 'date', y: 'value', title: 'Line Chart' },
  { type: 'bar', x: 'category', y: 'value', title: 'Bar Chart' },
  { type: 'scatter', x: 'x', y: 'y', title: 'Scatter Plot' },
  { type: 'pie', labels: 'category', values: 'value', title: 'Pie Chart' }
]);
```

## Saving Plots

You can save plots to various formats:

```js
// Save a plot to PNG (Node.js environment)
const plot = df.plot.line('date', 'value');
plot.save('plot.png');

// Save a plot to SVG
plot.save('plot.svg');

// Save a plot to PDF
plot.save('plot.pdf');

// Get a data URL for a plot (works in browser and Node.js)
const dataUrl = plot.toDataURL();
console.log(dataUrl);
```

## Customizing Plots

TinyFrameJS provides a wide range of options for customizing plots:

```js
// Customize a line chart
df.plot.line('date', 'value', {
  // General options
  title: 'Monthly Values',
  subtitle: 'Data from 2023',
  xLabel: 'Month',
  yLabel: 'Value',
  legend: true,
  height: 400,
  width: 800,
  
  // Style options
  backgroundColor: '#f8f9fa',
  fontFamily: 'Arial, sans-serif',
  fontSize: 12,
  fontColor: '#333',
  borderColor: '#ddd',
  borderWidth: 1,
  
  // Line options
  lineWidth: 2,
  pointRadius: 4,
  pointHoverRadius: 6,
  fill: false,
  tension: 0.4,  // Curve smoothness (0 = straight lines)
  
  // Axis options
  xGrid: true,
  yGrid: true,
  xTickRotation: 45,
  yTickFormat: (value) => `$${value}`,
  
  // Animation options
  animation: true,
  animationDuration: 1000,
  
  // Interaction options
  tooltip: true,
  zoom: true,
  pan: true
});
```

## Next Steps

Now that you know how to create plots with TinyFrameJS, you can:

- Learn how to [create derived columns](./derived-columns) for more complex visualizations
- Explore how to [calculate summary statistics](./statistics) to better understand your data
- Discover how to [reshape your data](./reshaping) to make it more suitable for visualization
