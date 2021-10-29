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
  Image,
  TextInput,
} from "react-native";
import Line from "../../../components/profiletab/Line";
import ImagePicker from 'react-native-image-picker';

const SettingProfileScreen = ({props, navigation,route}) => {
  const{uid, email,displayName,avatar_url} = route.params;
  const [name,setName]= useState(displayName);
  const [emaill,setEmail] = useState(email);
  function handleChange(e){
      setName(e.target.value);
  }
  function handleChangeemail(e){
    setEmail(e.target.value);
  }
  function handleChooseimg(){
    ImagePicker.launchImageLibrary(options,response=>{
      console.log('response',response);
    })
  }   
  return (
    <View style={styles.container}>
        <View style={styles.container1}>
              <Text style={styles.text} onPress={() =>navigation.navigate("ProfileTab")}>Close</Text>
              <Text style={styles.title}>Edit Profile</Text>
              <Text style={styles.text}>Save</Text>
          </View>
        <Line/>
        <View style={styles.infor}>
            <View style={styles.wrapAvt}>
              <TouchableOpacity style={styles.avt} onPress={()=>handleChooseimg}>
                <Image style={styles.img} source={{ uri:avatar_url}}/>
                <Text style={styles.text}>Change avatar</Text>
              </TouchableOpacity>
            </View>
            <Line></Line>
            <View style={styles.form}>
              <View style={styles.col}>
                <Text style={styles.label}>Name:</Text>
                <View style={styles.wrapinput}>
                  <TextInput style={styles.input} value={name} onChange={(e)=>handleChange(e)}/>
                  <Line></Line>
                </View>
              </View>
              <View style={styles.col}>
                <Text style={styles.label}>Email:</Text>
                <View style={styles.wrapinput}>
                  <TextInput style={styles.input} value={emaill} onChange={(e)=>handleChangeemail(e)}/>
                  <Line></Line>
                </View>
              </View>
              <View style={styles.col}>
                <Text style={styles.label}>Description:</Text>
                <View style={styles.wrapinput}>
                  <TextInput style={styles.input}/>
                  <Line></Line>
                </View>
              </View>
            </View>
        </View>
        <TouchableOpacity onPress={()=>handleChooseimg} ><Text style={{color:'white'}}>aaaaaaaaa</Text></TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  line:{
    borderTopWidth:1,
    borderColor: "#cccc",
 
  },
  label:{
    color: "white",
    position:'relative',
    top:4,
    width:'25%',
  },
  form:{
    margin:8,
  },
  input:{
    paddingLeft:10,
    width:'100%',
    color: "white",
  },
  wrapinput:{
    width:'75%',
    height:45,
    flexDirection:'column',
    flexWrap:'wrap',
  },  
  col:{
    flexDirection: "row",
    justifyContent:'space-between'
  },
  wrapAvt:{
    flexDirection: "row",
    justifyContent:'center',
    margin:10,
  },
  img:{
    height:80,
    width:80,
    borderRadius:40,

  },
  text:{
      color: "white",
  },
  title:{
      fontWeight:'bold',
      color: "white",
      fontSize:14,
  },
  container1: {
      marginLeft: 8,
      marginTop:20,
      flexDirection: "row",
      justifyContent: 'space-between',
      borderBottomWidth:1,

  },
  boderbottom:{
      borderTopWidth:1,
      borderColor: "#cccc",
      opacity: 0.3,
      marginTop:9,
  },
  container: {
    flex: 1,
    backgroundColor:'black',
  },
  infor:{

  }
})
export default SettingProfileScreen;
