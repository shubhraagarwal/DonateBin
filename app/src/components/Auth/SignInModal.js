import React, {useState, useEffect} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/ScreenStyle/Authentication/PhoneAuth';
import auth from '@react-native-firebase/auth';

const LoginModal = ({navigation}) => {
  const [pass, setpass] = useState('');
  const [email, setemail] = useState('');
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

  const SignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        console.log('User account created & signed in!');
        // ! put a check later
        navigation.navigate('LandDonor');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  if (initializing) return null;

  if (!user) {
    return (
      <View style={styles.modalContainer}>
        <View style={{flex: 1.25, justifyContent: 'center'}}>
          <Text style={styles.modalHead}>Enter Details to SignIn</Text>
        </View>
        <View style={{flex: 5.5, justifyContent: 'center'}}>
          <TextInput
            placeholder="Email"
            onChangeText={text => setemail(text)}
            style={styles.textInput}
            keyboardType="email-address"
            autoComplete="off"
            autoCorrect={false}
            placeholderTextColor="grey"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="grey"
            onChangeText={text => setpass(text)}
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>
        <View style={{flex: 3.25, justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              if (email !== '' && pass !== '') {
                SignIn();
              } else {
                Alert.alert('Please fill all the details');
              }
            }}>
            <Text style={styles.modalButtonText}>SIGNIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    navigation.navigate('DelDetails');
    return null;
  }
};

export default LoginModal;
