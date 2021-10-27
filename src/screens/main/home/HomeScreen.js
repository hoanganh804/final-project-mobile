import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const usersData = useSelector((state) => state.users);
  const postsData = useSelector((state) => state.posts);
  console.log(usersData, postsData);
  return (
    <SafeAreaView>
      <Text>this is Home screen</Text>
      <Button title="Message" onPress={() => navigation.navigate("Message")} />
      <Button title="Post" onPress={() => navigation.navigate("Post")} />
    </SafeAreaView>
  );
};

export default HomeScreen;
