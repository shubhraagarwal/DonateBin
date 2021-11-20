import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles/ScreenStyle/Authentication/PhoneAuth';
import Verify from '../../components/Auth/Verify';

const Password = ({route,navigation}) => {
  const {email}=route.params;

  return (
    <View style={styles.container}>
      <View style={styles.verifyModal}>
        <Verify email={email} navigation={navigation} />
      </View>
    </View>
  );
};

export default Password;
