import * as React from "react";

const userContext = React.createContext({
  isLoggedIn: false,
  username: ""
});

export const UserProvider = userContext.Provider;
export const UserConsumer = userContext.Consumer;
