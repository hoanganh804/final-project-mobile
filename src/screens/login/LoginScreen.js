import React from "react";
import { Button, Text, View } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>this is login screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Main")} />
    </View>
  );
};

export default LoginScreen;
