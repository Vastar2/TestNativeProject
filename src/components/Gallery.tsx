import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {styles} from '../styles/styles';

const Gallery = ({temp}: {temp: string}) => {
  const Data = [
    {id: '1', name: 'John'},
    {id: '2', name: 'Jane'},
    {id: '3', name: 'Alice'},
    {id: '4', name: 'Poul'},
    {id: '5', name: 'Max'},
    {id: '6', name: 'Anton'},
  ];

  const renderListItem = ({item}: {item: {id: string; name: string}}) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{temp || 'Some text'}</Text>
      <FlatList
        data={Data}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Gallery;
