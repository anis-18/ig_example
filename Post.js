import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/core';

export const Post = React.memo((props) => {
  const styles = StyleSheet.create({
    container: {
      borderColor: 'white',
      margin: props.type === 'all' ? 0 : 1,
    },
  });
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('all-posts', {
          posts: props.posts,
          id: props.id - 1,
        });
      }}
    >
      <FastImage
        style={{
          width: props.type === 'all' ? '100%' : 120,
          height: props.type === 'all' ? 380 : 120,
        }}
        source={props.img}
        resizeMode={FastImage.resizeMode.cover}
      />
    </TouchableOpacity>
  );
});
