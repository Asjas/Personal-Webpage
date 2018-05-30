module.exports = {
  "extends": [
    "airbnb-base",
    "prettier",
    "prettier/react",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
    "no-unused-vars": [
      1,
      {
        "argsIgnorePattern": "res|next|^err"
      }
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "no-param-reassign": [
      2,
    ],
    "no-console": 0,
    "import/prefer-default-export": 0,
    "react/jsx-max-props-per-line": [0],
    "import": 0,
    "no-plusplus": ["error", {
      "allowForLoopAfterthoughts": true
    }],
    "class-methods-use-this": ["error", {
      "exceptMethods": ["render"]
    }],
    "func-names": 0,
    "space-before-function-paren": 0,
    "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "never",
        "functions": "ignore"
    }],
    "max-len": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "radix": 0,
    "no-shadow": [
      2,
      {
        "hoist": "all",
        "allow": [
          "resolve",
          "reject",
          "done",
          "next",
          "err",
          "error"
        ]
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "singleQuote": true,
        "printWidth": 80,
      }
    ],
  },
  "plugins": [
    "prettier",
    "react"
  ]
}
