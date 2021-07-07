import React from "react";
import { RouterContext } from "./RouterContext";
import { matchRoutes } from "./utils";

const RouteContext = React.createContext({
  params: {},
});

export const Routes = ({ children }) => {
  const { location } = React.useContext(RouterContext);
  console.log(children, '----');
  const match = React.useMemo(
    () => matchRoutes(children, location),
    [children, location]
  );
  const value = React.useMemo(() => {
    return { params: match.params };
  }, [match]);

  if (!match) {
    return null;
  }
  return (
    <RouteContext.Provider value={value}>{match.route}</RouteContext.Provider>
  );
};

export const useParams = () => {
    return React.useContext(RouteContext).params;
}

