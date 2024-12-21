import type { Preview } from "@storybook/react";
import React from "react";
import "../../../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        method: "alphabetical", // Simplificado para un orden alfabético directo
      },
    },
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "rgb(239 239 239)",
        }}
      >
        <div>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default preview;
