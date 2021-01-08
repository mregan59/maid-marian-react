import React from "react";
import { StylesProvider } from "@material-ui/styles";
import { addDecorator, configure } from '@storybook/react';

const StylesDecorator = storyFn => (
  <StylesProvider injectFirst>
    {storyFn()}
  </StylesProvider>
);

addDecorator(StylesDecorator);
// automatically import all files ending in *.stories.js
configure(require.context('../src/components/', true, /\.stories\.js$/), module);