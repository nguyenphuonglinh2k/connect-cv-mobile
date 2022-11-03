import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { ToastProvider } from "react-native-toast-notifications";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { AuthStack } from "./src/navigation/StackNavigator";
import { useDispatch, useSelector } from "react-redux";
import { LoadingSpinner } from "components";
import UserActions from "reduxStore/user.redux";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    text: "#262626",
  },
};

const App = () => {
  const dispatch = useDispatch();

  const [splash, setSplash] = useState(true);

  const [isLoggedIn] = useSelector(({ authRedux }) => [authRedux.isLoggedIn]);

  const isFetching = useSelector(
    ({ authRedux, userRedux }) => authRedux.isFetching || userRedux.isFetching,
  );

  const handleGetUserInfo = useCallback(() => {
    dispatch(UserActions.getUserInfoRequest());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      handleGetUserInfo();
    }
  }, [isLoggedIn, handleGetUserInfo]);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setSplash(false);
    }, 700);

    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);

  return (
    <SafeAreaProvider>
      <ToastProvider
        swipeEnabled
        duration={2000}
        placement="top"
        animationType="slide-in"
      >
        <NavigationContainer theme={navTheme}>
          {isLoggedIn ? <DrawerNavigator /> : <AuthStack />}

          <LoadingSpinner isVisible={isFetching} />
        </NavigationContainer>
      </ToastProvider>
    </SafeAreaProvider>
  );
};

export default App;
