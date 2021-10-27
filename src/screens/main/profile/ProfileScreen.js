import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../slices/authSilce";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const logout = () => {
    const action = logoutAction();
    dispatch(action);
  };
  const usersData = useSelector((state) => state.users);
  const postsData = useSelector((state) => state.posts);
  console.log(usersData, postsData);
  return (
    <SafeAreaView>
      <Text>this is Profile screen</Text>
      <Button
        title="Setting Profile"
        onPress={() => navigation.navigate("SettingProfile")}
      />
      <Button title="Log Out" onPress={() => logout()} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
