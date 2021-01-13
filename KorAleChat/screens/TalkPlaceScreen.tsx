import React from 'react';
import { Text, ImageBackground } from 'react-native';

import { useRoute } from '@react-navigation/native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { FlatList } from 'react-native-gesture-handler';

import talkPlaceData from '../data/Talks';
import TalkMessage from '../components/TalkMessage';

import BG1 from "../assets/images/BG1.png";
import BG2 from "../assets/images/BG2.jpg";
import InputBox from '../components/InputBox';

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

            <InputBox />
        </ImageBackground>
    )
}

export default TalkPlaceSreen;