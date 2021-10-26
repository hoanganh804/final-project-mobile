import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>this is Profile screen</Text>
      <Button
        title="Setting Profile"
        onPress={() => navigation.navigate("SettingProfile")}
      />
      <Button title="Log Out" onPress={() => navigation.navigate("Login")} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
