import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(false);
  const [uppperCase, setUppperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setsymbols] = useState(false);

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength.length; i++) {
      const chracterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(chracterIndex);
    }
    return result;
  };

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';
    const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (uppperCase) characterList += uppperCase;
    if (lowerCase) characterList += lowerCase;
    if (numbers) characterList += numbers;
    if (symbols) characterList += symbols;

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(password);
    setIsPasswordGenerated(true);
  };

  const resetPassword = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(false);
    setNumbers(false);
    setsymbols(false);
  };
  return (
    <View>
      <Text style={{backgroundColor: 'red'}}>PasswordGenerator</Text>
    </View>
  );
};

export default PasswordGenerator;

const styles = StyleSheet.create({});
