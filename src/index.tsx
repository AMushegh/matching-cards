import "reflect-metadata";
import React from "react";
import { createRoot } from "react-dom/client";

import App from "@/App";

import "@/index.css";
import { AppRoutes } from "./modules/shared/routes/components/AppRoutes";

const root = createRoot(document.getElementById("root")!);

root.render(
  <App>
    <AppRoutes />
  </App>
);
