import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../firebase/config";
import { schedulePushNotification } from "../../notifications/TestNoti";
import MessageScreen from "../../screens/main/message/MessageScreen";
import SettingProfileScreen from "../../screens/main/profile/SettingProfileScreen";
import { loadPosts } from "../../slices/postSlice";
import { loadUsers } from "../../slices/userSlice";
import MainTab from "./MainTab";

const Stack = createNativeStackNavigator();
const MainStack = () => {
  const dispatch = useDispatch();

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
        // schedulePushNotification("thay doi post like", {
        //   data: "hello",
        // });
      });
    return unsubscribe;
  }, []);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Message"
        component={MessageScreen}
        options={{ headerTitle: "Message" }}
      />
      <Stack.Screen
        name="SettingProfile"
        component={SettingProfileScreen}
        options={{ headerTitle: "SettingProfile" }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
