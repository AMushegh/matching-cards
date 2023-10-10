import { InjectionToken } from "@/constants/injection-token";
import { useController } from "@/utils/hooks/useController";
import React from "react";

export const Login = () => {
  const { loginClicked } = useController<IAuthController>(
    InjectionToken.IAuthController
  );

  return (
    <div>
      <input type="text" />
      <input type="password" />
      <button onClick={loginClicked}>Login</button>
    </div>
  );
};
