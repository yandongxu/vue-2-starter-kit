/**
 * @type {import('stylelint').Config}
 */
module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  rules: {
    // Deprecated
    'function-whitespace-after': null,
    'media-feature-range-operator-space-after': null,
    'media-feature-range-operator-space-before': null,
  },
};
