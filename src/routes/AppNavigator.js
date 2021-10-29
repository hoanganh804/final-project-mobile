import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoginScreen from "../screens/login/LoginScreen";
import MainStack from "./main/MainStack";
import firebase, { db } from "../firebase/config";
import { useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../slices/authSilce";

const AppNavigator = () => {
  const currentId = useSelector((state) => state.auth.currentId);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscired = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid } = user;
        dispatch(loginAction(uid));
      } else {
        dispatch(logoutAction(null));
      }
    });
    return () => unsubscired();
  }, []);

  // useEffect(() => {
  //   const unsubscribe = db.collection("users").onSnapshot((snapshot) => {
  //     const documents = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     console.log(documents);
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <NavigationContainer>
      {currentId ? <MainStack /> : <LoginScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
