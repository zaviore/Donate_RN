import React from 'react';
import {Avatar, Divider, Layout, Text} from '@ui-kitten/components';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/AntDesign';

import sky from './images/sky.png';

export const Setting = () => {
  return (
    <Layout style={{height: '100%'}}>
      <Layout>
        <Image source={sky} alt="aa" style={{height: 250, width: '100%'}} />
        <Avatar
          style={{
            width: 150,
            height: 150,
            alignSelf: 'center',
            marginTop: -100,
          }}
          source={sky}
        />
        <Layout style={{margin: 10, alignItems: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Zamhadi</Text>
          <Text>zamhadi@gmail.com</Text>
          <Text>+628990201011</Text>
        </Layout>
      </Layout>
      <Divider style={{height: 10}} />
      <Layout style={{padding: 20}}>
        <Layout style={{flexDirection: 'row', paddingVertical: 10}}>
          <Icon name="history" alt="hitory" size={30} style={{flex: 1}} />
          <Text style={{alignSelf: 'center', flex: 5, fontWeight: 'bold'}}>
            Donation History
          </Text>
        </Layout>
        <Layout style={{flexDirection: 'row', paddingVertical: 10}}>
          <Icon2 name="unlock" alt="hitory" size={30} style={{flex: 1}} />
          <Text style={{alignSelf: 'center', flex: 5, fontWeight: 'bold'}}>
            Change Password
          </Text>
        </Layout>
      </Layout>
      <Divider style={{height: 10}} />
      <Layout style={{padding: 20}}>
        <Layout style={{flexDirection: 'row', paddingVertical: 10}}>
          <Icon3
            name="logout"
            alt="hitory"
            size={30}
            style={{flex: 1}}
            color="#CD4559"
          />
          <Text
            style={{
              alignSelf: 'center',
              flex: 5,
              fontWeight: 'bold',
              color: '#CD4559',
            }}>
            Logout
          </Text>
        </Layout>
      </Layout>
    </Layout>
  );
};
