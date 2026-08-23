import { fileURLToPath } from 'node:url';

/** @type {import('stylelint').Config} */
const config = {
  extends: [
    fileURLToPath(import.meta.resolve('stylelint-config-standard')),
    fileURLToPath(import.meta.resolve('stylelint-config-clean-order')),
  ],
  rules: {
    'import-notation': null,
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['theme', 'source', 'utility', 'variant', 'custom-variant', 'plugin'] },
    ],
    'at-rule-no-deprecated': [true, { ignoreAtRules: ['apply'] }],
    'function-no-unknown': [true, { ignoreFunctions: ['theme'] }],
    'no-invalid-position-declaration': null,
    'nesting-selector-no-missing-scoping-root': [
      true,
      { ignoreAtRules: ['utility', 'variant', 'custom-variant'] },
    ],
  },
};

export default config;
