module.exports = function (api) {
    api.cache(true);
  
    const presets = [
      "@babel/preset-env",
      "@babel/preset-react", // Add this preset for JSX support
      "@babel/preset-typescript"
    ];
    const plugins = [];
  
    return {
      presets,
      plugins
    };
  }
  