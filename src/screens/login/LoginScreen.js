import React, { useEffect } from "react";
import { Alert, Button, SafeAreaView, Text } from "react-native";
import { useDispatch } from "react-redux";
import { loginAction } from "../../slices/authSilce";
import * as Facebook from "expo-facebook";
import firebase from "../../firebase/firebase";
import { StyleSheet, Platform, StatusBar } from "react-native";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const login = () => {
    const action = loginAction();
    dispatch(action);
  };

  async function loginFaceBook() {
    try {
      await Facebook.initializeAsync({
        appId: "171413448445007",
      });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((user) => {
            // All the details about user are in here returned from firebase
            console.log("Logged in successfully", user);
          })
          .catch((error) => {
            console.log("Error occurred ", error);
          });
      } else {
        // type === 'cancel'
        Alert.alert("Login Fail");
      }
    } catch ({ message }) {
      Alert.alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Text style={{ color: "white" }}>this is login screen</Text>
      <Button title="Login" onPress={() => login()} />
      <Button title="Login Facebook" onPress={() => loginFaceBook()} />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
