---
id: text-processing
title: How to manipulate textual data
sidebar_position: 10
description: Learn how to work with text data in TinyFrameJS
---

# How to manipulate textual data

Text data is common in many datasets, and TinyFrameJS provides powerful tools for manipulating and analyzing textual information. This tutorial covers the basics of text processing in TinyFrameJS.

## Working with String Columns

### Basic String Operations

TinyFrameJS provides methods for common string operations:

```js
import { DataFrame } from 'tinyframejs';

// Create a DataFrame with text data
const df = new DataFrame([
  {id: 1, text: 'Hello, World!', tags: 'greeting,welcome'},
  {id: 2, text: 'TinyFrameJS is awesome', tags: 'javascript,dataframe'},
  {id: 3, text: 'Data analysis made easy', tags: 'analysis,data,easy'},
  {id: 4, text: 'Text processing example', tags: 'text,example,processing'}
]);

// Convert text to lowercase
const lowercase = df.apply('text', text => text.toLowerCase());
lowercase.print();
```

Output:
```
┌───────┬─────┬──────────────────────────┬───────────────────────────┐
│ index │ id  │ text                     │ tags                      │
├───────┼─────┼──────────────────────────┼───────────────────────────┤
│ 0     │ 1   │ hello, world!            │ greeting,welcome          │
│ 1     │ 2   │ tinyframejs is awesome   │ javascript,dataframe      │
│ 2     │ 3   │ data analysis made easy  │ analysis,data,easy        │
│ 3     │ 4   │ text processing example  │ text,example,processing   │
└───────┴─────┴──────────────────────────┴───────────────────────────┘
```

### String Transformations

You can apply various string transformations:

```js
// Apply multiple string transformations
const transformed = df.assign({
  // Convert to uppercase
  upper: row => row.text.toUpperCase(),
  
  // Get the length of the text
  length: row => row.text.length,
  
  // Extract the first word
  firstWord: row => row.text.split(' ')[0],
  
  // Replace text
  replaced: row => row.text.replace('example', 'demo')
});

transformed.print();
```

Output:
```
┌───────┬─────┬──────────────────────────┬───────────────────────────┬──────────────────────────────┬────────┬────────────┬──────────────────────────┐
│ index │ id  │ text                     │ tags                      │ upper                        │ length │ firstWord  │ replaced                 │
├───────┼─────┼──────────────────────────┼───────────────────────────┼──────────────────────────────┼────────┼────────────┼──────────────────────────┤
│ 0     │ 1   │ Hello, World!            │ greeting,welcome          │ HELLO, WORLD!                │ 13     │ Hello,     │ Hello, World!            │
│ 1     │ 2   │ TinyFrameJS is awesome   │ javascript,dataframe      │ TINYFRAMEJS IS AWESOME       │ 24     │ TinyFrameJS│ TinyFrameJS is awesome   │
│ 2     │ 3   │ Data analysis made easy  │ analysis,data,easy        │ DATA ANALYSIS MADE EASY      │ 24     │ Data       │ Data analysis made easy  │
│ 3     │ 4   │ Text processing example  │ text,example,processing   │ TEXT PROCESSING EXAMPLE      │ 24     │ Text       │ Text processing demo     │
└───────┴─────┴──────────────────────────┴───────────────────────────┴──────────────────────────────┴────────┴────────────┴──────────────────────────┘
```

## String Splitting and Joining

### Splitting Strings

You can split strings into arrays:

```js
// Split the tags column into arrays
const withTagArrays = df.assign({
  tagArray: row => row.tags.split(',')
});

withTagArrays.print();
```

Output:
```
┌───────┬─────┬──────────────────────────┬───────────────────────────┬───────────────────────────┐
│ index │ id  │ text                     │ tags                      │ tagArray                  │
├───────┼─────┼──────────────────────────┼───────────────────────────┼───────────────────────────┤
│ 0     │ 1   │ Hello, World!            │ greeting,welcome          │ ["greeting", "welcome"]   │
│ 1     │ 2   │ TinyFrameJS is awesome   │ javascript,dataframe      │ ["javascript", "dataframe"]│
│ 2     │ 3   │ Data analysis made easy  │ analysis,data,easy        │ ["analysis", "data", "easy"]│
│ 3     │ 4   │ Text processing example  │ text,example,processing   │ ["text", "example", "processing"]│
└───────┴─────┴──────────────────────────┴───────────────────────────┴───────────────────────────┘
```

