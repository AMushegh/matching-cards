import React from "react";
import { useController } from "@hooks/useController";
import { InjectionToken } from "./constants/injectionToken";

export const Test = () => {
  const { buttonClicked } = useController<IController>(
    InjectionToken.IController
  );

  return <button onClick={buttonClicked}>Test</button>;
};
