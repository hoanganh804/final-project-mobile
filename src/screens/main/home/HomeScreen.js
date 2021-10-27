import React from "react";
import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import HeaderHome from "../../../components/home/HeaderHome";
import ListPost from "../../../components/home/ListPost";
import StoriesBar from "../../../components/home/StoriesBar";

const HomeScreen = ({ navigation }) => {
  const usersData = useSelector((state) => state.users);
  const postsData = useSelector((state) => state.posts);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome navigation={navigation} />
      <ScrollView>
        <StoriesBar usersData={usersData} />
        <ListPost postsData={postsData} usersData={usersData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    color: "white",
    flex: 1,
  },
  logo: {
    height: 30,
    width: 60,
    color: "black",
  },
});
