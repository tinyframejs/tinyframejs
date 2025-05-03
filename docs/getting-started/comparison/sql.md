---
id: sql
title: Comparison with SQL
sidebar_position: 2
description: Compare TinyFrameJS with SQL for data manipulation
---

# Comparison with SQL

SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. This page compares TinyFrameJS with SQL, highlighting similarities, differences, and use cases for each.

## Overview

| Feature | TinyFrameJS | SQL |
|---------|-------------|-----|
| **Primary use** | In-memory data manipulation in JavaScript | Database querying and management |
| **Environment** | Browser, Node.js | Database servers, embedded systems |
| **Data structure** | DataFrame objects | Tables in relational databases |
| **Learning curve** | Moderate for JavaScript developers | Moderate, widely taught |
| **Performance** | Optimized for in-memory operations | Optimized for disk-based operations and indexing |
| **Integration** | Seamless with web applications | Requires database connection |

## Syntax Comparison

### Creating Data

**TinyFrameJS:**
```javascript
import { DataFrame } from 'tinyframejs';

// Create a DataFrame
const employees = new DataFrame([
  {id: 1, name: 'Alice', department: 'Engineering', salary: 75000},
  {id: 2, name: 'Bob', department: 'Marketing', salary: 65000},
  {id: 3, name: 'Charlie', department: 'Engineering', salary: 80000},
  {id: 4, name: 'David', department: 'Sales', salary: 70000}
]);
```

**SQL:**
```sql
-- Create a table
CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  department VARCHAR(100),
  salary INT
);

-- Insert data
INSERT INTO employees (id, name, department, salary) VALUES
  (1, 'Alice', 'Engineering', 75000),
  (2, 'Bob', 'Marketing', 65000),
  (3, 'Charlie', 'Engineering', 80000),
  (4, 'David', 'Sales', 70000);
```

### Filtering Data

**TinyFrameJS:**
```javascript
// Filter employees in Engineering department
const engineers = employees.filter(row => row.department === 'Engineering');
```

**SQL:**
```sql
-- Filter employees in Engineering department
SELECT * FROM employees WHERE department = 'Engineering';
```

### Selecting Columns

**TinyFrameJS:**
```javascript
// Select specific columns
const nameAndSalary = employees.select(['name', 'salary']);
```

**SQL:**
```sql
-- Select specific columns
SELECT name, salary FROM employees;
```

### Aggregation

**TinyFrameJS:**
```javascript
// Calculate average salary by department
const avgSalaryByDept = employees
  .groupby('department')
  .agg({
    salary: 'mean'
  });
```

**SQL:**
```sql
-- Calculate average salary by department
SELECT department, AVG(salary) as avg_salary
FROM employees
GROUP BY department;
```

### Joining Data

**TinyFrameJS:**
```javascript
// Create a second DataFrame
const departments = new DataFrame([
  {dept_id: 'Engineering', location: 'Building A'},
  {dept_id: 'Marketing', location: 'Building B'},
  {dept_id: 'Sales', location: 'Building C'}
]);

// Join employees with departments
const employeesWithLocation = employees.merge(departments, {
  left_on: 'department',
  right_on: 'dept_id'
});
```

**SQL:**
```sql
-- Create a departments table
CREATE TABLE departments (
  dept_id VARCHAR(100) PRIMARY KEY,
  location VARCHAR(100)
);

INSERT INTO departments (dept_id, location) VALUES
  ('Engineering', 'Building A'),
  ('Marketing', 'Building B'),
  ('Sales', 'Building C');

-- Join employees with departments
SELECT e.*, d.location
FROM employees e
JOIN departments d ON e.department = d.dept_id;
```

## When to Use TinyFrameJS vs. SQL

### Choose TinyFrameJS when:

- You're working in a JavaScript/web environment
- You need to manipulate data in memory
- Your data processing needs to happen client-side
- You're working with moderate-sized datasets
- You need to perform complex transformations on data

### Choose SQL when:

- You're working with large datasets that don't fit in memory
- You need persistent data storage
- You require transaction support
- You need to enforce data integrity constraints
- You're performing operations on a database

## Interoperability

TinyFrameJS can work well with SQL databases:

```javascript
// Read data from SQL database
const employees = await DataFrame.readSql({
  connection: dbConnection,
  query: 'SELECT * FROM employees'
});

// Process data in TinyFrameJS
const processedData = employees
  .filter(row => row.salary > 70000)
  .groupby('department')
  .agg({
    salary: ['mean', 'max', 'min']
  });

// Write results back to SQL
await processedData.toSql({
  connection: dbConnection,
  tableName: 'salary_analysis',
  ifExists: 'replace'
});
```

## Performance Considerations

- SQL databases are optimized for disk-based operations and can handle very large datasets
- TinyFrameJS is optimized for in-memory operations and is typically faster for smaller datasets
- SQL excels at indexed lookups and joins on large tables
- TinyFrameJS is better for complex transformations and interactive analysis

## Learning Curve

- If you're already familiar with JavaScript, TinyFrameJS will be easier to learn
- SQL has a standardized syntax that is widely taught and used
- TinyFrameJS methods are designed to be similar to SQL operations, making the transition easier

## Conclusion

TinyFrameJS and SQL serve different but complementary purposes in the data ecosystem. TinyFrameJS excels at in-memory data manipulation in JavaScript environments, while SQL is the standard for persistent data storage and querying in relational databases. Many applications use both: SQL for data storage and retrieval, and TinyFrameJS for client-side processing and visualization.
