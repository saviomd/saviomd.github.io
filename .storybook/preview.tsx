import type { Preview } from "@storybook/react";
import React from "react";

import "../src/App.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="text-typography-default-light dark:bg-layer-1-dark dark:text-typography-default-dark">
        {Story()}
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
