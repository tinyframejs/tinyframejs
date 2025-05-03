---
id: spreadsheets
title: Comparison with Spreadsheets
sidebar_position: 3
description: Compare TinyFrameJS with spreadsheet applications like Excel and Google Sheets
---

# Comparison with Spreadsheets

Spreadsheet applications like Microsoft Excel and Google Sheets are widely used tools for data analysis and manipulation. This page compares TinyFrameJS with spreadsheets, highlighting similarities, differences, and use cases for each.

## Overview

| Feature | TinyFrameJS | Spreadsheets (Excel/Google Sheets) |
|---------|-------------|-----------------------------------|
| **Primary use** | Programmatic data manipulation in JavaScript | Visual data analysis and simple calculations |
| **Environment** | Browser, Node.js | Desktop applications, web browsers |
| **Learning curve** | Requires programming knowledge | Low barrier to entry, visual interface |
| **Reproducibility** | High (code-based, version-controllable) | Lower (manual steps, difficult to track) |
| **Automation** | Highly automatable | Limited automation without macros/scripts |
| **Scalability** | Better for large datasets | Performance degrades with large datasets |

## Conceptual Comparison

### Data Structure

**TinyFrameJS:**
- Data is organized in DataFrame objects
- Columns have consistent data types
- Operations are performed through method calls
- Changes create new DataFrames (immutable by default)

**Spreadsheets:**
- Data is organized in cells arranged in rows and columns
- Cells can contain different types of data
- Operations are performed through formulas or menu actions
- Changes typically modify the original data (mutable)

### Data Manipulation

**TinyFrameJS:**
```javascript
import { DataFrame } from 'tinyframejs';

// Create a DataFrame
const sales = new DataFrame([
  {date: '2023-01-01', product: 'A', units: 100, price: 10},
  {date: '2023-01-02', product: 'B', units: 150, price: 15},
  {date: '2023-01-03', product: 'A', units: 120, price: 10},
  {date: '2023-01-04', product: 'C', units: 80, price: 20}
]);

// Calculate revenue
const withRevenue = sales.assign({
  revenue: row => row.units * row.price
});

// Calculate total revenue by product
const revenueByProduct = withRevenue
  .groupby('product')
  .agg({
    revenue: 'sum',
    units: 'sum'
  });
```

**Spreadsheets:**
- Enter data in cells A1:D5 (headers in row 1)
- Add formula in E2: `=C2*D2` and copy down to E5
- Create pivot table to summarize by product

### Visualization

**TinyFrameJS:**
```javascript
// Create a bar chart of revenue by product
withRevenue.plot({
  x: 'product',
  y: 'revenue',
  type: 'bar',
  title: 'Revenue by Product'
});
```

**Spreadsheets:**
- Select data range
- Use chart wizard/insert menu to create a bar chart
- Customize chart properties through UI

## When to Use TinyFrameJS vs. Spreadsheets

### Choose TinyFrameJS when:

- You need reproducible, programmatic data analysis
- You're working with larger datasets (thousands to millions of rows)
- You need to automate repetitive data tasks
- You want version control for your analysis
- You need to integrate data analysis into a web application
- You're performing complex transformations or calculations

### Choose Spreadsheets when:

- You need quick, ad-hoc analysis
- You're working with smaller datasets
- You prefer a visual interface over coding
- You need to share with non-technical users
- You want built-in visualization tools
- You're performing simple calculations or summaries

## Bridging the Gap

TinyFrameJS can work well with spreadsheets in a data workflow:

```javascript
// Import data from Excel/CSV
const data = await DataFrame.readExcel('sales_data.xlsx');

// Process data programmatically
const processed = data
  .filter(row => row.revenue > 1000)
  .groupby(['region', 'product'])
  .agg({
    revenue: ['sum', 'mean'],
    units: 'sum'
  });

// Export back to Excel/CSV for sharing
await processed.toExcel('processed_sales.xlsx');
```

## Performance Comparison

| Dataset Size | TinyFrameJS | Spreadsheets |
|--------------|-------------|--------------|
| Small (&lt;1,000 rows) | Fast | Fast |
| Medium (1,000-100,000 rows) | Fast | Slows down |
| Large (&gt;100,000 rows) | Handles well | Very slow/crashes |

## Learning Curve

- Spreadsheets have a lower initial learning curve
- TinyFrameJS requires JavaScript knowledge but offers more power
- Advanced spreadsheet features (macros, pivot tables) can be complex
- TinyFrameJS code is more maintainable for complex analyses

## Advantages of TinyFrameJS over Spreadsheets

1. **Reproducibility**: Code-based analysis is easier to reproduce and audit
2. **Scalability**: Better performance with large datasets
3. **Automation**: Easier to automate and schedule
4. **Version Control**: Can use Git or other VCS
5. **Complex Operations**: More powerful data transformation capabilities
6. **Integration**: Seamless integration with web applications

## Advantages of Spreadsheets over TinyFrameJS

1. **Accessibility**: Lower barrier to entry, no coding required
2. **Visibility**: Data and formulas are visible at the same time
3. **Interactivity**: Immediate feedback when changing values
4. **Sharing**: Easy to share with non-technical users
5. **Built-in Tools**: Many built-in functions and visualization options
6. **Familiarity**: Widely used in business environments

## Conclusion

TinyFrameJS and spreadsheets serve different needs in the data analysis ecosystem. Spreadsheets excel at quick, visual analysis for smaller datasets, while TinyFrameJS offers programmatic, reproducible analysis that scales better to larger datasets. Many data workflows can benefit from using both: spreadsheets for initial exploration and sharing results, and TinyFrameJS for the heavy lifting of data processing and analysis.
