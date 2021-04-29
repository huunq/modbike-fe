const plugins = [
  ["@babel/plugin-proposal-decorators", { legacy: true }],
  [
    "babel-plugin-import",
    {
      libraryName: "lodash",
      libraryDirectory: "",
      camel2DashComponentName: false, // default: true
    },
    "lodash",
  ],
];

module.exports = { plugins };
