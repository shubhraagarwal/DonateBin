import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles/ScreenStyle/Authentication/PhoneAuth';
import LoginModal from '../../components/Auth/LoginModal';
import auth from '@react-native-firebase/auth';
import Axios from 'axios';
import Store from '../../store/Store';

const PhoneAuth = ({navigation}) => {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    console.log(user.email);
    Axios.get(`http://10.0.2.2:5000/getInfo?email=${user.email}`)
      .then(res => {
        console.log(res.data);
        Store.setBasicUserInfo(res.data);
        res.data.type === 'NGO'
          ? navigation.navigate('DelDetails')
          : navigation.navigate('LandDonor', {list: false});
      })
      .catch(err => {
        console.log("24",err);
      });
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (!user) {
    return (
      <View style={styles.container}>
        <View style={styles.modal}>
          <LoginModal navigation={navigation} />
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default PhoneAuth;
