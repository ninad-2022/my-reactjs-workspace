import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 'user2',
      name: 'Jane Smith',
      status: 'Away',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvq5yV7DC6sa-Ulb810z-KU9nXPx-MIv80eEOau43l7_BnuMCw9VFKWk-1k7y0kN2Xeo&usqp=CAU',
    },
    {
      uid: 'user3',
      name: 'Michael Johnson',
      status: 'Offline',
      imageUrl:
        'https://static.vecteezy.com/system/resources/thumbnails/002/210/219/small/online-dating-website-hacker-attack-rgb-color-icon-vector.jpg',
    },
    {
      uid: 'user4',
      name: 'Emily Williams',
      status: 'Active',
      imageUrl:
        'https://media.istockphoto.com/id/1296117290/vector/cyberstalking-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=t4AfH5nlAgsfI9KuqppiVFmaXsozlJxPxVt63tK52Lk=',
    },
    {
      uid: 'user5',
      name: 'Daniel Brown',
      status: 'Away',
      imageUrl:
        'https://media.istockphoto.com/id/1279780463/vector/clairvoyance-ability-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=arg3GoOQ5sWoRBKSFxIMqN8VP4y-M-7Wybki1EMznF8=',
    },
    {
      uid: 'user6',
      name: 'Olivia Davis',
      status: 'Active',
      imageUrl:
        'https://cdn.xxl.thumbs.canstockphoto.com/intelligence-brain-function-isolated-on-a-white-background-with-gears-and-cog-symbols-stock-photos_csp9965353.jpg',
    },
    {
      uid: 'user7',
      name: 'William Wilson',
      status: 'Offline',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBCGKKwA1FfiTbhT9uT2uE-NeZFcBDfipfmmCCGzw8SEYyLKeYsUqE6howfaI8juxMT0&usqp=CAU',
    },
    {
      uid: 'user8',
      name: 'Sophia Anderson',
      status: 'Away',
      imageUrl:
        'https://st3.depositphotos.com/2673929/32134/i/600/depositphotos_321342078-stock-photo-happy-young-man-and-his.jpg',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}, i) => (
          <View key={uid} style={[styles.userCard]}>
            <Image style={styles.userImage} source={{uri: imageUrl}} />
            <View>
              <Text style={styles.contactName}>{name}</Text>
              <Text style={{color: 'white', marginLeft: 20}}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#ffff',
  },
  container: {
    paddingHorizontal: 10,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 6,
    backgroundColor: '#9424F0',
  },
  contactName: {
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
  },
});
