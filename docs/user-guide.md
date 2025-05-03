---
sidebar_position: 2
---

# Руководство пользователя

## Введение в TinyFrameJS

TinyFrameJS - это легкая и мощная библиотека для работы с данными в JavaScript, которая предоставляет функциональность, аналогичную pandas в Python, но оптимизированную для веб-среды.

## Основные концепции

### DataFrame

`DataFrame` - это основная структура данных в TinyFrameJS. Она представляет собой двумерную таблицу с метками строк и столбцов.

```javascript
const df = createFrame({
  name: ['Alice', 'Bob', 'Charlie'],
  age: [25, 30, 35],
  city: ['New York', 'London', 'Paris']
});
```

### Создание DataFrame

TinyFrameJS предоставляет несколько способов создания DataFrame:

#### Из объекта JavaScript

```javascript
import { createFrame } from 'tinyframejs';

const df = createFrame({
  name: ['Alice', 'Bob', 'Charlie'],
  age: [25, 30, 35],
  city: ['New York', 'London', 'Paris']
});
```

#### Из массива

```javascript
import { arrayToFrame } from 'tinyframejs';

const data = [
  ['Alice', 25, 'New York'],
  ['Bob', 30, 'London'],
  ['Charlie', 35, 'Paris']
];

const columns = ['name', 'age', 'city'];
const df = arrayToFrame(data, columns);
```

#### Из JSON

```javascript
import { jsonToFrame } from 'tinyframejs';

const jsonData = `[
  {"name": "Alice", "age": 25, "city": "New York"},
  {"name": "Bob", "age": 30, "city": "London"},
  {"name": "Charlie", "age": 35, "city": "Paris"}
]`;

const df = jsonToFrame(jsonData);
```

#### Из CSV/TSV

```javascript
import { readCsv, readTsv } from 'tinyframejs';

// Из CSV
const dfCsv = readCsv('path/to/file.csv');

// Из TSV
const dfTsv = readTsv('path/to/file.tsv');
```

### Доступ к данным

#### Выбор столбцов

```javascript
// Выбор одного столбца
const ages = df.get('age');

// Выбор нескольких столбцов
const nameAndCity = df.get(['name', 'city']);
```

#### Фильтрация данных

```javascript
// Фильтрация по условию
const adults = df.filter(row => row.age > 18);

// Фильтрация по значению в столбце
const fromNewYork = df.filter(row => row.city === 'New York');
```

### Операции с данными

#### Агрегация

```javascript
import { mean } from 'tinyframejs';

// Среднее значение по столбцу
const averageAge = mean(df.get('age'));

// Количество строк
const count = df.count();
```

#### Сортировка

```javascript
import { sort } from 'tinyframejs';

// Сортировка по столбцу
const sortedByAge = sort(df, 'age');

// Сортировка по нескольким столбцам
const sortedByMultiple = sort(df, ['city', 'age']);

// Сортировка в обратном порядке
const sortedDescending = sort(df, 'age', 'desc');
```

## Примеры использования

### Анализ данных

```javascript
// Загрузка данных
const salesData = readCsv('sales.csv');

// Фильтрация данных
const highValueSales = salesData.filter(row => row.amount > 1000);

// Группировка и агрегация
const salesByRegion = salesData.groupBy('region')
  .agg({
    'amount': 'sum',
    'id': 'count'
  });

// Сортировка результатов
const sortedSales = sort(salesByRegion, 'amount', 'desc');

// Вывод результатов
console.log(sortedSales.head());
```

### Визуализация данных

TinyFrameJS отлично работает с библиотеками визуализации, такими как Chart.js или D3.js:

```javascript
import { createFrame } from 'tinyframejs';
import Chart from 'chart.js';

// Создание данных
const df = createFrame({
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  sales: [1200, 1500, 1300, 1800, 2100]
});

// Подготовка данных для Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: df.get('month'),
    datasets: [{
      label: 'Monthly Sales',
      data: df.get('sales'),
      backgroundColor: 'rgba(54, 162, 235, 0.5)'
    }]
  }
});
```

## Лучшие практики

1. **Используйте типизированные данные**, когда это возможно, для повышения производительности.
2. **Избегайте мутации данных** - TinyFrameJS использует иммутабельный подход.
3. **Используйте цепочки методов** для более чистого и читаемого кода.
4. **Оптимизируйте операции с большими наборами данных**, используя индексацию и фильтрацию перед агрегацией.

## Дополнительные ресурсы

- [API Reference](/docs/api/README) - полная документация по API
- [GitHub Repository](https://github.com/AlphaQuantJS/tinyframejs) - исходный код и примеры
- [Issues & Ideas](https://github.com/AlphaQuantJS/tinyframejs/issues) - сообщить о проблеме или предложить идею
