import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/ScreenStyle/DonorConfirmation/DonorConfirmationStyles';
import Store from '../../store/Store';
import LottieView from 'lottie-react-native';

const DonorConfirmation = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={{
        uri: `data:image/png;base64,${Store.imageBase64}`,
      }}>
      <View style={styles.container}>
        <View style={{flex: 3}}>
          <Text
            style={styles.heading}>{`Thank you for your kind \n deed`}</Text>
          <Text style={styles.subHeading}>An NGO will contact you soon</Text>
        </View>
        <View style={{flex: 5}}>
          <LottieView
            source={require('../../../assets/donation-box.json')}
            autoPlay
            loop
          />
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.push('LandDonor',{list:true});
            }}
            style={styles.button}>
            <Text style={{color: '#fff', fontSize: 17}}>
              Return to Home Screen
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default DonorConfirmation;
