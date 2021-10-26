import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CreatePostScreen from "../../screens/main/createPost/CreatePostScreen";
import MessageScreen from "../../screens/main/message/MessageScreen";
import SettingProfileScreen from "../../screens/main/profile/SettingProfileScreen";
import MainTab from "./MainTab";

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator>
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
        name="Post"
        component={CreatePostScreen}
        options={{ headerTitle: "CreatePostScreen" }}
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
