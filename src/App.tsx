import React, { useEffect, useState } from "react";

import { bootstrap } from "@/utils/bootstrap";

import { Game } from "@/modules/game/components/Game";

const App = () => {
  const [appReady, setAppReady] = useState<boolean>(false);

  useEffect(() => {
    bootstrap()
      .then(() => setAppReady(true))
      .catch(() => console.log("should handle laction change"));
  }, []);

  if (!appReady) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Game />
    </div>
  );
};

export default App;
