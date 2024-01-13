import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards';
import FancyCard from './Components/FancyCard';
import ContactList from './Components/ContactList';

const Basics = () => {
  return (
    <View>
      <FlatCards />
      <ElevatedCards />
      <ContactList />
      <FancyCard />
    </View>
  );
};

export default Basics;

const styles = StyleSheet.create({});
