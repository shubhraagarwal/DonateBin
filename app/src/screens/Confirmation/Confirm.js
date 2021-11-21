import LottieView from 'lottie-react-native';
import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/ScreenStyle/Confirmation/ConfirmStyles';

const Confirm = ({navigation, item}) => {
  return (
    <ImageBackground
      source={{
        uri: `data:image/png;base64,${item.image}`,
      }}
      style={{flex: 1}}
      resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.head}>Booking Successful</Text>
        <Text style={styles.det}> Details have been sent to you via SMS </Text>
        <LottieView
          source={require('../../../assets/donation-box.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DelDetails');
          }}
          style={styles.returnButton}>
          <Text style={{color: '#fff', fontSize: 25}}>
            Return to Home Screen
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Confirm;
