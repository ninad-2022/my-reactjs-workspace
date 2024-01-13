import React from 'react';
import {
  Button,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const FancyCard = () => {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>Trending</Text>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.title}>Developer's Community</Text>
          <Text style={styles.description} numberOfLines={1}>
            Hey! I am an agile Developer! Let's code! Hey! I am an agile Hey!
          </Text>
          <View>
            <TouchableOpacity onPress={() => openWebsite('https://google.com')}>
              <Text>Read More</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => openWebsite('https://google.com')}>
              <Text style={styles.socialLink}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#ffff',
  },
  card: {
    backgroundColor: '#86888A',
    marginHorizontal: 14,
    borderRadius: 10,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  image: {
    height: 180,
  },
  cardBody: {
    padding: 15,
    flex: 1,
    flexGrow: 1,
  },
  title: {
    color: '#ffff',
  },
  description: {
    color: '#ffff',
  },
  socialLink: {
    fontSize: 16,
    backgroundColor: 'white',
    padding: 8,
    textAlign: 'center',
    borderRadius: 8,
  },
});
