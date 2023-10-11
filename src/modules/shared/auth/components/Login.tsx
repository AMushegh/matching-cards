import React, { FormEvent } from "react";

import { InjectionToken } from "@/constants/injection-token";
import { useController } from "@/utils/hooks/useController";

import "./Login.css";

export const Login = () => {
  const { loginSumbitted } = useController<IAuthController>(
    InjectionToken.IAuthController
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginSumbitted();
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" />
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
