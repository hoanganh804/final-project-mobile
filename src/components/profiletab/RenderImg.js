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
  const {post,currentId } = props;
 
  const  [arr, setArr]  = useState([]); 
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
        {post.map(item=>{
          if(item.uid == currentId){
            return <Image 
                  style={styles.img}
                  source={{uri: item.images[0]}}
                />
          }else return
          
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    height: 136,
    width: 136,
  },
  container: {
    flex: 1,
  },
  listview: {
    flexDirection: "row",
    flexWrap:'wrap',
    flex:1,
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
