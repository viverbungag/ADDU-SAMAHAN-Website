module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/Atoms/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/Molecules/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/Organisms/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/Template/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/Pages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
