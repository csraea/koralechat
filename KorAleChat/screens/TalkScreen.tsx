import * as React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import TalkListItem from '../components/TalkListItem';
import { Text, View } from '../components/Themed';
import { TalkPlace } from '../types';


export default function TalkScreen() {
  return (
    <View style={styles.container}>
      <TalkListItem talkPlace={{lastMessage: {content: "Hello from Alex!"}}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    // TODO: add the text color depending on the color scheme
  }
});
