import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>More..</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>😎</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#ffff',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  container: {
    padding: 8,
  },
  elevatedCards: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
