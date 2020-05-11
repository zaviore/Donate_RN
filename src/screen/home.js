import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import {Button, Layout, Text} from '@ui-kitten/components';
import {styles} from '../css/styles';
import cat from '../component/images/cat.png';

export const HomeScreen = ({navigation}) => {
  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  const navigateRegister = () => {
    navigation.navigate('register');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 50,
        }}>
        <Image source={cat} alt="cat" style={styles.login} />
      </Layout>
      <Layout
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}>
        <Text style={styles.textH1}>Welcome to Mejik Foundation!</Text>
        <Layout style={{marginTop: 10}}>
          <Text style={styles.textDescription}>
            Mejik Foundation is a network that facilitates and empowers the
            voice of mejik communities
          </Text>
        </Layout>
      </Layout>
      <Layout
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 15,
        }}>
        <Button onPress={navigateLogin} style={styles.Button}>
          Login
        </Button>
        <Button onPress={navigateRegister} style={styles.buttonOutline}>
          <Text style={styles.registerText}>Register</Text>
        </Button>
      </Layout>
    </SafeAreaView>
  );
};
