import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// navigation

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
        title="Go to details"
        //basic way
        // onPress={() =>
        //   navigation.navigate('Details', {
        //     productId: '86',
        //   })
        // }

        //change the type of detail screen then it will work
        // onPress={() => navigation.navigate('Details')}

        // it will keep pushing on the layer
        onPress={() =>
          navigation.push('Details', {
            productId: '2',
          })
        }

        // use replace
        // onPress={() =>
        //   navigation.replace('Details', {
        //     productId: '2',
        //   })
        // }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#0000',
  },
});
