const path = require("path");

const appDirectory = path.resolve(__dirname, '../../../');

module.exports = {
  "stories": [
    `${appDirectory}/packages/**/*.stories.@(js|jsx|ts|tsx)`
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: {
              loadPaths: [appDirectory],
            },
          },
        },
      ],
      include: [appDirectory],
    });

    return config;
  }
}