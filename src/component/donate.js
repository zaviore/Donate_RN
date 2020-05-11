import React from 'react';
import {SafeAreaView} from 'react-native';
import {Donatarget} from './donateTarget';
import {
  Divider,
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import Iconhistory from 'react-native-vector-icons/MaterialCommunityIcons';

const BackIcon = props => <Icon {...props} name="close-outline" />;

export const Donate = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  const navigateHistory = () => {
    navigation.navigate('history');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  const titleprops = () => (
    <Text style={{fontWeight: 'bold', fontSize: 17}}> Donation </Text>
  );
  const History = props => (
    <Iconhistory
      {...props}
      name="history"
      onPress={navigateHistory}
      size={25}
    />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        alignment="center"
        accessoryLeft={BackAction}
        accessoryRight={History}
        title={titleprops}
      />
      <Divider />
      <Donatarget />
    </SafeAreaView>
  );
};
