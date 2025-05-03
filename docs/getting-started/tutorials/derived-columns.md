---
id: derived-columns
title: How to create new columns derived from existing columns
sidebar_position: 5
description: Learn how to create and manipulate columns in TinyFrameJS
---

# How to create new columns derived from existing columns

Creating new columns based on existing data is a common operation in data analysis. TinyFrameJS provides several methods for adding, modifying, and transforming columns in a DataFrame.

## Adding New Columns

### Using `assign()`

The `assign()` method allows you to add one or more new columns to a DataFrame:

```js
import { DataFrame } from 'tinyframejs';

// Create a sample DataFrame
const df = new DataFrame([
  {name: 'Alice', age: 25, salary: 70000},
  {name: 'Bob', age: 30, salary: 85000},
  {name: 'Charlie', age: 35, salary: 90000}
]);

// Add a new column with a constant value
const withDepartment = df.assign({
  department: 'Engineering'
});
withDepartment.print();
```

Output:
```
┌───────┬─────────┬─────┬────────┬─────────────┐
│ index │ name    │ age │ salary │ department  │
├───────┼─────────┼─────┼────────┼─────────────┤
│   0   │ Alice   │ 25  │ 70000  │ Engineering │
│   1   │ Bob     │ 30  │ 85000  │ Engineering │
│   2   │ Charlie │ 35  │ 90000  │ Engineering │
└───────┴─────────┴─────┴────────┴─────────────┘
```

### Adding a column based on existing columns

You can create a new column based on values from existing columns:

```js
// Add a new column based on existing columns
const withBonus = df.assign({
  bonus: row => row.salary * 0.1
});
withBonus.print();
```

Output:
```
┌───────┬─────────┬─────┬────────┬────────┐
│ index │ name    │ age │ salary │ bonus  │
├───────┼─────────┼─────┼────────┼────────┤
│   0   │ Alice   │ 25  │ 70000  │ 7000   │
│   1   │ Bob     │ 30  │ 85000  │ 8500   │
│   2   │ Charlie │ 35  │ 90000  │ 9000   │
└───────┴─────────┴─────┴────────┴────────┘
```

### Adding multiple columns at once

You can add multiple columns in a single operation:

```js
// Add multiple columns at once
const withMultiple = df.assign({
  bonus: row => row.salary * 0.1,
  totalComp: row => row.salary + (row.salary * 0.1),
  ageGroup: row => row.age < 30 ? 'Junior' : 'Senior'
});
withMultiple.print();
```

Output:
```
┌───────┬─────────┬─────┬────────┬────────┬──────────┬──────────┐
│ index │ name    │ age │ salary │ bonus  │ totalComp│ ageGroup │
├───────┼─────────┼─────┼────────┼────────┼──────────┼──────────┤
│   0   │ Alice   │ 25  │ 70000  │ 7000   │ 77000    │ Junior   │
│   1   │ Bob     │ 30  │ 85000  │ 8500   │ 93500    │ Senior   │
│   2   │ Charlie │ 35  │ 90000  │ 9000   │ 99000    │ Senior   │
└───────┴─────────┴─────┴────────┴────────┴──────────┴──────────┘
```

## Modifying Existing Columns

### Using `mutate()`

The `mutate()` method allows you to modify existing columns:

```js
// Modify an existing column
const withModifiedSalary = df.mutate({
  salary: row => row.salary * 1.05  // 5% raise
});
withModifiedSalary.print();
```

Output:
```
┌───────┬─────────┬─────┬────────┐
│ index │ name    │ age │ salary │
├───────┼─────────┼─────┼────────┤
│   0   │ Alice   │ 25  │ 73500  │
│   1   │ Bob     │ 30  │ 89250  │
│   2   │ Charlie │ 35  │ 94500  │
└───────┴─────────┴─────┴────────┘
```

### Modifying multiple columns

You can modify multiple columns in a single operation:

```js
// Modify multiple columns
const withModifiedMultiple = df.mutate({
  salary: row => row.salary * 1.05,  // 5% raise
  age: row => row.age + 1            // Increment age
});
withModifiedMultiple.print();
```

