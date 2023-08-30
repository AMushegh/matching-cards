import { Router } from "react-router-dom";
import React, { useRef, useState, useLayoutEffect } from "react";
import { BrowserHistory } from "history";

import { history as customHistory } from "@history";

export function CustomBrowserRouter({
  children,
}: {
  children: React.ReactNode;
}) {
  const historyRef = useRef<BrowserHistory>();
  if (historyRef.current == null) {
    historyRef.current = customHistory;
  }
  const history = historyRef.current;
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
}
