import React, { useEffect, useState } from "react";
import { useController } from "@hooks/useController";
import { InjectionToken } from "./constants/injection-token";

type PropsType = {
  children: React.ReactNode;
};

const App = ({ children }: PropsType) => {
  const [isAuthChecked, setIsAuthChecked] = useState<boolean>(false);
  const { appReady } = useController<IAuthController>(
    InjectionToken.IAuthController
  );

  useEffect(() => {
    appReady();
    setIsAuthChecked(true);
  }, []);

  if (!isAuthChecked) {
    return <h1>Loading...</h1>;
  }

  return children;
};

export default App;
