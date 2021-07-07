import React from "react";
import { RouterContext } from "./RouterContext";

export const Router = ({ children }) => {
  const [location, setLocation] = React.useState(window.location.pathname);
  const handlePush = React.useCallback((newLocation) => {
    window.history.pushState({}, "", newLocation);
    setLocation(newLocation);
  }, []);

  const handleHashChange = React.useCallback(() => {
    setLocation(window.location.pathname);
  }, []);

  React.useEffect(() => {
    window.addEventListener("popstate", handleHashChange);
    return () => {
      window.removeEventListener("popstate", handleHashChange);
    };
  }, [handleHashChange]);
  const value = React.useMemo(() => {
    return { location, push: handlePush };
  }, [location, handlePush]);
  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
};
