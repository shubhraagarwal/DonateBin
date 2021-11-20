import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from '../../styles/ScreenStyle/NGO/DelDetails';
import ListItem from './ListItem';

const ModalList = () => {
  const data = [
    {
      id: 1,
      title: 'Title 1',
      description: 'Description 1',
      image: '../../../assets/dummyImage.jpg',
    },
    {
      id: 2,
      title: 'Title 2',
      description: 'Description 2',
      image: '../../../assets/dummyImage.jpg',
    },
    {
      id: 3,
      title: 'Title 3',
      description: 'Description 3',
      image: '../../../assets/dummyImage.jpg',
    },
    {
      id: 4,
      title: 'Title 4',
      description: 'Description 4',
      image: '../../../assets/dummyImage.jpg',
    },
  ];

  return (
    <View style={styles.listContainer}>
      <FlatList data={data} renderItem={({item}) => <ListItem item={item} />} />
    </View>
  );
};

export default ModalList;
