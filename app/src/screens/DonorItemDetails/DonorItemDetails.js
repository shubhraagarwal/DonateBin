import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/ScreenStyle/DonorItemStyles/Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import QRCode from 'react-native-qrcode-svg';
import Store from '../../store/Store';

const DonorItemDetails = ({route, navigation}) => {
  const {item} = route.params;
  console.log(Store)

  return (
    <ImageBackground
      source={{
        uri:`data:image/png;base64,${item.image}`
      }}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>
      <View style={[styles.modal, {height: hp('60%')}]}>
        <View style={{flex: 2}}>
          <TouchableOpacity style={styles.detailsHeader}>
            <Text style={{color: '#3A4A3D', fontSize: hp('3%')}}>
             {item.prodName}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <View style={{flex: 2, justifyContent: 'center',alignItems:"center"}}>
            <QRCode
              value={item.id}
              backgroundColor='transparent'
              size={hp('23%')}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LandDonor')}
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
