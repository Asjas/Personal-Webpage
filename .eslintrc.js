const { eslintReactTS } = require('eslint-config-asjas')

module.exports = {
  ...eslintReactTS,
  parserOptions: {
    project: 'app/tsconfig.json'
  }
}