### Exploding Arrays

You can explode arrays into separate rows:

```js
// Explode the tag arrays into separate rows
const exploded = withTagArrays.explode('tagArray');
exploded.print();
```

Output:
```
┌───────┬─────┬──────────────────────────┬───────────────────────────┬───────────┐
│ index │ id  │ text                     │ tags                      │ tagArray  │
├───────┼─────┼──────────────────────────┼───────────────────────────┼───────────┤
│ 0     │ 1   │ Hello, World!            │ greeting,welcome          │ greeting  │
│ 0     │ 1   │ Hello, World!            │ greeting,welcome          │ welcome   │
│ 1     │ 2   │ TinyFrameJS is awesome   │ javascript,dataframe      │ javascript│
│ 1     │ 2   │ TinyFrameJS is awesome   │ javascript,dataframe      │ dataframe │
│ 2     │ 3   │ Data analysis made easy  │ analysis,data,easy        │ analysis  │
│ 2     │ 3   │ Data analysis made easy  │ analysis,data,easy        │ data      │
│ 2     │ 3   │ Data analysis made easy  │ analysis,data,easy        │ easy      │
│ 3     │ 4   │ Text processing example  │ text,example,processing   │ text      │
│ 3     │ 4   │ Text processing example  │ text,example,processing   │ example   │
│ 3     │ 4   │ Text processing example  │ text,example,processing   │ processing│
└───────┴─────┴──────────────────────────┴───────────────────────────┴───────────┘
```

### Joining Strings

You can join arrays back into strings:

```js
// Create a DataFrame with arrays
const dfArrays = new DataFrame([
  {id: 1, words: ['hello', 'world']},
  {id: 2, words: ['tinyframejs', 'is', 'awesome']},
  {id: 3, words: ['data', 'analysis', 'made', 'easy']}
]);

// Join arrays into strings
const joined = dfArrays.assign({
  sentence: row => row.words.join(' '),
  commaSeparated: row => row.words.join(',')
});

joined.print();
```

Output:
```
┌───────┬─────┬───────────────────────────┬─────────────────────────┬───────────────────────────┐
│ index │ id  │ words                     │ sentence                │ commaSeparated            │
├───────┼─────┼───────────────────────────┼─────────────────────────┼───────────────────────────┤
│ 0     │ 1   │ ["hello", "world"]        │ hello world             │ hello,world               │
│ 1     │ 2   │ ["tinyframejs", "is", "awesome"]│ tinyframejs is awesome  │ tinyframejs,is,awesome     │
│ 2     │ 3   │ ["data", "analysis", "made", "easy"]│ data analysis made easy│ data,analysis,made,easy    │
└───────┴─────┴───────────────────────────┴─────────────────────────┴───────────────────────────┘
```

## Pattern Matching

### Using Regular Expressions

You can use regular expressions for pattern matching:

```js
// Create a DataFrame with text data
const emails = new DataFrame([
  {id: 1, email: 'john.doe@example.com', text: 'Contact me at john.doe@example.com'},
  {id: 2, email: 'jane.smith@company.org', text: 'My email is jane.smith@company.org'},
  {id: 3, email: 'bob.jones@mail.co.uk', text: 'You can reach me at bob.jones@mail.co.uk or call me'}
]);

// Extract domains using regex
const withDomains = emails.assign({
  domain: row => {
    const match = row.email.match(/@([^.]+)/);
    return match ? match[1] : null;
  },
  
  // Check if text contains a phone number pattern
  hasPhoneNumber: row => /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/.test(row.text)
});

withDomains.print();
```

