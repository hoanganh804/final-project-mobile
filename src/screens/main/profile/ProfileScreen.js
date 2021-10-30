import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../slices/authSilce";
import { AntDesign } from "@expo/vector-icons";
import HeaderProfile from "../../../components/profiletab/HeaderProfile";
import Infro from "../../../components/profiletab/Infro";
import Story from "../../../components/profiletab/Story";
import RenderImg from "../../../components/profiletab/RenderImg";

const ProfileScreen = ({ navigation }) => {
  const currentId = useSelector((state) => state.auth.currentId);
  const usersData = useSelector((state) => state.users);
  const postsData = useSelector((state) => state.posts);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const currentUser = usersData.filter((user) => user.id === currentId);
    const newUser = currentUser[0];
    setCurrentUser(newUser);
  }, [usersData]);

  return (
    <SafeAreaView style={styles.container}>
      <Infro user={currentUser} currentId={currentId}></Infro>
      <ScrollView>
        <HeaderProfile user={currentUser} currentId={currentId}></HeaderProfile>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SettingProfile", currentUser)}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        {usersData.map((item) => {
          if (item.id == currentId) {
            return (
              <Story
                key={item.id}
                post={postsData}
                currentId={currentId}
              ></Story>
            );
          }
        })}
        <RenderImg post={postsData} currentId={currentId}></RenderImg>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
