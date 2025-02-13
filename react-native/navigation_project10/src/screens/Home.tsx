import {FlatList, StyleSheet, View, Pressable} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../App';

import ProductItem from '../components/ProductItems';
import Separator from '../components/Separator';
import {PRODUCTS_LIST} from '../data/constants';
import {PresentToAll} from '@mui/icons-material';

type HomeProps = NativeStackScreenProps<RootStackParamsList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {product: item});
            }}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});
export default Home;
