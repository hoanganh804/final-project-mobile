import React, { useEffect } from "react";
import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
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
      <ListPost
        postsData={postsData}
        usersData={usersData}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    color: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logo: {
    height: 30,
    width: 60,
    color: "black",
  },
});
