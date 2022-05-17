export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "White",
    values: [
      {
        name: "ADDU Blue",
        value: "#2D419D",
      },
      {
        name: "White",
        value: "#FFFFFF",
      },
    ],
  },
};
