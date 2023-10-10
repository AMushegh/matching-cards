import React, { useEffect, useState } from "react";

import { bootstrap } from "@/utils/bootstrap";

import { CustomBrowserRouter } from "@/modules/global/history/CustomRouter";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "@/modules/global/auth/Login";
import { Game } from "./modules/game/components/Game";
import { ProtectedRoute } from "./ProtectedRoute";
import { AppLayout } from "./AppLayout";

const App = () => {
  const [appReady, setAppReady] = useState<boolean>(false);

  useEffect(() => {
    const boot = async () => {
      const ready = await bootstrap();
      setAppReady(ready);
    };

    boot();
  }, []);

  if (!appReady) {
    return <h1>Loading...</h1>;
  }

  return (
    <CustomBrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AppLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/game" element={<Game />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Navigate to="game" />} />
          </Route>
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </CustomBrowserRouter>
  );
};

export default App;
