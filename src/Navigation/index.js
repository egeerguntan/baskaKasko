import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreenNavigator from "./HomeScreenNavigatior";
import AccountNavigator from "./AccountNavigator";

import { AuthenticationContext } from "../Authentication/Authentication.context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeScreenNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
