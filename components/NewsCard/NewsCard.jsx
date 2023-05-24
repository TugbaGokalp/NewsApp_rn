import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './NewsCard.style';

const Card = ({news}) => {
  return (
    <View>
      <Image source={{uri: news.imageUrl}} style={styles.image}></Image>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}>{news.description}</Text>
        <Text style={styles.author}>{news.author}</Text>
      </View>
    </View>
  );
};

export default Card;
