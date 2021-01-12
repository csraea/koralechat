import React from 'react';
import { Text, View, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import TalkRooms from '../../data/TalkRooms';

import { TalkPlace } from '../../types';
import styles from './style';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export type TalkListItemProps = {
    talkPlace: TalkPlace;
}

function GetColorScheme() {
    return useColorScheme();
}

const TalkListItem = (props: TalkListItemProps) => {

    const { talkPlace } = props;

    const user = talkPlace.users[1];

    return (
        <View style={styles.container}>
            <View style={styles.leftTalkContainer}>

                <Image source={{ uri: user.imageUri }} style={styles.avatar}/>
            
                <View style={styles.midTalkContainer}>
                    <Text style={{color: Colors[GetColorScheme()].text,
                        fontWeight: 'bold',
                        fontSize: 16}}>{user.name}</Text>

                    <Text style={styles.lastMessage}>{talkPlace.lastMessage.content}</Text>
                </View>

            </View>

            <Text style={styles.time}>{talkPlace.lastMessage.ctime}</Text>
        </View>
    )
};


export default TalkListItem;