import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';



const GeoLocation = () => {

    let state={
        location: {},
        errorMessage: ''
    }

  const _getLocation = async ( )=> {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if(status !== 'granted') {
        console.log('PERMISSION NOT GRANTED');

        state.errorMessage = 'PERMISSION NOT GRANTED';

    }

    const location = await Location.getCurrentPositionAsync();
    state.location = location;
  }

  return state;
}

export default GeoLocation;
