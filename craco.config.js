const BabelRcPlugin = require("@jackwilsdon/craco-use-babelrc");

module.exports = {
  plugins: [{ plugin: BabelRcPlugin }],
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
