// const { getDefaultConfig } = require("metro-config");
// const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();
// exports.resolver = {
//   ...defaultResolver,
//   sourceExts: [...defaultResolver.sourceExts, "cjs"],
// };

const { getDefaultConfig } = require("metro-config");
module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  const { assetExts } = defaultConfig.resolver;
  return {
    resolver: {
      // Add bin to assetExts
      assetExts: [...assetExts, "bin"],
      sourceExts: ["jsx", "js", "ts", "tsx", "cjs"],
    },
  };
})();
