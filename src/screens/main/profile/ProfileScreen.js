import React from "react";
import { Button, SafeAreaView, Text, View ,TouchableOpacity, StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../slices/authSilce";
import { AntDesign } from '@expo/vector-icons'; 
import HeaderProfile from "../../../components/profiletab/HeaderProfile"
import Story from "../../../components/profiletab/Story";
import RenderImg from "../../../components/profiletab/RenderImg"

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const logout = () => {
    const action = logoutAction();
    dispatch(action);
  };
  const currentId = "1";
  const usersData = useSelector((state) => state.users);
  const postsData = useSelector((state) => state.posts);
  let User = {};
  let post={};
  for (let i = 0; i < usersData.length;i++){
    if(usersData[i].uid === currentId){
      User = usersData[i];
      post = postsData[i];
    }
  } 
  
  return (
    <SafeAreaView style={styles.container}>
      <HeaderProfile
        user ={User}
     
        currentId={currentId}
      ></HeaderProfile>
      <TouchableOpacity
        style={styles.button}
       onPress={() => navigation.navigate("SettingProfile")}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <Story post = {post}></Story>
      <RenderImg post={post} currentId={currentId} ></RenderImg>
      <Button title="Log Out" onPress={() => logout()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    
  },
  button:{
    borderColor:'white',
    borderRadius:5,
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:15,
    marginRight:15,
    height:40,

  },
  buttonText:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  },
 
})



export default ProfileScreen;
