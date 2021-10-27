import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useSelector } from "react-redux";
import LoginScreen from "../screens/login/LoginScreen";
import MainStack from "./main/MainStack";
import MainNavigator from "./main/MainTab";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  const authStatus = useSelector((state) => state.auth.isLogin);

  return (
    <NavigationContainer>
      {authStatus ? <MainStack /> : <LoginScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
