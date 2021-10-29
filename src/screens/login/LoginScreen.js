import * as Facebook from "expo-facebook";
import React from "react";
import {
  Alert,
  Button,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
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
      <View style={styles.wrapicon}>
        <Image style={styles.icon} source={require('../../res/images/loginicon.png')}/>
      </View>
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder={"UserName"}
          placeholderTextColor="white"
          ></TextInput>
        <TextInput 
          style={styles.input} 
          placeholder={"PassWord"}
          placeholderTextColor="white"
          ></TextInput>
        <Button
          title="Login"
          onPress={() => loginWithPassword("anhhk101@gmail.com", "123456")}
        />
        <Button title="Login Facebook" onPress={() => loginFaceBook()} />
      </View>
      
      
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  form:{
    margin:20,
  },
  input:{
    borderRadius:5,
    color:'white',
    borderColor:'white',
    borderWidth:1,
    height:40,
    fontSize:15,
    marginBottom: 14,
    paddingLeft:13,
  },
  icon:{
    width:300,
    height:300,
  },
  wrapicon:{
    flexDirection: "row",
    height:300,
    justifyContent: "center",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
