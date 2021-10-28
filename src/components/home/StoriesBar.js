import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import StoryItem from "./StoryItem";

const StoriesBar = ({ usersData }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={usersData}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <StoryItem
            avatar_url={item.avatar_url}
            displayName={item.displayName}
          />
        )}
      />
    </View>
  );
};

export default StoriesBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    color: "white",
    height: 105,
    borderWidth: 0.25,
    borderBottomColor: "#fffcfc73",
  },
});
