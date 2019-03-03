import * as React from "react";

const context = React.createContext({
  isLoggedIn: false,
  username: ""
});

export const Provider = context.Provider;
export const Consumer = context.Consumer;
