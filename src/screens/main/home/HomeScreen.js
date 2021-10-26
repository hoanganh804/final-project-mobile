import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>this is Home screen</Text>
      <Button title="Message" onPress={() => navigation.navigate("Message")} />
      <Button title="Post" onPress={() => navigation.navigate("Post")} />
    </View>
  );
};

export default HomeScreen;
