/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started',
      },
      items: [
        'getting-started/installation',
        'getting-started/package-overview',
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'getting-started/tutorials/dataframe-basics',
            'getting-started/tutorials/io',
            'getting-started/tutorials/filtering',
            'getting-started/tutorials/plotting',
            'getting-started/tutorials/derived-columns',
            'getting-started/tutorials/statistics',
            'getting-started/tutorials/reshaping',
            'getting-started/tutorials/combining-tables',
            'getting-started/tutorials/time-series',
            'getting-started/tutorials/text-processing',
          ],
        },
        {
          type: 'category',
          label: 'Comparison with other tools',
          items: [
            'getting-started/comparison/r',
            'getting-started/comparison/sql',
            'getting-started/comparison/spreadsheets',
            'getting-started/comparison/other-js-libraries',
          ],
        },
        'getting-started/community-next-steps',
      ],
    },
  ],
};

export default sidebars;
