import "reflect-metadata";
import React from "react";
import { createRoot } from "react-dom/client";

import App from "@/App";

import "@/index.css";
import { AppRoutes } from "./modules/shared/routes/components/AppRoutes";
import { injectDeps } from "./utils/bootstrap";

injectDeps();

const root = createRoot(document.getElementById("root")!);

root.render(
  <App>
    <AppRoutes />
  </App>
);
