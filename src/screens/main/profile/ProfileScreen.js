import React, { useState } from "react";
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
  const currentId = "1";
  const usersData = useSelector((state) => state.users);
  const postsData = useSelector((state) => state.posts);
  const[user,setUser]=useState({});
  

  return (
    <SafeAreaView style={styles.container}>
    
      {
        usersData.map(item=>{
          if(item.uid==currentId){
            console.log(item);
            return  <Infro user={item} currentId={currentId}></Infro>
          }
        })
      }
      <ScrollView>
       {
        usersData.map(item=>{
          if(item.uid==currentId){
            console.log(item);
            return  <HeaderProfile user={item} currentId={currentId}></HeaderProfile>
          }
        })
      }
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SettingProfile")}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      {
        usersData.map(item=>{
          if(item.uid==currentId){
            return <Story post={postsData} currentId={currentId}></Story>
          }
        })
      }
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
