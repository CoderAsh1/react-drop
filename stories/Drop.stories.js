import Drop from '../src/components/Drop';

export default {
  title: 'Example/Drop',
  component: Drop,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {
    name: 'Image',
    type :"image"
  },
};

export const LoggedOut = {};
