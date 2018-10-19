const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.stories\.js$/,
    loaders: [
      {
        loader: require.resolve("@storybook/addon-storysource/loader")
      }
    ],
    enforce: "pre"
  });
  return defaultConfig;
};
