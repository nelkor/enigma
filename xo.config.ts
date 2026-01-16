import { type FlatXoConfig } from 'xo'
import perfectionist from 'eslint-plugin-perfectionist'

export default [
  {
    space: true,
    prettier: true,
    plugins: { perfectionist },
    rules: {
      [`@/curly`]: 2,
      'import-x/order': 0,
      '@/arrow-body-style': 2,
      'import-x/extensions': 0,
      'unicorn/no-array-reduce': 0,
      'promise/prefer-await-to-then': 0,
      'unicorn/prefer-query-selector': 0,
      '@typescript-eslint/no-unused-vars': 2,
      'perfectionist/sort-objects': [2, { order: 'asc', type: 'line-length' }],
      'perfectionist/sort-interfaces': [
        2,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-named-imports': [
        2,
        {
          order: 'asc',
          type: 'line-length',
          fallbackSort: { order: 'asc', type: 'alphabetical' },
        },
      ],
      '@/padding-line-between-statements': [
        2,
        { next: '*', blankLine: 'always', prev: ['const', 'let', 'var'] },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        { prev: '*', next: 'return', blankLine: 'always' },
      ],
      'perfectionist/sort-imports': [
        2,
        {
          order: 'asc',
          newlinesBetween: 1,
          type: 'line-length',
          tsconfig: { rootDir: '.' },
          fallbackSort: { order: 'asc', type: 'alphabetical' },
          groups: [
            ['type-builtin', 'value-builtin'],
            ['type-external', 'value-external'],
            ['tsconfig-path', 'type-internal', 'value-internal'],
            [
              'type-parent',
              'value-parent',
              'type-sibling',
              'value-sibling',
              'type-index',
              'value-index',
              'unknown',
            ],
          ],
        },
      ],
    },
  },
] satisfies FlatXoConfig
