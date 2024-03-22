/** @type {import("prettier").Options} */
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  organizeImportsSkipDestructiveCodeActions: true,
  plugins: [require.resolve("prettier-plugin-organize-imports")],
};
