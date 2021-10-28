import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const StoryItem = ({ displayName, avatar_url }) => {
  const newName = displayName.replace(" ", ".").toLowerCase();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#DE0046", "#F7A34B"]}
        style={{
          borderRadius: 32,
          justifyContent: "center",
          alignItems: "center",
          height: 64,
          width: 64,
        }}
      >
        <Image style={styles.imageStory} source={{ uri: avatar_url }} />
      </LinearGradient>
      <Text numberOfLines={1} style={{ marginTop: 3, color: "white" }}>
        {newName}
      </Text>
    </View>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
  container: {
    color: "white",
    height: 105,
    width: 68,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  imageStory: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
  },
});
