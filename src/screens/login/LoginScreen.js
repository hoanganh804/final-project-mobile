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
  TouchableOpacity,
} from "react-native";
import firebase, { db } from "../../firebase/config";
import { addDocument } from "../../firebase/services";
import { AntDesign } from '@expo/vector-icons'; 

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
          placeholderTextColor="grey"
          ></TextInput>
        <TextInput 
          style={styles.input} 
          placeholder={"PassWord"}
          placeholderTextColor="grey"
          ></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => loginWithPassword("anhhk101@gmail.com", "123456")}
        >
          <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.forgot}>
          <Text style={styles.forgotthin}>If you don't have account?</Text>
          <Text style={styles.forgotbold}> Register</Text>
          <Text style={styles.forgotthin}> now.</Text>
        </View>
        <View style={styles.wrapor}>
          <View style={styles.line}></View>
          <Text style={styles.or}>OR</Text>
          <View style={styles.line}></View>
        </View>
        <TouchableOpacity 
          style={styles.buttonface}
          onPress={() => loginFaceBook()}>
            <AntDesign name="facebook-square" size={24} color="white" />
            <Text style={styles.textface}>Login in with Facebook</Text>
        </TouchableOpacity>
      </View>
      
      
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textface:{
    color: "white",
    marginLeft:10,
    fontWeight:'bold',
    fontSize:15,
  },
  buttonface:{
    height:40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  forgot:{
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  forgotthin:{
    color: "white",
  },
  forgotbold:{
    color: "white",
    fontWeight: "bold",
  },
  or:{
    color: "white",
    position:'relative',
    top:9,
  },
  line:{
    borderBottomWidth:1,
    flex:1,
    borderColor:'rgba(246, 242, 242, 0.18)',
    marginLeft:10,
    marginRight:10,
    opacity:0.5,
  },
  wrapor:{
    flexDirection: "row",
    justifyContent: "center",
    marginBottom:20,
  },
  text:{
    fontSize:15,
    color: "white",
    fontWeight:'bold',
  },
  form:{
    margin:20,
  },
  button:{
    backgroundColor: 'rgba(246, 242, 242, 0.18)',
    height:40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:5,
    marginBottom: 20,
  },
  input:{
    borderRadius:5,
    color:'black',
    height:40,
    fontSize:15,
    marginBottom: 20,
    paddingLeft:13,
    backgroundColor:'rgba(246, 242, 242, 0.18)',
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
