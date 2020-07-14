const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: "apw-demo",
    projectName: "navbar",
    webpackConfigEnv
  });

  return webpackMerge.smart(defaultConfig, {
    // customizations can go here
  });
};
