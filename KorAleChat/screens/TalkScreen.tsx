import * as React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import TalkListItem from '../components/TalkListItem';
import { Text, View } from '../components/Themed';
import TalkPlaces from '../data/TalkPlaces';
import { TalkPlace } from '../types';

export default function TalkScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={TalkPlaces}
        renderItem={({ item }) => <TalkListItem talkPlace={item}/> }
        keyExtractor={(item) => item.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
});
