// @ts-check

// The category labels are Korean and are the ko source of truth. The en and
// ja labels live in i18n/<locale>/docusaurus-plugin-content-docs/current.json
// once those translations exist.

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: '시작하기',
      collapsed: false,
      items: ['getting-started/installation', 'getting-started/entry-points'],
    },
    {
      type: 'category',
      label: '칠하기와 레이어',
      collapsed: false,
      items: ['guides/painting', 'guides/layers'],
    },
    {
      type: 'category',
      label: '선택과 변형',
      collapsed: false,
      items: [
        'guides/selection',
        'guides/fill-gradient-shape',
        'guides/transform-text',
      ],
    },
    {
      type: 'category',
      label: '3D 작업',
      collapsed: false,
      items: ['guides/3d'],
    },
    {
      type: 'category',
      label: '캔버스와 파일',
      collapsed: false,
      items: [
        'guides/canvas-2d',
        'guides/psd',
        'guides/import',
        'guides/save-recover',
      ],
    },
    {
      type: 'category',
      label: '참조',
      items: ['reference/settings', 'reference/shortcuts', 'reference/subtools'],
    },
    'troubleshooting',
    'faq',
    'changelog/0.1.0',
  ],
};

export default sidebars;
