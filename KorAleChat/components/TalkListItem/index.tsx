import React from 'react';
import { 
    Text,
    View,
    Image, 
    TouchableWithoutFeedback
 } from 'react-native';
import { color } from 'react-native-reanimated';
import TalkRooms from '../../data/TalkPlaces';

import { TalkPlace } from '../../types';
import styles from './style';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

export type TalkListItemProps = {
    talkPlace: TalkPlace;
}

function GetColorScheme() {
    return useColorScheme();
}

const TalkListItem = (props: TalkListItemProps) => {

    const { talkPlace } = props;

    const navigation = useNavigation();

    const user = talkPlace.users[1];

    const onClick = () => {
        navigation.navigate('TalkPlace', { 
            id: talkPlace.id,
            name: user.name, 
            uri: user.imageUri
        });
    };

    return (
        <TouchableWithoutFeedback onPress={onClick}>
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

            <Text style={styles.time}>
                {moment(talkPlace.lastMessage.ctime).format("YYYY/MM/DD")}
            </Text>
        </View>
        </TouchableWithoutFeedback>
    )
};

// TODO: display the length of the last message correctly 
// TODO: display default avaar if is not available

export default TalkListItem;