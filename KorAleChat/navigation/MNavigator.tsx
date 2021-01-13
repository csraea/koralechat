import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TalkScreen from '../screens/TalkScreen';
import TabTwoScreen from '../screens/StatusScreen';
import { ContactsParamList, MParamList, TabOneParamList, TabTwoParamList } from '../types';

import { Fontisto } from '@expo/vector-icons'
import Contacts from '../screens/Contacts';

const MTab = createMaterialTopTabNavigator<MParamList>();

export default function MNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MTab.Navigator
      initialRouteName="Talks"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].text,
        style: {
          backgroundColor: Colors[colorScheme].tint,
        },
        labelStyle: {
          fontWeight: "bold"
        },
        indicatorStyle: {
          height: 4,
          backgroundColor:  Colors[colorScheme].text
        },
        showIcon: true,
        tabStyle: {
          maxHeight: 38,
        }
      }}>
      <MTab.Screen

        // TODO: change the width of the tab according to the icon

        name="Contacts"
        component={ContactsNavigator}
        options={{
      
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="message-plus" color={color} size={36} style={{marginTop: -14, marginRight: -10, marginLeft: -7}}/>
        }}
      />
      <MTab.Screen
        name="Talks"
        component={TalkScreen}
      />
      <MTab.Screen
        name="Status"
        component={TabTwoNavigator}
      />
    </MTab.Navigator> 
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ContactsStack = createStackNavigator<ContactsParamList>();

function ContactsNavigator() {
  return (
    <ContactsStack.Navigator>
      <ContactsStack.Screen
        name="ContactsScreen"
        component={Contacts}
        options={{ headerTitle: 'Create a new Talk', headerStyle: {
          backgroundColor: Colors[useColorScheme()].background}, headerTintColor: Colors[useColorScheme()].tint }}
      />
    </ContactsStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
