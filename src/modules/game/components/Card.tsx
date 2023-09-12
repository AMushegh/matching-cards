import React from "react";

import { useController } from "@/utils/hooks/useController";
import { InjectionToken } from "@/constants/injectionToken";

type PropsType = {
  id: number;
  title: string;
};

export const Card = ({ id, title }: PropsType) => {
  const {} = useController<IGameController>(InjectionToken.IGameController);

  return <div>{title}</div>;
};