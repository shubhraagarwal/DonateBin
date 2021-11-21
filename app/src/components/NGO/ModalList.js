import React, {useState, useEffect} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from '../../styles/ScreenStyle/NGO/DelDetails';
import ListItem from './ListItem';

const ModalList = ({data}) => {
  return (
    <View style={styles.listContainer}>
      <FlatList data={data} renderItem={({item}) => <ListItem item={item} />} />
    </View>
  );
};

export default ModalList;
