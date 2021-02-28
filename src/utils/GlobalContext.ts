import React from "react";

export const GlobalContext = React.createContext({
  isBackdropOpen: false,
  onToggleBackdrop: (_value: boolean) => {},
});
