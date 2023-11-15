module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@/assets": "./src/assets",
            "@/components": "./src/components",
            '@/features': './src/features',
            '@/configs': './src/configs',
            '@/services': './src/services',
            // '@/hooks': './src/hooks',
            "@/screens": "./src/screens",
            // '@/locales': './src/locales',
            '@/utils': './src/utils',
            "@/app": "./src/app",
            // '@/fake': './src/fake',
            // '@/hocs': './src/hocs',
            // '@/containers': './src/containers',
          },
          extensions: [".ts", ".tsx"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
