import React from "react";

import { InjectionToken } from "@/constants/injection-token";
import { useController } from "@/utils/hooks/useController";

import "./Login.css";

export const Login = () => {
  const { loginClicked } = useController<IAuthController>(
    InjectionToken.IAuthController
  );

  return (
    <div className="login-container">
      <form className="login-form">
        <input type="text" />
        <input type="password" />
        <button onClick={loginClicked}>Login</button>
      </form>
    </div>
  );
};
