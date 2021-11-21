import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from '../../styles/ScreenStyle/Donor/DonorStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const NoItems = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 5,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Icon
          hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
          onPress={() => navigation.navigate('DonorProfile')}
          type="material-community"
          name={'drag-horizontal-variant'}
          color="#000"
          size={hp('5%')}
          style={{marginLeft: wp('5%')}}
        />
        <Image
          style={styles.image}
          source={require('../../../assets/Donor.png')}
        />
      </View>
      <View style={{flex: 4, justifyContent: 'center'}}>
        <Text style={styles.mainText}>
          Uh oh, Looks like there are no active donations right now, click the
          Camera button on the bottom right corner to start the donation process
        </Text>
      </View>
      <View style={{flex: 1.5, justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={() => navigation.navigate('Camera')}>
          <Icon type="ant-design" name="camerao" size={35} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoItems;
