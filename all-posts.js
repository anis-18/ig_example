import React from 'react';
import { View, FlatList, StyleSheet, Text, Dimensions } from 'react-native';
import { Post } from './Post';

const { screenWidth, screenHeight } = Dimensions.get('window');
export function AllPosts({ navigation, route }) {
  const { posts, id } = route.params;
  const listRef = React.useRef(null);

  const onScrollToIndexFailed = (info) => {
    console.log('======onScrollToIndexFailed=====', info);
  };

  const getItemLayout = React.useCallback((data, index) => {
    return { length: 519, offset: 519 * index, index };
  });

  return (
    <View style={styles.container}>
      <FlatList
        ref={listRef}
        initialScrollIndex={id}
        getItemLayout={getItemLayout}
        onScrollToIndexFailed={onScrollToIndexFailed}
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.element} key={item.id}>
            <Post img={item.img} type="all" />
            <View>
              <Text>Liked by</Text>
            </View>
            <View>
              <Text>{item.date}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  element: {
    marginBottom: 100,
  },
});
