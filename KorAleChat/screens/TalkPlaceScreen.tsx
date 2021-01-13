import React from 'react';
import { Text, ImageBackground } from 'react-native';

import { useRoute } from '@react-navigation/native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { FlatList } from 'react-native-gesture-handler';

import talkPlaceData from '../data/Talks';
import TalkMessage from '../components/TalkMessage';

const BG1 = { uri: 'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'};
const BG2 = { uri: 'https://i.pinimg.com/originals/0a/75/5a/0a755a111030c39fca13d9fa38931f20.jpg'};

const TalkPlaceSreen = () => {

    const isDark = () => {
        return useColorScheme() === 'light';
    }
    const BG = isDark() ? BG1 : BG2;

    const route = useRoute();

    //console.log(route.params);

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
        <FlatList
            inverted
            data={talkPlaceData.messages}
            renderItem={({ item }) => <TalkMessage message={item} /> }
        />
        </ImageBackground>
    )
}

export default TalkPlaceSreen;