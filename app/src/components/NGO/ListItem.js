import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/ScreenStyle/NGO/DelDetails';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native'

const ListItem = ({item}) => {

const navigation=useNavigation()

  return (
    <TouchableOpacity 
    onPress={() => {
        navigation.navigate('ItemDetails',{item:item})
    }}
    style={styles.listItemContainer}>
      <Image
        source={require('../../../assets/dummyImage.jpg')}
        style={styles.listImage}
      />
      <View
        style={{
          paddingLeft: wp('5%'),
        }}>
        <Text style={styles.itemHeader}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;