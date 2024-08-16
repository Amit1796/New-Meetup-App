import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import {createRoot} from 'react-dom/client';
import { FavoritesContextProvider } from "./Store/favorites-context";

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);

// const container = document.getElementById('app');
// const  root = createRoot(container);
// root.render(<App/>)
