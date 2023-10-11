import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { CustomBrowserRouter } from "./CustomRouter";
import { Login } from "@/modules/shared/auth/components/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { Game } from "@/modules/game/components/Game";
import { Layout } from "@/modules/shared/Layout";

export const AppRoutes = () => {
  return (
    <CustomBrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/game" element={<Game />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Navigate to="game" />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Route>
      </Routes>
    </CustomBrowserRouter>
  );
};
