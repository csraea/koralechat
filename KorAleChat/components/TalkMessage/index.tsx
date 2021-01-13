import React from 'react';
import { Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Message } from '../../types';
import moment from 'moment';
import styles from './style';

export type TalkMessageProps = {
    message: Message;
}

const TalkMessage = (props: TalkMessageProps) => {
    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return ( 
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    // #fcbab6
                    // #490903
                    backgroundColor: (isMyMessage() && useColorScheme() === 'dark') ? '#9f6460' : isMyMessage() ? '#fcbab6' : ( useColorScheme() === 'dark' ? '#404040' : '#e5e5e5'),
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50
                }
            ]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}        
                <Text style={[ 
                    styles.message, {
                        color: Colors[useColorScheme()].text}
                ]}>{message.content}</Text>
                <Text style={[styles.time, {
                    color: isMyMessage() && useColorScheme() === 'dark' ? '#b3b3b3' : 'grey'
                }]}>{moment(message.ctime).fromNow()}</Text>
            </View>
        </View>
    )
}

/*conditional redering -- user name*/

export default TalkMessage;