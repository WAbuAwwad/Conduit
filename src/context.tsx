import * as React from "react";

const userContext = React.createContext({
  isLoggedIn: false,
  username: ""
});

export const Provider = userContext.Provider;
export const Consumer = userContext.Consumer;
