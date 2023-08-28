import React, { useEffect, useState } from "react";

import { bootstrap } from "@/utils/bootstrap";

import { Game } from "@/modules/game/components/Game";

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
    <div>
      <Game />
    </div>
  );
};

export default App;
