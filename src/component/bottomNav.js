import React from 'react';
import {Image} from 'react-native';
import {Article} from './Article';
import {Donate} from './donate';
import {Setting} from './setting';
import article from './images/donate.png';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export function BottomNav() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#CD4559',
      }}>
      <Tab.Screen
        name="Article"
        component={Article}
        options={{
          tabBarLabel: 'Article',
          tabBarIcon: ({color, size}) => (
            <Icon name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Donate"
        component={Donate}
        options={{
          tabBarLabel: 'Donate',
          tabBarIcon: ({color, size}) => (
            <Image
              source={article}
              alt="as"
              style={{width: 60, height: 60, marginBottom: 25}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',

          tabBarIcon: ({color, size}) => (
            <Icon2 name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
