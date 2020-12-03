import React from 'react';
import { Text, View } from 'react-native';

import { TalkPlace } from '../../types';


export type TalkListItemProps = {
    talkPlace: TalkPlace;
}

const TalkListItem = (props: TalkListItemProps) => {

    const { talkPlace } = props;

    return (
        <View>
            <Text>{talkPlace.lastMessage.content}</Text>
        </View>
    )
};


export default TalkListItem;