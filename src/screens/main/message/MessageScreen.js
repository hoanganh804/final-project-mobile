import React from "react";
import { Button, Text, View } from "react-native";
import firebase from "../../../firebase/config";

const MessageScreen = ({ navigation }) => {
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("logout success"))
      .catch((err) => console.log(err));
  };
  return (
    <View>
      <Text>this is Message screen</Text>
      <Button title="logout" onPress={logout} />
    </View>
  );
};

export default MessageScreen;
