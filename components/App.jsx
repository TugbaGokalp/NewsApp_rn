import React from 'react';
import news_data from './news_data.json';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import NewsCard from './NewsCard/NewsCard';
import news_banner_data from './news_banner_data.json';
import styles from './NewsCard/NewsCard.style'

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>News</Text>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {news_banner_data.map(bannerNews => (
                <Image
                  style={styles.bannerImage}
                  source={{uri: bannerNews.imageUrl}}
                />
              ))}
            </ScrollView>
          )}
          data={news_data}
          renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
  );
};



export default App;
