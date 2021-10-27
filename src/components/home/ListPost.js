import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import PostItem from "./PostItem";

const ListPost = ({ postsData, usersData }) => {
  const currentId = "1";
  const [postsDataState, setPostsDataState] = useState(postsData);

  const getUser = (ownerId) => {
    const dataUsers = usersData.filter((user) => {
      return user.uid === ownerId && user;
    });
    const newDataUser = {
      displayName: dataUsers[0].displayName,
      avatar_url: dataUsers[0].avatar_url,
    };
    return newDataUser;
  };

  useEffect(() => {
    const newPostsData = postsData.map((post) => {
      const dataUser = getUser(post.ownerId);
      const newPost = {
        ...post,
        displayName: dataUser.displayName,
        avatar_url: dataUser.avatar_url,
      };
      return newPost;
    });
    setPostsDataState(newPostsData);
  }, []);

  return (
    <View style={styles.container}>
      {postsDataState.map((item) => (
        <PostItem
          key={item.uid}
          currentId={currentId}
          description={item.description}
          images={item.images}
          liked={item.liked}
          displayName={item.displayName}
          avatar_url={item.avatar_url}
        />
      ))}
    </View>
  );
};

export default ListPost;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
});
