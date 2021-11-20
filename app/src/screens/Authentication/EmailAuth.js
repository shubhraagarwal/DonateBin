import React, { useState, useEffect } from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles/ScreenStyle/Authentication/PhoneAuth';
import LoginModal from '../../components/Auth/LoginModal';
import auth from '@react-native-firebase/auth';

const PhoneAuth = ({navigation}) => {

  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);


  if(!user){return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <LoginModal navigation={navigation} />
      </View>
    </View>
  );}else{
    setTimeout(() => {
      // navigation.navigate('DelDetails');
       // ! put a check later
       navigation.navigate('LandDonor');
    }, 10);
    return null
  }
};

export default PhoneAuth;
