import React from 'react';
import {Text, View} from 'react-native';
import SignInModal from '../../components/Auth/SignInModal';
import styles from '../../styles/ScreenStyle/Authentication/PhoneAuth';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <SignInModal navigation={navigation} />
      </View>
    </View>
  );
};

export default SignIn;
