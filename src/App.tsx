import React, { useEffect, useState } from "react";

import { bootstrap } from "@/utils/bootstrap";

type PropsType = {
  children: React.ReactNode;
};

const App = ({ children }: PropsType) => {
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

  return children;
};

export default App;
