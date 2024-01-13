import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MusicPlayer from './screens/MusicPlayer';
import {addTrack, setupPlayer} from './services/musicPlayerServices';

const HeyMusic = () => {
  const [isPlayerReady, setIsPaylerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }

    setIsPaylerReady(isSetup);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <MusicPlayer />
    </View>
  );
};

export default HeyMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
