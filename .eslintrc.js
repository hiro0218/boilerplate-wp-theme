const lint = {
  disable: 0,
  warning: 1,
  error: 2,
};

const indent = {
  space: 2,
}

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    "IS_DEV": true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "standard",
    "prettier",
  ],
  plugins: [
    'prettier',
  ],
  // add your custom rules here
  rules: {
    // rules
    "comma-dangle": [lint.warning, "only-multiline"],
    "no-console": lint.error,
    "no-constant-condition": lint.error,
    "no-control-regex": lint.warning,
    "no-debugger": lint.error,
    "no-dupe-args": lint.error,
    "no-dupe-keys": lint.error,
    "no-duplicate-case": lint.error,
    "no-empty-character-class": lint.warning,
    "no-empty": lint.error,
    "no-ex-assign": lint.error,
    "no-extra-boolean-cast": lint.warning,
    "no-extra-semi": lint.error,
    "no-func-assign": lint.warning,
    "no-inner-declarations": lint.error,
    "no-invalid-regexp": lint.error,
    "no-irregular-whitespace": lint.warning,
    "no-negated-in-lhs": lint.disable,
    "no-obj-calls": lint.error,
    "no-regex-spaces": lint.error,
    "no-sparse-arrays": lint.error,
    "no-unreachable": lint.error,
    "use-isnan": lint.error,
    "valid-typeof": lint.error,
    "brace-style": lint.warning,
    "comma-spacing": [lint.warning, {"before": false, "after": true}],
    "comma-style": [lint.warning, "last"],
    "no-unexpected-multiline": lint.error,
    "no-mixed-spaces-and-tabs": lint.warning,
    "no-multiple-empty-lines": [lint.warning, { "max": 2 }],
    "no-new-object": lint.error,
    "no-spaced-func": lint.warning,
    "operator-linebreak": [lint.error, "after"],
    "quotes": [lint.error, "single", { "allowTemplateLiterals": true }],
    "semi-spacing": lint.error,
    "semi": [lint.error, "always"],
    "space-infix-ops": lint.warning,
    "space-unary-ops": lint.error,
    "indent": [lint.warning, indent.space, { "SwitchCase": 1 }],
    "block-scoped-var": lint.error,
    "default-case": lint.error,
    "eqeqeq": lint.error,
    "no-caller": lint.warning,
    "no-eq-null": lint.error,
    "no-eval": lint.error,
    "no-fallthrough": lint.error,
    "no-implied-eval": lint.error,
    "no-loop-func": lint.error,
    "no-native-reassign": lint.error,
    "no-new-func": lint.error,
    "no-new-wrappers": lint.error,
    "no-new": lint.error,
    "no-octal-escape": lint.warning,
    "no-octal": lint.error,
    "no-param-reassign": lint.error,
    "no-redeclare": lint.error,
    "no-self-compare": lint.error,
    "no-throw-literal": lint.error,
    "no-void": lint.error,
    "no-with": lint.error,
    "radix": lint.error,
  },
}