Output:
```
┌───────┬─────┬─────────────────────────┬─────────────────────────────────────────────────┬─────────┬───────────────┐
│ index │ id  │ email                   │ text                                            │ domain  │ hasPhoneNumber│
├───────┼─────┼─────────────────────────┼─────────────────────────────────────────────────┼─────────┼───────────────┤
│ 0     │ 1   │ john.doe@example.com    │ Contact me at john.doe@example.com              │ example │ false         │
│ 1     │ 2   │ jane.smith@company.org  │ My email is jane.smith@company.org              │ company │ false         │
│ 2     │ 3   │ bob.jones@mail.co.uk    │ You can reach me at bob.jones@mail.co.uk or call me│ mail    │ false         │
└───────┴─────┴─────────────────────────┴─────────────────────────────────────────────────┴─────────┴───────────────┘
```

### Finding and Replacing Patterns

You can find and replace patterns:

```js
// Replace email addresses with a placeholder
const anonymized = emails.assign({
  anonymizedText: row => row.text.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[EMAIL REDACTED]')
});

anonymized.print();
```

Output:
```
┌───────┬─────┬─────────────────────────┬─────────────────────────────────────────────────┬────────────────────────────────────────────┐
│ index │ id  │ email                   │ text                                            │ anonymizedText                             │
├───────┼─────┼─────────────────────────┼─────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ 0     │ 1   │ john.doe@example.com    │ Contact me at john.doe@example.com              │ Contact me at [EMAIL REDACTED]             │
│ 1     │ 2   │ jane.smith@company.org  │ My email is jane.smith@company.org              │ My email is [EMAIL REDACTED]               │
│ 2     │ 3   │ bob.jones@mail.co.uk    │ You can reach me at bob.jones@mail.co.uk or call me│ You can reach me at [EMAIL REDACTED] or call me│
└───────┴─────┴─────────────────────────┴─────────────────────────────────────────────────┴────────────────────────────────────────────┘
```

## Text Cleaning

### Removing Special Characters

You can clean text by removing special characters:

```js
// Create a DataFrame with text that needs cleaning
const dirtyText = new DataFrame([
  {id: 1, text: 'Hello, World! #welcome'},
  {id: 2, text: 'Product price: $19.99'},
  {id: 3, text: 'Email: info@example.com (contact us)'}
]);

// Clean the text
const cleanedText = dirtyText.assign({
  // Remove punctuation
  noPunctuation: row => row.text.replace(/[^\w\s]/g, ''),
  
  // Remove numbers
  noNumbers: row => row.text.replace(/\d+/g, ''),
  
  // Remove special characters and extra spaces
  cleaned: row => row.text.replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()
});

cleanedText.print();
```

Output:
```
┌───────┬─────┬────────────────────────────────┬────────────────────────────┬────────────────────────────┬────────────────────────────┐
│ index │ id  │ text                           │ noPunctuation              │ noNumbers                  │ cleaned                    │
├───────┼─────┼────────────────────────────────┼────────────────────────────┼────────────────────────────┼────────────────────────────┤
│ 0     │ 1   │ Hello, World! #welcome         │ Hello World welcome        │ Hello, World! #welcome     │ Hello World welcome        │
│ 1     │ 2   │ Product price: $19.99          │ Product price 1999         │ Product price: $           │ Product price              │
│ 2     │ 3   │ Email: info@example.com (contact us)│ Email infoexamplecom contact us│ Email: info@example.com (contact us)│ Email info example com contact us│
└───────┴─────┴────────────────────────────────┴────────────────────────────┴────────────────────────────┴────────────────────────────┘
```

### Normalizing Text

You can normalize text for analysis:

```js
// Normalize text for analysis
const normalized = dirtyText.assign({
  // Convert to lowercase, remove punctuation, and extra spaces
  normalized: row => row.text.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()
});

normalized.print();
```

