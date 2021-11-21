import React, { useState, useEffect } from 'react';
import {PermissionsAndroid,Text, View} from 'react-native';
import styles from '../../styles/ScreenStyle/Landing/LandingStyles';
import ModalContent from '../../components/Landing/ModalContent';
import Geolocation from 'react-native-geolocation-service';
import Store from '../../store/Store'

const Test = ({navigation}) => {

  const [longitude, setLongitude] = useState(28.5934);
  const [latitude, setLatitude] = useState(77.2223);

  // async function hasLocationPermission() {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: 'Example App',
  //         message: 'Example App access to your location ',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       // console.log('You can use the location');
  //     } else {
  //       console.log('location permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // }
  // let setint;
  // useEffect(() => {
  //   setint = setInterval(() => {
  //     if (hasLocationPermission()) {
  //       Geolocation.getCurrentPosition(
  //         (position) => {
  //           console.log('898',position.coords.latitude,position.coords.longitude);
  //           setLatitude(position.coords.latitude);
  //           setLongitude(position.coords.longitude);
  //           Store.setLatitude(position.coords.latitude);
  //           Store.setLongitude(position.coords.longitude);
  //         },
  //         (error) => {
  //           console.log(error.code, error.message);
  //         },
  //         {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //       );
  //     }
  //   }, 1000);
  //   console.log('48',longitude, latitude);
  // }, []);

  // setTimeout(() => {
  //   clearInterval(setint);
  // }, 5000);

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <ModalContent navigation={navigation} />
      </View>
    </View>
  );
};

export default Test;