Output:
```
┌───────┬─────────┬─────┬────────┐
│ index │ name    │ age │ salary │
├───────┼─────────┼─────┼────────┤
│   0   │ Alice   │ 26  │ 73500  │
│   1   │ Bob     │ 31  │ 89250  │
│   2   │ Charlie │ 36  │ 94500  │
└───────┴─────────┴─────┴────────┘
```

## Applying Functions to Columns

### Using `apply()`

The `apply()` method allows you to apply a function to one or more columns:

```js
// Apply a function to a single column
const withRoundedSalary = df.apply('salary', value => Math.round(value / 1000) * 1000);
withRoundedSalary.print();
```

Output:
```
┌───────┬─────────┬─────┬────────┐
│ index │ name    │ age │ salary │
├───────┼─────────┼─────┼────────┤
│   0   │ Alice   │ 25  │ 70000  │
│   1   │ Bob     │ 30  │ 85000  │
│   2   │ Charlie │ 35  │ 90000  │
└───────┴─────────┴─────┴────────┘
```

### Applying a function to multiple columns

You can apply a function to multiple columns:

```js
// Apply a function to multiple columns
const withNumericFormatting = df.apply(['age', 'salary'], value => {
  if (typeof value === 'number') {
    return value.toLocaleString();
  }
  return value;
});
withNumericFormatting.print();
```

Output:
```
┌───────┬─────────┬───────┬──────────┐
│ index │ name    │ age   │ salary   │
├───────┼─────────┼───────┼──────────┤
│   0   │ Alice   │ 25    │ 70,000   │
│   1   │ Bob     │ 30    │ 85,000   │
│   2   │ Charlie │ 35    │ 90,000   │
└───────┴─────────┴───────┴──────────┘
```

### Applying a function to the entire DataFrame

You can apply a function to all columns:

```js
// Apply a function to all columns
const withAllFormatted = df.applyAll(value => {
  if (typeof value === 'number') {
    return value.toLocaleString();
  }
  return value;
});
withAllFormatted.print();
```

## Creating Categorical Columns

### Using `categorize()`

The `categorize()` method allows you to create a categorical column based on numeric values:

```js
// Create a categorical column based on age
const withAgeCategory = df.categorize('age', {
  bins: [0, 25, 35, 100],
  labels: ['Young', 'Middle', 'Senior']
});
withAgeCategory.print();
```

Output:
```
┌───────┬─────────┬─────┬────────┬─────────────┐
│ index │ name    │ age │ salary │ age_category│
├───────┼─────────┼─────┼────────┼─────────────┤
│   0   │ Alice   │ 25  │ 70000  │ Young       │
│   1   │ Bob     │ 30  │ 85000  │ Middle      │
│   2   │ Charlie │ 35  │ 90000  │ Middle      │
└───────┴─────────┴─────┴────────┼─────────────┘
```

### Using `cut()`

The `cut()` method is similar to `categorize()` but allows for more customization:

```js
// Create a categorical column with custom options
const withSalaryTier = df.cut('salary', {
  bins: [0, 75000, 85000, 100000],
  labels: ['Low', 'Medium', 'High'],
  includeLowest: true,
  right: false,
  columnName: 'salary_tier'
});
withSalaryTier.print();
```

Output:
```
┌───────┬─────────┬─────┬────────┬─────────────┐
│ index │ name    │ age │ salary │ salary_tier │
├───────┼─────────┼─────┼────────┼─────────────┤
│   0   │ Alice   │ 25  │ 70000  │ Low         │
│   1   │ Bob     │ 30  │ 85000  │ Medium      │
│   2   │ Charlie │ 35  │ 90000  │ High        │
└───────┴─────────┴─────┴────────┼─────────────┘
```

## Creating One-Hot Encoded Columns

One-hot encoding is a process of converting categorical variables into a form that could be provided to machine learning algorithms.

```js
// Create a DataFrame with a categorical column
const dfCat = new DataFrame([
  {name: 'Alice', department: 'Engineering'},
  {name: 'Bob', department: 'Marketing'},
  {name: 'Charlie', department: 'Engineering'},
  {name: 'David', department: 'Sales'},
  {name: 'Eve', department: 'Marketing'}
]);

// Create one-hot encoded columns
const withOneHot = dfCat.oneHot('department');
withOneHot.print();
```