Output:
```
┌───────┬─────┬────────────────────────────────┬────────────────────────────────┐
│ index │ id  │ text                           │ normalized                     │
├───────┼─────┼────────────────────────────────┼────────────────────────────────┤
│ 0     │ 1   │ Hello, World! #welcome         │ hello world welcome            │
│ 1     │ 2   │ Product price: $19.99          │ product price 19 99            │
│ 2     │ 3   │ Email: info@example.com (contact us)│ email info example com contact us │
└───────┴─────┴────────────────────────────────┴────────────────────────────────┘
```

## Text Analysis

### Word Counting

You can count words in text:

```js
// Create a DataFrame with text
const articles = new DataFrame([
  {id: 1, title: 'Introduction to TinyFrameJS', content: 'TinyFrameJS is a powerful library for data manipulation in JavaScript. It provides DataFrame functionality similar to pandas.'},
  {id: 2, title: 'Data Analysis with JavaScript', content: 'JavaScript can be used for data analysis. Libraries like TinyFrameJS make it easy to manipulate and analyze data.'},
  {id: 3, title: 'Web Development Tools', content: 'Modern web development requires various tools and libraries. JavaScript frameworks and data manipulation libraries are essential.'}
]);

// Count words in content
const wordCounts = articles.assign({
  wordCount: row => row.content.split(/\s+/).length,
  
  // Count specific word occurrences
  jsCount: row => (row.content.match(/javascript/gi) || []).length,
  
  // Count unique words
  uniqueWordCount: row => new Set(row.content.toLowerCase().split(/\s+/)).size
});

wordCounts.print();
```

Output:
```
┌───────┬─────┬────────────────────────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┬───────────┬─────────┬─────────────────┐
│ index │ id  │ title                          │ content                                                                                           │ wordCount │ jsCount │ uniqueWordCount │
├───────┼─────┼────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼───────────┼─────────┼─────────────────┤
│ 0     │ 1   │ Introduction to TinyFrameJS    │ TinyFrameJS is a powerful library for data manipulation in JavaScript. It provides DataFrame functionality similar to pandas.│ 17        │ 1       │ 16              │
│ 1     │ 2   │ Data Analysis with JavaScript  │ JavaScript can be used for data analysis. Libraries like TinyFrameJS make it easy to manipulate and analyze data.│ 17        │ 1       │ 15              │
│ 2     │ 3   │ Web Development Tools          │ Modern web development requires various tools and libraries. JavaScript frameworks and data manipulation libraries are essential.│ 15        │ 1       │ 14              │
└───────┴─────┴────────────────────────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┴───────────┴─────────┴─────────────────┘
```

### Text Similarity

You can calculate text similarity:

```js
// Calculate Jaccard similarity between two texts
function jaccardSimilarity(text1, text2) {
  const set1 = new Set(text1.toLowerCase().split(/\s+/));
  const set2 = new Set(text2.toLowerCase().split(/\s+/));
  
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);
  
  return intersection.size / union.size;
}

// Calculate similarity between title and content
const similarity = articles.assign({
  titleContentSimilarity: row => jaccardSimilarity(row.title, row.content)
});

similarity.print();
```

Output:
```
┌───────┬─────┬────────────────────────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┬────────────────────────┐
│ index │ id  │ title                          │ content                                                                                           │ titleContentSimilarity │
├───────┼─────┼────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼────────────────────────┤
│ 0     │ 1   │ Introduction to TinyFrameJS    │ TinyFrameJS is a powerful library for data manipulation in JavaScript. It provides DataFrame functionality similar to pandas.│ 0.05                   │
│ 1     │ 2   │ Data Analysis with JavaScript  │ JavaScript can be used for data analysis. Libraries like TinyFrameJS make it easy to manipulate and analyze data.│ 0.17                   │
│ 2     │ 3   │ Web Development Tools          │ Modern web development requires various tools and libraries. JavaScript frameworks and data manipulation libraries are essential.│ 0.05                   │
└───────┴─────┴────────────────────────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┴────────────────────────┘
```

## Next Steps

Now that you know how to manipulate textual data with TinyFrameJS, you can:

- Learn how to [work with missing data](./missing-data)
- Explore how to [optimize performance](./performance-optimization)
- Discover how to [export and share your analysis](./exporting-results)
