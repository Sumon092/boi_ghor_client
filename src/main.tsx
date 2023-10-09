import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.tsx";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TooltipProvider>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </TooltipProvider>
  </React.StrictMode>
);
