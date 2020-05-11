import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './home';
import {DetailsScreen} from './detail';
import {Login} from './login';
import {Loginpass} from './loginpass';
import {Register} from './register';
import {Dashboard} from './dashboard';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none" options={{gestureDirection: 'horizontal'}}>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Details" component={DetailsScreen} />
    <Screen name="Login" component={Login} />
    <Screen name="nextLogin" component={Loginpass} />
    <Screen name="register" component={Register} />
    <Screen name="dashboard" component={Dashboard} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
