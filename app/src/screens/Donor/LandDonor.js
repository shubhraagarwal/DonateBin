import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from '../../styles/ScreenStyle/Donor/DonorStyles';

const LandDonor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 5, justifyContent: 'center'}}>
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

export default LandDonor;
