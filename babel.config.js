module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-typescript","@babel/env"];
  const plugins = [];

  return {
    presets,
    plugins
  };
}