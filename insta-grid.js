import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Post } from './Post';
import { POSTS } from './dummy-data';

export const InstaGrid = React.memo((props) => {
  return (
    <View style={styles.container}>
      {POSTS[0] &&
        POSTS.map((post) => (
          <Post key={post.id} img={post.img} posts={POSTS} id={post.id} />
        ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
