import type { Preview } from "@storybook/react-vite";

import "../app/app.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="text-typography-default-light dark:bg-layer-1-dark dark:text-typography-default-dark">
        {Story()}
      </div>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
