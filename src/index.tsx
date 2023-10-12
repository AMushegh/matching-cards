import "reflect-metadata";
import React from "react";
import { createRoot } from "react-dom/client";

import { AppRoutes } from "@routes/AppRoutes";
import App from "@/App";

import "@/index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <App>
    <AppRoutes />
  </App>
);
