import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const diceImages = [
  require('../../../assests/One.png'),
  require('../../../assests/Two.png'),
  require('../../../assests/Three.png'),
  require('../../../assests/Four.png'),
  require('../../../assests/Five.png'),
  require('../../../assests/Six.png'),
];

const Dice = ({imageUrl}: {imageUrl: ImageSourcePropType}) => {
  return <Image style={styles.diceImage} source={imageUrl} />;
};

const RoleTheDice = () => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(
    diceImages[0],
  );

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const rollDice = (): void => {
    let randomNumber = Math.floor(Math.random() * 6);
    setDiceImage(diceImages[randomNumber]);
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDice}>
        <Text style={styles.rollButton}>ROLL THE DICE</Text>
      </Pressable>
    </View>
  );
};

export default RoleTheDice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollButton: {
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
