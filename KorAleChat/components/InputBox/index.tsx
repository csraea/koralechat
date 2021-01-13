import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useColorScheme } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import { View, Text } from '../Themed';
import styles from './styles';

import { Icon, InlineIcon } from '@iconify/react';
import { mdiMapMarkerRadius } from '@mdi/js';

const InputBox = () => {

    const [message, setMessage] = useState('');

    const sendMessage = () => {
        console.warn(`Sending : ${message}`)

        //send a message to backend

        setMessage('')
    }

    const onPress = () => {
        if(!message) {
            console.warn('No message to send!');
        } else {
            sendMessage();
        }
    }
    return (
        <View style={styles.container}>
            <View style={[styles.mainContainer, {
                backgroundColor: Colors[useColorScheme()].backgroundColor
            }]}> 
                <MaterialCommunityIcons name="map-marker-plus" size={26} color="#FA7268" />
                <TextInput 
                    multiline 
                    placeholder={"Type a message"}
                    placeholderTextColor="grey"
                    value={message}
                    onChangeText={setMessage}
                    style={styles.textInput}/>
                {!message && <Entypo name="attachment" size={26} color="#FA7268" style={{marginRight: -8}} />}
                
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.button}>
                        {!message
                            ? <MaterialCommunityIcons name="send-circle" size={43} color="#FA7268" />
                            : <MaterialCommunityIcons name="send-circle-outline" size={43} color="#FA7268" />
                    }</View>
                </TouchableOpacity>
                
            </View>
        
        </View>
    )
}

export default InputBox;