Output:
```
┌───────┬─────────┬─────────────┬───────────────────┬────────────────┬────────────────┐
│ index │ name    │ department  │ department_Engin..│ department_Mar..│ department_Sal..│
├───────┼─────────┼─────────────┼───────────────────┼────────────────┼────────────────┤
│   0   │ Alice   │ Engineering │ 1                 │ 0              │ 0              │
│   1   │ Bob     │ Marketing   │ 0                 │ 1              │ 0              │
│   2   │ Charlie │ Engineering │ 1                 │ 0              │ 0              │
│   3   │ David   │ Sales       │ 0                 │ 0              │ 1              │
│   4   │ Eve     │ Marketing   │ 0                 │ 1              │ 0              │
└───────┴─────────┴─────────────┴───────────────────┴────────────────┴────────────────┘
```

## Creating Columns with Mathematical Operations

TinyFrameJS provides methods for performing mathematical operations on columns:

```js
// Create a DataFrame with numeric columns
const dfNum = new DataFrame([
  {x: 1, y: 2},
  {x: 3, y: 4},
  {x: 5, y: 6}
]);

// Add columns with mathematical operations
const withMath = dfNum.assign({
  sum: row => row.x + row.y,
  diff: row => row.x - row.y,
  product: row => row.x * row.y,
  quotient: row => row.x / row.y,
  power: row => Math.pow(row.x, row.y),
  sqrt_x: row => Math.sqrt(row.x),
  log_y: row => Math.log(row.y)
});
withMath.print();
```

Output:
```
┌───────┬─────┬─────┬─────┬──────┬─────────┬──────────┬────────┬────────┐
│ index │ x   │ y   │ sum │ diff │ product │ quotient │ sqrt_x │ log_y  │
├───────┼─────┼─────┼─────┼──────┼─────────┼──────────┼────────┼────────┤
│   0   │ 1   │ 2   │ 3   │ -1   │ 2       │ 0.5      │ 1      │ 0.6931 │
│   1   │ 3   │ 4   │ 7   │ -1   │ 12      │ 0.75     │ 1.7321 │ 1.3863 │
│   2   │ 5   │ 6   │ 11  │ -1   │ 30      │ 0.8333   │ 2.2361 │ 1.7918 │
└───────┴─────┴─────┴─────┴──────┴─────────┴──────────┴────────┴────────┘
```

## Creating Columns with String Operations

You can also perform string operations on columns:

```js
// Create a DataFrame with string columns
const dfStr = new DataFrame([
  {firstName: 'John', lastName: 'Doe'},
  {firstName: 'Jane', lastName: 'Smith'},
  {firstName: 'Bob', lastName: 'Johnson'}
]);

// Add columns with string operations
const withStrOps = dfStr.assign({
  fullName: row => `${row.firstName} ${row.lastName}`,
  initials: row => `${row.firstName[0]}.${row.lastName[0]}.`,
  nameLength: row => row.firstName.length + row.lastName.length,
  upperFirst: row => row.firstName.toUpperCase(),
  lowerLast: row => row.lastName.toLowerCase()
});
withStrOps.print();
```

Output:
```
┌───────┬──────────┬──────────┬────────────────┬──────────┬────────────┬────────────┬───────────┐
│ index │ firstName│ lastName │ fullName       │ initials │ nameLength │ upperFirst │ lowerLast │
├───────┼──────────┼──────────┼────────────────┼──────────┼────────────┼────────────┼───────────┤
│   0   │ John     │ Doe      │ John Doe       │ J.D.     │ 7          │ JOHN       │ doe       │
│   1   │ Jane     │ Smith    │ Jane Smith     │ J.S.     │ 9          │ JANE       │ smith     │
│   2   │ Bob      │ Johnson  │ Bob Johnson    │ B.J.     │ 10         │ BOB        │ johnson   │
└───────┴──────────┴──────────┴────────────────┴──────────┴────────────┴────────────┴───────────┘
```

## Next Steps

Now that you know how to create and manipulate columns in TinyFrameJS, you can:

- Learn how to [calculate summary statistics](./statistics) on your data
- Explore how to [reshape your data](./reshaping) for different analyses
- Discover how to [combine data from multiple tables](./combining-tables)
