import React from "react";

import { useController } from "@/utils/hooks/useController";
import { InjectionToken } from "@/constants/injection-token";

type PropsType = {
  id: number;
  title: string;
};

export const Card = ({ id, title }: PropsType) => {
  const { cardClicked } = useController<IGameController>(
    InjectionToken.IGameController
  );

  return <div onClick={() => cardClicked(id)}>{title}</div>;
};
