import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const RandomBgChange = () => {
  const [randomBackground, setRandomBackgroud] = useState('#ffffff');

  const generateColour = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackgroud(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <TouchableOpacity>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText} onPress={generateColour}>
              Press me
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RandomBgChange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionButtonText: {
    fontSize: 23,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});
