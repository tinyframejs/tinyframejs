import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tinyframejs/markdown-page',
    component: ComponentCreator('/tinyframejs/markdown-page', 'afd'),
    exact: true
  },
  {
    path: '/tinyframejs/docs',
    component: ComponentCreator('/tinyframejs/docs', '0b2'),
    routes: [
      {
        path: '/tinyframejs/docs',
        component: ComponentCreator('/tinyframejs/docs', '206'),
        routes: [
          {
            path: '/tinyframejs/docs',
            component: ComponentCreator('/tinyframejs/docs', 'f13'),
            routes: [
              {
                path: '/tinyframejs/docs/api/',
                component: ComponentCreator('/tinyframejs/docs/api/', '006'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/classes/DataFrame',
                component: ComponentCreator('/tinyframejs/docs/api/classes/DataFrame', 'c5c'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/apiToFrame',
                component: ComponentCreator('/tinyframejs/docs/api/functions/apiToFrame', '9e1'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/arrayToFrame',
                component: ComponentCreator('/tinyframejs/docs/api/functions/arrayToFrame', '1bd'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/cloneFrame',
                component: ComponentCreator('/tinyframejs/docs/api/functions/cloneFrame', '033'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/count',
                component: ComponentCreator('/tinyframejs/docs/api/functions/count', '742'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/createFrame',
                component: ComponentCreator('/tinyframejs/docs/api/functions/createFrame', 'b3e'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/first',
                component: ComponentCreator('/tinyframejs/docs/api/functions/first', 'fe3'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/jsonToFrame',
                component: ComponentCreator('/tinyframejs/docs/api/functions/jsonToFrame', '210'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/mean',
                component: ComponentCreator('/tinyframejs/docs/api/functions/mean', '346'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/readCsv',
                component: ComponentCreator('/tinyframejs/docs/api/functions/readCsv', '75b'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/readExcel',
                component: ComponentCreator('/tinyframejs/docs/api/functions/readExcel', 'bc8'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/readJson',
                component: ComponentCreator('/tinyframejs/docs/api/functions/readJson', 'c2e'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/readSql',
                component: ComponentCreator('/tinyframejs/docs/api/functions/readSql', '3b5'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/readTsv',
                component: ComponentCreator('/tinyframejs/docs/api/functions/readTsv', '136'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/sort',
                component: ComponentCreator('/tinyframejs/docs/api/functions/sort', '913'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/validateColumn',
                component: ComponentCreator('/tinyframejs/docs/api/functions/validateColumn', '2d4'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/validateColumnLengths',
                component: ComponentCreator('/tinyframejs/docs/api/functions/validateColumnLengths', 'bc7'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/validateColumnNames',
                component: ComponentCreator('/tinyframejs/docs/api/functions/validateColumnNames', '3ae'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/validateDType',
                component: ComponentCreator('/tinyframejs/docs/api/functions/validateDType', 'd0c'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/validateInputData',
                component: ComponentCreator('/tinyframejs/docs/api/functions/validateInputData', 'e21'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/validateNumericArray',
                component: ComponentCreator('/tinyframejs/docs/api/functions/validateNumericArray', '65f'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/api/functions/validateOptions',
                component: ComponentCreator('/tinyframejs/docs/api/functions/validateOptions', 'c1b'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/getting-started',
                component: ComponentCreator('/tinyframejs/docs/getting-started', '3d2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/community-next-steps',
                component: ComponentCreator('/tinyframejs/docs/getting-started/community-next-steps', '8a1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/comparison/other-js-libraries',
                component: ComponentCreator('/tinyframejs/docs/getting-started/comparison/other-js-libraries', '5dd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/comparison/r',
                component: ComponentCreator('/tinyframejs/docs/getting-started/comparison/r', '368'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/comparison/spreadsheets',
                component: ComponentCreator('/tinyframejs/docs/getting-started/comparison/spreadsheets', '59d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/comparison/sql',
                component: ComponentCreator('/tinyframejs/docs/getting-started/comparison/sql', 'a8a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/installation',
                component: ComponentCreator('/tinyframejs/docs/getting-started/installation', 'b83'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/package-overview',
                component: ComponentCreator('/tinyframejs/docs/getting-started/package-overview', 'dba'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/tutorials/combining-tables',
                component: ComponentCreator('/tinyframejs/docs/getting-started/tutorials/combining-tables', '57f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/tutorials/dataframe-basics',
                component: ComponentCreator('/tinyframejs/docs/getting-started/tutorials/dataframe-basics', '63e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/tutorials/derived-columns',
                component: ComponentCreator('/tinyframejs/docs/getting-started/tutorials/derived-columns', 'bf3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/tutorials/filtering',
                component: ComponentCreator('/tinyframejs/docs/getting-started/tutorials/filtering', 'bef'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/tutorials/io',
                component: ComponentCreator('/tinyframejs/docs/getting-started/tutorials/io', '0aa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/tutorials/plotting',
                component: ComponentCreator('/tinyframejs/docs/getting-started/tutorials/plotting', '7be'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/tutorials/reshaping',
                component: ComponentCreator('/tinyframejs/docs/getting-started/tutorials/reshaping', 'a9f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/tutorials/statistics',
                component: ComponentCreator('/tinyframejs/docs/getting-started/tutorials/statistics', '6c7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/tutorials/text-processing',
                component: ComponentCreator('/tinyframejs/docs/getting-started/tutorials/text-processing', '37a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/getting-started/tutorials/time-series',
                component: ComponentCreator('/tinyframejs/docs/getting-started/tutorials/time-series', '0af'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tinyframejs/docs/intro',
                component: ComponentCreator('/tinyframejs/docs/intro', 'c89'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/release-notes',
                component: ComponentCreator('/tinyframejs/docs/release-notes', '25c'),
                exact: true
              },
              {
                path: '/tinyframejs/docs/user-guide',
                component: ComponentCreator('/tinyframejs/docs/user-guide', '2b7'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/tinyframejs/',
    component: ComponentCreator('/tinyframejs/', '130'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
