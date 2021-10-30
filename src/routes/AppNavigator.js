import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase, { db } from "../firebase/config";
import LoginScreen from "../screens/login/LoginScreen";
import { loginAction, logoutAction } from "../slices/authSilce";
import { loadPosts } from "../slices/postSlice";
import { loadUsers } from "../slices/userSlice";
import MainStack from "./main/MainStack";

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

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        console.log("snapshot user run");
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

  // oder by key
  // db.collection("users")
  //   .doc(uid)
  //   .get()
  //   .then((docRef) => {
  //     dispatch(loginAction(docRef.data()));
  //   })
  //   .catch((error) => {});

  return (
    <NavigationContainer>
      {currentId ? <MainStack /> : <LoginScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
