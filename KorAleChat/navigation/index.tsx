import { NavigationContainer, DefaultTheme, DarkTheme, BaseRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, useColorScheme, View } from 'react-native';
import Colors from '../constants/Colors';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MNavigator from './MNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import TalkPlaceScreen from '../screens/TalkPlaceScreen'

import { MaterialCommunityIcons, MaterialIcons, Octicons } from "@expo/vector-icons"   // icon set for the earch icon
import styles from '../components/TalkListItem/style';


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        shadowOpacity: 0,   //ios
        elevation: 0,       //android
        backgroundColor: Colors.light.tint
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTitleAlign: "left",
      headerTintColor: useColorScheme() === 'dark' ? Colors.light.background : Colors.dark.background
    }}>
      <Stack.Screen
        name="Root"
        component={MNavigator} 
        options={{
          title: "K O R A L E",
          headerRight: () => {
            return <View  style={{ flexDirection: "row", justifyContent: "space-between", width: 60, marginRight: 6 }}>
              <Octicons
                name="search" 
                size={22} 
                color={useColorScheme() === 'dark' ? Colors.light.background : Colors.dark.background}/>
              
              <MaterialCommunityIcons
                name="dots-vertical" 
                size={22} 
                color={useColorScheme() === 'dark' ? Colors.light.background : Colors.dark.background}/>
            </View>;
          }
        }}
      />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen 
        name="TalkPlace" 
        component={TalkPlaceScreen} 
        options={({ route }) => ({ 
          headerBackTitle: "Talks",
          headerTitleAlign: "center",
          title: route.params.name,
          headerRight: () => {
            return <View  style={{ flexDirection: "row", justifyContent: "space-between", width: 22, marginRight: 6}}>
              <MaterialCommunityIcons
                name="dots-vertical" 
                size={22} 
                color={useColorScheme() === 'dark' ? Colors.light.background : Colors.dark.background}/>
            </View>
          }, 
        })}
      />

    </Stack.Navigator>
  );
}

// TODO: add touchable opacity to icons & onClick() function with searching & editing
// TODO: add user avatar nxt to the name at the header of the dialog