import type { Preview } from "@storybook/react-vite";

import "../app/app.css";
import { bodyClassName } from "../app/root";

const preview: Preview = {
  decorators: [(Story) => <div className={bodyClassName}>{Story()}</div>],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },

  tags: ["autodocs"],
};

export default preview;
