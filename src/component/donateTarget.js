import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from '../css/styles';
import test from '../component/images/img.jpg';
import {Layout, Text, Card, Avatar, Button} from '@ui-kitten/components';
export const Donatarget = ({props}) => {
  return (
    <Layout style={{flex: 1}}>
      <Layout style={{padding: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
          Donation target
        </Text>

        <ScrollView
          horizontal
          style={{flexDirection: 'row'}}
          showsHorizontalScrollIndicator={false}>
          <Button style={styles.donating}>
            <Text>All</Text>
          </Button>
          <Button style={styles.donating}>
            <Text>Panti Jompo</Text>
          </Button>
          <Button style={styles.donating}>
            <Text>Panti Asuhan</Text>
          </Button>
          <Button style={styles.donating}>
            <Text>Panti Pijat</Text>
          </Button>
        </ScrollView>
      </Layout>
      <Layout style={{flexDirection: 'row'}}>
        <Layout style={{flex: 1, padding: 10}}>
          <Card style={{alignItems: 'center'}}>
            <Avatar source={test} size="large" />
            <Text style={{fontSize: 18}}>Kevin</Text>
            <Text style={{color: 'grey'}}>Lansia</Text>
          </Card>
        </Layout>

        <Layout style={{flex: 1, padding: 10}}>
          <Card style={{alignItems: 'center'}}>
            <Avatar source={test} size="large" />
            <Text style={{fontSize: 18}}>Kevin</Text>
            <Text style={{color: 'grey'}}>Lansia</Text>
          </Card>
        </Layout>
        <Layout style={{flex: 1, padding: 10}}>
          <Card style={{alignItems: 'center'}}>
            <Avatar source={test} size="large" />
            <Text style={{fontSize: 18}}>Kevin</Text>
            <Text style={{color: 'grey'}}>Lansia</Text>
          </Card>
        </Layout>
      </Layout>
      <Layout style={{flexDirection: 'row'}}>
        <Layout style={{flex: 1, padding: 10}}>
          <Card style={{alignItems: 'center'}}>
            <Avatar source={test} size="large" />
            <Text style={{fontSize: 18}}>Kevin</Text>
            <Text style={{color: 'grey'}}>Lansia</Text>
          </Card>
        </Layout>

        <Layout style={{flex: 1, padding: 10}}>
          <Card style={{alignItems: 'center'}}>
            <Avatar source={test} size="large" />
            <Text style={{fontSize: 18}}>Kevin</Text>
            <Text style={{color: 'grey'}}>Lansia</Text>
          </Card>
        </Layout>
        <Layout style={{flex: 1, padding: 10}}>
          <Card style={{alignItems: 'center'}}>
            <Avatar source={test} size="large" />
            <Text style={{fontSize: 18}}>Kevin</Text>
            <Text style={{color: 'grey'}}>Lansia</Text>
          </Card>
        </Layout>
      </Layout>
    </Layout>
  );
};
