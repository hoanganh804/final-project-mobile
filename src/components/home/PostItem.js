import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";

const widthScreen = Dimensions.get("window").width; //full width: ;
const heightScreen = Dimensions.get("window").height; //full height

const PostHeader = ({ displayName, avatar_url }) => {
  return (
    <View style={styles.containerHeader}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <LinearGradient
          colors={["#DE0046", "#F7A34B"]}
          style={{
            borderRadius: 16.5,
            justifyContent: "center",
            alignItems: "center",
            height: 33,
            width: 33,
          }}
        >
          <Image
            style={styles.avatar}
            source={{
              uri: avatar_url,
            }}
          />
        </LinearGradient>

        <Text style={{ color: "white", marginLeft: 10, fontWeight: "600" }}>
          {displayName}
        </Text>
      </View>
    </View>
  );
};
const PostImage = ({ images }) => {
  const [widthImage, setWidthImage] = useState(0);
  const [heighImage, setHeighImage] = useState(0);
  Image.getSize(images[0], (width, heigh) => {
    let newHeigh = (widthScreen * heigh) / width;
    if (heigh > width * 1.7) {
      newHeigh = (widthScreen * heigh) / (width * 1.7);
    }
    setWidthImage(widthScreen);
    setHeighImage(newHeigh);
  });
  return (
    <Image
      style={{ width: widthImage, height: heighImage }}
      source={{
        uri: images[0],
      }}
    />
  );
};
const PostFooter = ({ liked, description, currentId, displayName }) => {
  const [isLike, setIsLike] = useState(false);

  const likes = liked.length;

  useEffect(() => {
    liked.forEach((like) => {
      if (currentId === like) {
        setIsLike(true);
      }
    });
  }, []);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          height: 44,
          width: widthScreen,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 44,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            {isLike ? (
              <Image
                style={styles.icon}
                source={require("../../res/images/redHeart.png")}
              />
            ) : (
              <Image
                style={styles.icon}
                source={require("../../res/images/like.png")}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require("../../res/images/comment.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require("../../res/images/direct_message.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 44,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              style={styles.iconBookMark}
              source={require("../../res/images/bookmark.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ marginLeft: 8, color: "white", fontWeight: "600" }}>
        {likes} Likes
      </Text>
      <View style={{ marginHorizontal: 8, marginTop: 8 }}>
        <Text style={{ color: "white", fontWeight: "600" }} numberOfLines={2}>
          {displayName}
          <Text style={{ color: "white", fontWeight: "400" }}>
            {"  "}
            {description}
          </Text>
        </Text>
      </View>
    </View>
  );
};
const PostItem = ({
  currentId,
  description,
  images,
  liked,
  displayName,
  avatar_url,
}) => {
  return (
    <View style={styles.container}>
      <PostHeader displayName={displayName} avatar_url={avatar_url} />
      <PostImage images={images} />
      <PostFooter
        currentId={currentId}
        liked={liked}
        description={description}
        displayName={displayName}
      />
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  containerHeader: {
    height: 50,
    width: widthScreen,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 2,
  },
  icon: {
    height: 18,
    width: 18,
    marginLeft: 8,
    marginRight: 6,
  },
  iconBookMark: {
    height: 18,
    width: 18,
    marginRight: 8,
  },
});