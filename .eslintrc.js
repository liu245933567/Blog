module.exports = {
  env: {
    browser: true,
    es2020: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb-typescript-prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    // 'import',
    'react',
    'react-hooks',
    'prettier'
  ],

  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
    "import/resolver": {
      "node": {
        "paths": ["./"]
      }
    }
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    // 引号
    quotes: [1, 'single'],
    // 分号结尾
    semi: ['error', 'always'],
    'no-mixed-spaces-and-tabs': [0],
    // 一行结束后面不要有空格
    'no-trailing-spaces': 1,
    'no-plusplus': 0,
    // 强制驼峰法命名
    camelcase: 0,
    'class-methods-use-this': 0,
    'no-unused-vars': 'off',
    'react/require-default-props': 0,    // 对象字面量项尾不能有逗号
    'comma-dangle': [2, 'never'],
    // this别名
    'consistent-this': [2, 'that'],
    'import/prefer-default-export': 0,
    "import/extensions": 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 0,

    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0
  }
};
