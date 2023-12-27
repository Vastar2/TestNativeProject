import React, {FC} from 'react';
import {Text, ScrollView, View, FlatList, Image} from 'react-native';
import {styles} from '../styles/styles';

interface GalleryProps {
  queryName: string;
  currentData: any[];
}

const Gallery: FC<GalleryProps> = ({queryName, currentData}) => {
  const renderListItem = ({
    item,
  }: {
    item: {id: string; description: string; urls: {raw: string}};
  }) => (
    <View style={styles.imagesItem}>
      <Image source={{uri: item.urls.raw}} style={styles.image} />
      <Text style={styles.description}>
        {item.description || `Just a ${queryName}`}
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        {`${queryName[0].toUpperCase()}${queryName.slice(
          1,
          queryName.length,
        )}` || 'Some text'}
      </Text>
      <FlatList
        data={currentData}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.imagesList}
      />
    </ScrollView>
  );
};

export default Gallery;
