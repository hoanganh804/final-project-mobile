import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../slices/authSilce";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const logout = () => {
    const action = logoutAction();
    dispatch(action);
  };
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
