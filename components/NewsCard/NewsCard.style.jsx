import {Dimensions, StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eceff1',
        margin: 10,
      },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin:10,
  },
  title: {
    fontWeight: 'bold',

    fontSize: 18,
  },
  description: {
    marginTop: 3,
  },
  inner_container: {
    padding: 5,
  },
  author: {
    textAlign: 'right',
    fontStyle: 'italic',
  },
  bannerImage: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 1,
  },
  headerText: {
    fontWeight:'bold',
  },
});
