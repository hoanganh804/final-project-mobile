import React from "react";
import {
  Button,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../slices/authSilce";
import { AntDesign } from "@expo/vector-icons";
import HeaderProfile from "../../../components/profiletab/HeaderProfile";
import Story from "../../../components/profiletab/Story";
import RenderImg from "../../../components/profiletab/RenderImg";

const ProfileScreen = ({ navigation }) => {
  const currentId = "1";
  const usersData = useSelector((state) => state.users);
  const postsData = useSelector((state) => state.posts);
  let User = {};
  let post = {};
  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].uid === currentId) {
      User = usersData[i];
      post = postsData[i];
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderProfile user={User} currentId={currentId}></HeaderProfile>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SettingProfile")}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <Story post={post}></Story>
      <RenderImg post={post} currentId={currentId}></RenderImg>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  button: {
    borderColor: "#979797",
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    marginRight: 8,
    height: 36,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default ProfileScreen;
