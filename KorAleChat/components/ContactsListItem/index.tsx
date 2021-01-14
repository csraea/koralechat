import React from 'react';
import { 
    Text,
    View,
    Image, 
    TouchableWithoutFeedback
 } from 'react-native';
import { User } from '../../types';
import styles from './style';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

export type TalkListItemProps = {
    user: User;
}

function GetColorScheme() {
    return useColorScheme();
}

const ContactsListItem = (props: TalkListItemProps) => {

    const { user } = props;

    const navigation = useNavigation();


    const onClick = () => {

    };

    return (
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.leftTalkContainer}>

                <Image source={{ uri: user.imgUri }} style={styles.avatar}/>
            
                <View style={styles.midTalkContainer}>
                    <Text style={{color: Colors[GetColorScheme()].text,
                        fontWeight: 'bold',
                        fontSize: 16}}>{user.name}</Text>
                    <Text style={styles.status}>{user.status}</Text>
                </View>

            </View>


                <Text></Text>
        </View>
        </TouchableWithoutFeedback>
    )
};

// TODO: display the length of the last message correctly 
// TODO: display default avaar if is not available

export default ContactsListItem;