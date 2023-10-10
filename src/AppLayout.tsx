import React from "react";
import { Outlet } from "react-router-dom";

type PropsType = {
  children?: React.ReactNode;
};

export const AppLayout = ({ children }: PropsType) => {
  return (
    <div>
      <div>Navigation</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
