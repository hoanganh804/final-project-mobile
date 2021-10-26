import React from "react";
import { Button, Text, View } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>this is Profile screen</Text>
      <Button
        title="Setting Profile"
        onPress={() => navigation.navigate("SettingProfile")}
      />
    </View>
  );
};

export default ProfileScreen;
