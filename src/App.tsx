import React, { useEffect, useState } from "react";

import { Test } from "@/Test";
import { bootstrap } from "@/utils/bootstrap";

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
      <Test />
    </div>
  );
};

export default App;
