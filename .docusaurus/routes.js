import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '230'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'bec'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '574'),
            routes: [
              {
                path: '/docs/api/',
                component: ComponentCreator('/docs/api/', '8b5'),
                exact: true
              },
              {
                path: '/docs/api/classes/DataFrame',
                component: ComponentCreator('/docs/api/classes/DataFrame', '03c'),
                exact: true
              },
              {
                path: '/docs/api/functions/apiToFrame',
                component: ComponentCreator('/docs/api/functions/apiToFrame', 'fca'),
                exact: true
              },
              {
                path: '/docs/api/functions/arrayToFrame',
                component: ComponentCreator('/docs/api/functions/arrayToFrame', '72a'),
                exact: true
              },
              {
                path: '/docs/api/functions/cloneFrame',
                component: ComponentCreator('/docs/api/functions/cloneFrame', 'e87'),
                exact: true
              },
              {
                path: '/docs/api/functions/count',
                component: ComponentCreator('/docs/api/functions/count', '264'),
                exact: true
              },
              {
                path: '/docs/api/functions/createFrame',
                component: ComponentCreator('/docs/api/functions/createFrame', '5c1'),
                exact: true
              },
              {
                path: '/docs/api/functions/first',
                component: ComponentCreator('/docs/api/functions/first', 'e2c'),
                exact: true
              },
              {
                path: '/docs/api/functions/jsonToFrame',
                component: ComponentCreator('/docs/api/functions/jsonToFrame', '43c'),
                exact: true
              },
              {
                path: '/docs/api/functions/mean',
                component: ComponentCreator('/docs/api/functions/mean', 'f71'),
                exact: true
              },
              {
                path: '/docs/api/functions/readCsv',
                component: ComponentCreator('/docs/api/functions/readCsv', '224'),
                exact: true
              },
              {
                path: '/docs/api/functions/readExcel',
                component: ComponentCreator('/docs/api/functions/readExcel', '547'),
                exact: true
              },
              {
                path: '/docs/api/functions/readJson',
                component: ComponentCreator('/docs/api/functions/readJson', '718'),
                exact: true
              },
              {
                path: '/docs/api/functions/readSql',
                component: ComponentCreator('/docs/api/functions/readSql', '7b2'),
                exact: true
              },
              {
                path: '/docs/api/functions/readTsv',
                component: ComponentCreator('/docs/api/functions/readTsv', '9f1'),
                exact: true
              },
              {
                path: '/docs/api/functions/sort',
                component: ComponentCreator('/docs/api/functions/sort', '05b'),
                exact: true
              },
              {
                path: '/docs/api/functions/validateColumn',
                component: ComponentCreator('/docs/api/functions/validateColumn', 'daa'),
                exact: true
              },
              {
                path: '/docs/api/functions/validateColumnLengths',
                component: ComponentCreator('/docs/api/functions/validateColumnLengths', '2e5'),
                exact: true
              },
              {
                path: '/docs/api/functions/validateColumnNames',
                component: ComponentCreator('/docs/api/functions/validateColumnNames', 'ada'),
                exact: true
              },
              {
                path: '/docs/api/functions/validateDType',
                component: ComponentCreator('/docs/api/functions/validateDType', '17e'),
                exact: true
              },
              {
                path: '/docs/api/functions/validateInputData',
                component: ComponentCreator('/docs/api/functions/validateInputData', '7dd'),
                exact: true
              },
              {
                path: '/docs/api/functions/validateNumericArray',
                component: ComponentCreator('/docs/api/functions/validateNumericArray', 'c08'),
                exact: true
              },
              {
                path: '/docs/api/functions/validateOptions',
                component: ComponentCreator('/docs/api/functions/validateOptions', 'd06'),
                exact: true
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '565'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/community-next-steps',
                component: ComponentCreator('/docs/getting-started/community-next-steps', 'ea5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/comparison/other-js-libraries',
                component: ComponentCreator('/docs/getting-started/comparison/other-js-libraries', 'e80'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/comparison/r',
                component: ComponentCreator('/docs/getting-started/comparison/r', 'ba3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/comparison/spreadsheets',
                component: ComponentCreator('/docs/getting-started/comparison/spreadsheets', '5eb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/comparison/sql',
                component: ComponentCreator('/docs/getting-started/comparison/sql', 'c5e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/installation',
                component: ComponentCreator('/docs/getting-started/installation', '71d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/package-overview',
                component: ComponentCreator('/docs/getting-started/package-overview', 'b64'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/tutorials/combining-tables',
                component: ComponentCreator('/docs/getting-started/tutorials/combining-tables', '341'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/tutorials/dataframe-basics',
                component: ComponentCreator('/docs/getting-started/tutorials/dataframe-basics', 'd43'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/tutorials/derived-columns',
                component: ComponentCreator('/docs/getting-started/tutorials/derived-columns', 'd07'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/tutorials/filtering',
                component: ComponentCreator('/docs/getting-started/tutorials/filtering', 'f8d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/tutorials/io',
                component: ComponentCreator('/docs/getting-started/tutorials/io', '1d8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/tutorials/plotting',
                component: ComponentCreator('/docs/getting-started/tutorials/plotting', '5ce'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/tutorials/reshaping',
                component: ComponentCreator('/docs/getting-started/tutorials/reshaping', 'afd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/tutorials/statistics',
                component: ComponentCreator('/docs/getting-started/tutorials/statistics', 'c7a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/tutorials/text-processing',
                component: ComponentCreator('/docs/getting-started/tutorials/text-processing', '3ed'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/tutorials/time-series',
                component: ComponentCreator('/docs/getting-started/tutorials/time-series', 'c45'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '853'),
                exact: true
              },
              {
                path: '/docs/release-notes',
                component: ComponentCreator('/docs/release-notes', 'f7c'),
                exact: true
              },
              {
                path: '/docs/user-guide',
                component: ComponentCreator('/docs/user-guide', '9fe'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
