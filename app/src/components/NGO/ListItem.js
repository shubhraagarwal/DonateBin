import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/ScreenStyle/NGO/DelDetails';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const ListItem = ({item, donor}) => {
  const navigation = useNavigation();
  console.log(item);
  return (
    <TouchableOpacity
      onPress={() => {
        donor
          ? navigation.navigate('DonorItemDetails', {item})
          : navigation.navigate('ItemDetails', {item: item});
      }}
      style={donor ? styles.donorListItemContainer : styles.listItemContainer}>
      {item.image ? (
        <Image
          source={{
            uri:`data:image/png;base64,${item.image}`
          }}
          style={styles.listImage}
        />
      ) : (
        <Image
          source={require('../../../assets/dummyImage.jpg')}
          style={styles.listImage}
        />
      )}
      <View
        style={{
          paddingLeft: wp('5%'),
        }}>
        <Text style={styles.itemHeader}>{`${item.prodName} `}</Text>
        <Text>{item.prodName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
