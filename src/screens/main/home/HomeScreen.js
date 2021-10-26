import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>this is Home screen</Text>
      <Button title="Message" onPress={() => navigation.navigate("Message")} />
      <Button title="Post" onPress={() => navigation.navigate("Post")} />
    </SafeAreaView>
  );
};

export default HomeScreen;
