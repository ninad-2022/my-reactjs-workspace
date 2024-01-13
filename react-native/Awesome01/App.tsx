import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Basics from './src/components/1-Basic/Index';
import PasswordGenerator from './src/components/2-password-generator/Index';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <Basics /> */}
        <PasswordGenerator />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1EDEC',
    color: '#fff',
    width: '100%',
    height: '100%',
  },
});
