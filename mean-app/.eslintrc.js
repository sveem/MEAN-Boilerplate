module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    node: true,
    mocha: true
  },
  parserOptions: {
    "ecmaVersion": 2017,
  },
  rules:{
    indent: ['error', 4, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      FunctionExpression: {
        body: 1,
        parameters: 'first'
        },
        FunctionDeclaration: {
          body: 1,
          parameters: 'first'
        },
        MemberExpression: 1
      }],
      'max-len': [2, {
        code: 150,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true
      }],
      'semi': [2, "always"],
      'comma-style': [2, 'last'],
      'comma-dangle': [2, 'never'],
      'linebreak-style': 0,
      'arrow-body-style': 0,
      'array-callback-return': 0,
      'object-shorthand': 0,
      'prefer-template': 0,
      'func-style': ["error", "declaration", { "allowArrowFunctions": true }],
      'prefer-arrow-callback': 0,
      'prefer-rest-params': 0,
      'no-multi-assign': 0,
      'no-param-reassign': 0,
      'func-names': 0,
      'function-paren-newline': 0,
      'import/no-extraneous-dependencies': 0,
      'import/no-unresolved': 0,
      'object-curly-newline': 0,
      'no-plusplus': 0,
      'import/no-dynamic-require': 0,
      'no-console': 0
    }
  };