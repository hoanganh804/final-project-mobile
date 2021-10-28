import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

RenderImg.propTypes = {};

function RenderImg(props) {
  const { currentId } = props;
  const post = [
    {
      index: 1,
      uid: "1",
      ownerId: "1",
      liked: ["1", "2"],
      description: "day la post 1",
      images: [
        "https://images.unsplash.com/photo-1572869357118-65e4f7a59813?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80",
      ],
    },
    {
      index: 2,
      uid: "1",
      ownerId: "1",
      liked: ["1", "2"],
      description: "day la post 1",
      images: [
        "https://images.unsplash.com/photo-1572869357118-65e4f7a59813?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80",
      ],
    },
    {
      index: 3,
      uid: "1",
      ownerId: "1",
      liked: ["1", "2"],
      description: "day la post 1",
      images: [
        "https://images.unsplash.com/photo-1572869357118-65e4f7a59813?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80",
      ],
    },
    {
      index: 4,
      uid: "1",
      ownerId: "1",
      liked: ["1", "2"],
      description: "day la post 1",
      images: [
        "https://images.unsplash.com/photo-1572869357118-65e4f7a59813?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80",
      ],
    },
    {
      index: 5,
      uid: "1",
      ownerId: "1",
      liked: ["1", "2"],
      description: "day la post 1",
      images: [
        "https://images.unsplash.com/photo-1572869357118-65e4f7a59813?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80",
      ],
    },
    {
      index: 6,
      uid: "1",
      ownerId: "1",
      liked: ["1", "2"],
      description: "day la post 1",
      images: [
        "https://images.unsplash.com/photo-1572869357118-65e4f7a59813?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80",
      ],
    },
  ];
  const { arr, setArr } = useState("");

  const renderItem = (item) => {
    if (item.item.uid == currentId) {
      return (
        <TouchableOpacity>
          <Image style={styles.img} source={{ uri: item.item.images[0] }} />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.touch}>
          <Image
            style={styles.icon}
            source={require("../../res/images/gridIcon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <Image
            style={styles.icon1}
            source={require("../../res/images/profile_selected.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.listview}>
        <FlatList
          numColumns={3}
          keyExtractor={(item) => item.index}
          data={post}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    height: 138,
    width: 138,
    margin: 1,
  },
  container: {
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  gridView: {
    backgroundColor: "red",
  },
  row: {
    flexDirection: "row",
  },
  touch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },

  icon: {
    height: 18,
    width: 18,
  },
  icon1: {
    height: 18,
    width: 18,
    opacity: 0.6,
  },
});

export default RenderImg;
