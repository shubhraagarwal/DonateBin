import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/ScreenStyle/DonorItemStyles/Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import QRCode from 'react-native-qrcode-svg';

const DonorItemDetails = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <ImageBackground
      source={require('../../../assets/dummyImage.jpg')}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>
      <View style={[styles.modal, {height: hp('60%')}]}>
        <View style={{flex: 2}}>
          <TouchableOpacity style={styles.detailsHeader}>
            <Text style={{color: '#3A4A3D', fontSize: hp('3%')}}>
              Product name
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <View style={{flex: 2, justifyContent: 'center',alignItems:"center"}}>
            <QRCode
              value="http://awesome.link.qr"
              backgroundColor='transparent'
              size={hp('23%')}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Confirm')}
              style={styles.confirmButton}>
              <Text style={{color: '#fff', fontSize: hp('3%')}}>
                Donate
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default DonorItemDetails;
