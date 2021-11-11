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
import * as ImagePicker from "expo-image-picker";

const SettingProfileScreen = (props) => {
  const {handleCloseModal,user} = props;
  const {avatar_url,descriptionUser,displayName,email,username}= user;
  const [imageBase64, setImageBase64] = useState([avatar_url]);
  const [name, setName] = useState(displayName);
  const [emaill, setEmail] = useState(email);
  const [nameuser, setNameuser] = useState(username);
  const [descrip, setDescrip] = useState(descriptionUser);

  console.log(user);
  function handleChange(e) {
    setName(e.target.value);
  }
  function handleChangeemail(e) {
    setNameuser(e.target.value);
  }
  function handleChangeusername(e) {
    setEmail(e.target.value);
  }
  function handleChangedescrip(e) {
    setDescrip(e.target.value);
  }
  function handleChooseimg() {
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log("response", response);
    });
  }
  function handleClose(){
    handleCloseModal();
  }
  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 0.5,
        base64: true,
      });
      const base64 = `data:image/png;base64,${result.base64}`;
      // console.log(base64);
      if (!result.cancelled) {
        const listImage = [...imageBase64];
        // console.log(listImage);
        listImage.push(base64);
        setImageBase64(listImage);
      }
    } catch (err) {
      console.log("get base64 error", err);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text
          style={styles.text}
          onPress={()=>handleClose()}
        >
          Close
        </Text>
        <Text style={styles.title}>Edit Profile</Text>
        <Text style={styles.text}>Save</Text>
      </View>
      <Line />
      <View style={styles.infor}>
        <View style={styles.wrapAvt}>
          <TouchableOpacity style={styles.avt} onPress={pickImage}>
            <Image style={styles.img} source={{ uri: imageBase64[0] }} />
            <Text style={styles.textimg}>Change avatar</Text>
          </TouchableOpacity>
        </View>
        <Line></Line>
        <View style={styles.form}>
          <View style={styles.col}>
            <Text style={styles.label}>Name:</Text>
            <View style={styles.wrapinput}>
              <TextInput
                style={styles.input}
                value={name}
                onChange={(e) => handleChange(e)}
              />
              <Line></Line>
            </View>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>UerName:</Text>
            <View style={styles.wrapinput}>
              <TextInput
                style={styles.input}
                value={nameuser}
                onChange={(e) => handleChangeusername(e)}
              />
              <Line></Line>
            </View>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Email:</Text>
            <View style={styles.wrapinput}>
              <TextInput
                style={styles.input}
                value={emaill}
                onChange={(e) => handleChangeemail(e)}
              />
              <Line></Line>
            </View>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Description:</Text>
            <View style={styles.wrapinput}>
              <TextInput 
              style={styles.input}
              value={descrip}
              onChange={(e) => handleChangedescrip(e)} 
              />
              <Line></Line>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  line: {
    borderTopWidth: 1,
    borderColor: "#cccc",
  },
  label: {
    color: "white",
    position: "relative",
    top: 4,
    width: "25%",
  },
  form: {
    margin: 8,
  },
  input: {
    paddingLeft: 10,
    width: "100%",
    color: "white",
  },
  wrapinput: {
    width: "75%",
    height: 45,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  col: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapAvt: {
   
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
    marginBottom:30,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  textimg:{
    color: "white",
    position: "absolute",
    width: 120,
    top: 80,
    left: -6,
  },  
  text: {
    
    color: "white",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 14,
  },
  container1: {
 
    marginLeft: 8,
    marginRight: 8,
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  boderbottom: {
    borderTopWidth: 1,
    borderColor: "#cccc",
    opacity: 0.3,
    marginTop: 9,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  infor: {},
});
export default SettingProfileScreen;
