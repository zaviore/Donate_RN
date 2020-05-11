import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Image} from 'react-native';
import {Divider, Layout, Text} from '@ui-kitten/components';
import test from '../component/images/sky.png';
const DATA = [
  {
    id: '1',
    title: 'First Item',
    description: 'Dalam upaya memperkenalkan keaneka...',
  },
  {
    id: '2',
    title: 'Second Item',
    description: 'Dalam upaya memperkenalkan keaneka...',
  },
  {
    id: '3',
    title: 'Third Item',
    description: 'Dalam upaya memperkenalkan keaneka...',
  },
  {
    id: '4',
    title: 'Third Item',
    description: 'Dalam upaya memperkenalkan keaneka...',
  },
  {
    id: '5',
    title: 'Third Item',
    description: 'Dalam upaya memperkenalkan keaneka...',
  },
  {
    id: '6',
    title: 'Third Item',
    description: 'Dalam upaya memperkenalkan keaneka...',
  },
  {
    id: '7',
    title: 'Third Item',
    description: 'Dalam upaya memperkenalkan keaneka...',
  },
];

const Item = ({title, description}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Image
          source={test}
          alt="asda"
          style={{width: 100, height: 100, borderRadius: 10, marginLeft: 10}}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export const Article = () => {
  return (
    <Layout style={{height: '100%'}}>
      <Layout style={{padding: 15}}>
        <Text category="h5">Article</Text>
      </Layout>
      <Divider />

      {/* <List style={styles.container} data={data} renderItem={renderItem} /> */}

      <SafeAreaView style={{marginTop: 10}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item title={item.title} description={item.description} />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 7,
    flex: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
