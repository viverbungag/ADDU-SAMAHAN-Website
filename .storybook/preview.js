import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";
import "../styles/globals.css";

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

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
      {
        name: "Grey",
        value: "#BABABA",
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <body>
      <Story />
    </body>
  ),
];
