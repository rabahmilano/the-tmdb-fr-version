import React from "react";
import ReactDOM from "react-dom";

import WebFont from "webfontloader";

import App from "./App";
import { AppProvider } from "./context";

WebFont.load({
  google: {
    families: ["Montserrat: 400, 500, 700", "Roboto Mono: 300"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
