import React, {useState, useEffect} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/ScreenStyle/Authentication/PhoneAuth';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';

const Verify = ({email,navigation}) => {
  const [pass, setpass] = useState();
  const [rePass, setrePass] = useState();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
        if (error.code === 'auth/weak-password') {
          Alert.alert('Minimum password length is 6');
        }
        console.error(error);
      });
  };

  if (!user) {
    return (
      <View style={styles.otpContainer}>
        <View style={{flex: 3}}>
          <Text style={styles.modalHead}>Enter Password</Text>
          <TextInput
            style={[styles.textInput, {marginTop: hp('7%')}]}
            placeholder="Enter Password"
            onChangeText={text => setpass(text)}
            secureTextEntry={true}
            placeholderTextColor="grey"
          />
          <TextInput
            placeholderTextColor="grey"
            style={[styles.textInput, {marginTop: hp('2%')}]}
            placeholder="Re-enter Password"
            onChangeText={text => setrePass(text)}
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => {
              if (pass === rePass) {
                signUp();
              } else {
                alert('Password does not match');
              }
            }}
            style={[styles.modalButton, {marginTop: hp('5%')}]}>
            <Text style={styles.modalButtonText}>CONFIRM</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 2}} />
      </View>
    );
  }
  else{
      navigation.navigate('DelDetails')
      return null
  }
};

export default Verify;
