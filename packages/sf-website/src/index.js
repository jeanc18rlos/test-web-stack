import React from "react";

import { ThemeProvider } from "sf-ui-kit";

const wrapWithProvider = ({ element }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{element}</ThemeProvider>
    </Provider>
  );
};
export default wrapWithProvider;
