const config = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
        "extensions": [
          ".tsx",
          ".ts",
          ".js",
          ".json"
        ],
        "alias": {
          "@screens": "./src/screens",
          "@router": "./src/router",
          "@utils": "./src/utils",
          "@api": "./src/api",
          "@constants": "./src/constants",
          "@hooks": "./src/hooks",
          "@store": "./src/store",
          "@assets": "./src/assets",
          "@components": "./src/components",
        }
      }
    ] 
  ],
};

module.exports = (api) => {
  api.cache(true);
  return config;
};
