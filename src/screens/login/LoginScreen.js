import React from "react";
import { Alert, Button, SafeAreaView, Text } from "react-native";
import { useDispatch } from "react-redux";
import { loginAction } from "../../slices/authSilce";
import * as Facebook from "expo-facebook";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const login = () => {
    const action = loginAction();
    dispatch(action);
  };

  async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: "171413448445007",
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile"],
        });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${token}`
        );
        login();
        console.log(await response.json());
      } else {
        // type === 'cancel'
        Alert.alert("Login Fail");
      }
    } catch ({ message }) {
      Alert.alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <SafeAreaView>
      <Text>this is login screen</Text>
      <Button title="Login" onPress={() => logIn()} />
    </SafeAreaView>
  );
};

export default LoginScreen;
