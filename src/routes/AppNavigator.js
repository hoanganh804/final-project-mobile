import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import LoginScreen from "../screens/login/LoginScreen";
import MainStack from "./main/MainStack";
import firebase, { db } from "../firebase/config";
import { useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../slices/authSilce";
import { loadUsers } from "../slices/userSlice";
import { loadPosts } from "../slices/postSlice";

const AppNavigator = () => {
  const currentId = useSelector((state) => state.auth.currentId);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscired = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid } = user;
        dispatch(loginAction(uid));

        // oder by key
        // db.collection("users")
        //   .doc(uid)
        //   .get()
        //   .then((docRef) => {
        //     dispatch(loginAction(docRef.data()));
        //   })
        //   .catch((error) => {});
      } else {
        dispatch(logoutAction(null));
      }
    });
    return () => unsubscired();
  }, []);

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const documents = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch(loadUsers(documents));
      });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = db
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        console.log("snapshot post run");
        const documents = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch(loadPosts(documents));
      });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      {currentId ? <MainStack /> : <LoginScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
