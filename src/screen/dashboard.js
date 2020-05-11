import React from 'react';
import {SafeAreaView} from 'react-native';
import {Divider, Layout, Text, TopNavigation} from '@ui-kitten/components';
import {BottomNav} from '../component/bottomNav';
export const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BottomNav />
    </SafeAreaView>
  );
};
