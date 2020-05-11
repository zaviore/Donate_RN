import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import {styles} from '../css/styles';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Input,
  Button,
} from '@ui-kitten/components';
import avatar from '../component/images/Ellipse.png';

const BackIcon = props => <Icon {...props} name="arrow-back" />;
const Phone = props => <Icon {...props} name="phone" />;
export const Register = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateLoginPass = () => {
    navigation.navigate('nextLogin');
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{flex: 1}}>
        <Layout style={{flex: 1, padding: 30}}>
          <Text category="h4">Email</Text>
          <Text>Please complete your details below to register</Text>

          <Text style={{fontWeight: 'bold', marginTop: 20}}>Fullname</Text>
          <Input style={{marginTop: 10}} placeholder="e.g. zamhadi" />
          <Text style={{fontWeight: 'bold', marginTop: 20}}>Email</Text>
          <Input style={{marginTop: 10}} placeholder="e.g. zamhadi@gmail.com" />
          <Text style={{fontWeight: 'bold', marginTop: 20}}>Phone Number</Text>
          <Input style={{marginTop: 10}} accessoryLeft={Phone} />
          <Button onPress={navigateLoginPass} style={styles.buttonLogin}>
            Continue
          </Button>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};
