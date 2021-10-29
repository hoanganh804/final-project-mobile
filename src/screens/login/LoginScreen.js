import * as Facebook from "expo-facebook";
import React from "react";
import {
  Alert,
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import firebase, { db } from "../../firebase/config";
import { addDocument } from "../../firebase/services";

const LoginScreen = () => {
  const loginWithPassword = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const { displayName, email, photoURL } = userCredential.user;
        const { isNewUser } = userCredential.additionalUserInfo;
        const dataUser = {
          displayName: displayName,
          avatar_url: photoURL,
          email: email,
        };
        if (isNewUser) {
          addDocument("users", dataUser);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("login with email fail", errorMessage);
      });
  };

  const loginFaceBook = async () => {
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
            const { displayName, email, photoURL } = user.user;
            const { isNewUser } = user.additionalUserInfo;
            const dataUser = {
              displayName: displayName,
              avatar_url: photoURL,
              email: email,
            };

            if (isNewUser) {
              addDocument("users", dataUser);
            }
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
  };

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Text style={{ color: "white" }}>this is login screen</Text>
      <Button
        title="Login"
        onPress={() => loginWithPassword("anhhk101@gmail.com", "123456")}
      />
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
