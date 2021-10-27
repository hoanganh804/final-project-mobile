import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import AppNavigator from "./src/routes/AppNavigator";
import MainStack from "./src/routes/main/MainStack";
import LoginScreen from "./src/screens/login/LoginScreen";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
