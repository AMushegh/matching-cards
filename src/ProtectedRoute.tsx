import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { identify } from "@helpers";
import { useAuthStore } from "@/modules/global/auth/useAuthStore";

export const ProtectedRoute = () => {
  const { isLoggedIn } = useAuthStore<IAuthStore>(identify);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
