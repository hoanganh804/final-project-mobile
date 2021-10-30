import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Dimensions,
  Image,
  Modal,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { addDocument } from "../../../firebase/services";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const CreatePostScreen = ({ modalVisible, handleModalCreatePost }) => {
  const [imageBase64, setImageBase64] = useState([]);
  const [descriptionPost, setDescriptionPost] = useState("");
  const currentId = useSelector((state) => state.auth.currentId);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
        base64: true,
      });
      const base64 = `data:image/png;base64,${result.base64}`;
      if (!result.cancelled) {
        const listImage = [...imageBase64];
        listImage.push(base64);
        setImageBase64(listImage);
      }
    } catch (err) {
      console.log("get base64 error", err);
    }
  };

  const uploadPost = (imageBase64, descriptionPost) => {
    const data = {
      ownerId: currentId,
      liked: [],
      description: descriptionPost,
      images: imageBase64,
      isDelete: false,
    };

    addDocument("posts", data);
    setImageBase64(null);
    setDescriptionPost("");
    handleModalCreatePost("close");
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.headerContainer}>
            <AntDesign
              name="close"
              size={26}
              color="white"
              onPress={() => {
                setImageBase64(null);
                setDescriptionPost("");
                handleModalCreatePost("close");
              }}
              style={{ width: 62 }}
            />
            <Text style={{ color: "white", fontWeight: "700", fontSize: 16 }}>
              New post
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 3,
                paddingHorizontal: 14,
                paddingVertical: 6,
                backgroundColor: "rgba(255,255,255,0.3)",
              }}
              onPress={() => {
                if (!imageBase64 || !descriptionPost) {
                  Alert.alert("Please choice image and fill description");
                  return;
                }
                uploadPost(imageBase64, descriptionPost);
              }}
            >
              <Text
                style={{
                  color: "#808080",
                  fontWeight: "600",
                  fontSize: 14,
                }}
              >
                Post
              </Text>
            </TouchableOpacity>
          </View>
          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder="Type something"
            placeholderTextColor="grey"
            style={{ color: "white" }}
            onChangeText={(text) => setDescriptionPost(text)}
            value={descriptionPost}
          />
          <Button title="Pick an image from camera roll" onPress={pickImage} />

          {imageBase64 &&
            imageBase64.map((image, index) => (
              <Image
                source={{
                  uri: image,
                }}
                key={index}
                style={{ width: 200, height: 200, marginTop: 10 }}
              />
            ))}
        </View>
      </View>
    </Modal>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    position: "absolute",
    top: Platform.OS === "android" ? -StatusBar.currentHeight : 0,
  },
  modalView: {
    backgroundColor: "black",
    width: deviceWidth,
    height: deviceHeight,
  },
  headerContainer: {
    height: Platform.OS === "ios" ? 60 : 46,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 30 : 0,
  },
});
