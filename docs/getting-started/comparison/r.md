---
id: r
title: Comparison with R
sidebar_position: 1
description: Compare TinyFrameJS with R for data analysis
---

# Comparison with R

R is a powerful language and environment for statistical computing and graphics. This page compares TinyFrameJS with R, highlighting similarities, differences, and use cases for each.

## Overview

| Feature | TinyFrameJS | R |
|---------|-------------|---|
| **Primary use** | Data manipulation in JavaScript | Statistical computing and data analysis |
| **Environment** | Browser, Node.js | Desktop, RStudio, Jupyter |
| **Learning curve** | Moderate for JavaScript developers | Steeper for those new to programming |
| **Performance** | Optimized for moderate-sized datasets | Highly optimized for large statistical operations |
| **Integration** | Seamless with web applications | Requires additional tools for web integration |

## Syntax Comparison

### Creating a DataFrame

**TinyFrameJS:**
```javascript
import { DataFrame } from 'tinyframejs';

// From an array of objects
const df = new DataFrame([
  {name: 'Alice', age: 25, city: 'New York'},
  {name: 'Bob', age: 30, city: 'Chicago'},
  {name: 'Charlie', age: 35, city: 'Los Angeles'}
]);
```

**R:**
```r
# From vectors
df <- data.frame(
  name = c("Alice", "Bob", "Charlie"),
  age = c(25, 30, 35),
  city = c("New York", "Chicago", "Los Angeles")
)
```

### Filtering Data

**TinyFrameJS:**
```javascript
// Filter rows where age > 25
const filtered = df.filter(row => row.age > 25);
```

**R:**
```r
# Filter rows where age > 25
filtered <- df[df$age > 25, ]
```

### Selecting Columns

**TinyFrameJS:**
```javascript
// Select specific columns
const selected = df.select(['name', 'age']);
```

**R:**
```r
# Select specific columns
selected <- df[, c("name", "age")]
```

### Grouping and Aggregation

**TinyFrameJS:**
```javascript
// Group by city and calculate mean age
const grouped = df.groupby('city').agg({
  age: 'mean'
});
```

**R:**
```r
# Group by city and calculate mean age
library(dplyr)
grouped <- df %>% 
  group_by(city) %>% 
  summarize(age_mean = mean(age))
```

## When to Use TinyFrameJS vs. R

### Choose TinyFrameJS when:

- You're working in a JavaScript/web environment
- You need to integrate data analysis directly into a web application
- Your data processing needs to happen client-side
- You want to avoid additional language dependencies
- You're working with moderate-sized datasets

### Choose R when:

- You need advanced statistical analysis
- You're working with very large datasets
- You require extensive visualization capabilities
- You need access to specialized statistical packages
- Your workflow involves complex statistical modeling

## Interoperability

If you're working in an environment where both JavaScript and R are available, you can leverage the strengths of both:

- Use R for heavy statistical analysis and model building
- Export results to JSON or CSV
- Import into TinyFrameJS for web-based visualization and interaction
- Use tools like [Shiny](https://shiny.rstudio.com/) to create web interfaces for R

## Performance Considerations

- R is generally faster for large-scale statistical operations due to its optimized C/Fortran backends
- TinyFrameJS performs well for typical web application data processing tasks
- For very large datasets, consider preprocessing in R and then using TinyFrameJS for the final web presentation

## Learning Curve

- If you're already familiar with JavaScript, TinyFrameJS will be easier to learn
- R has a steeper learning curve but offers more statistical functionality
- TinyFrameJS syntax is designed to be familiar to users of pandas and dplyr

## Conclusion

Both TinyFrameJS and R are valuable tools for data analysis with different strengths and use cases. TinyFrameJS excels in web environments and JavaScript ecosystems, while R remains the tool of choice for dedicated statistical analysis and research. Many data scientists and developers use both tools, selecting the appropriate one based on the specific requirements of each project.
