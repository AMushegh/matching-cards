import React, { useEffect, useState } from "react";

import { bootstrap } from "@/utils/bootstrap";

import { Game } from "@/modules/game/components/Game";
import { CustomBrowserRouter } from "@/modules/global/history/CustomRouter";
import { Route, Routes } from "react-router-dom";
import Test from "./Test";

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
        <Route path="/" element={<Game />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </CustomBrowserRouter>
  );
};

export default App;
