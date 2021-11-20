import React, {useState, useEffect} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/ScreenStyle/Authentication/PhoneAuth';

const LoginModal = ({navigation}) => {
  const [name, setname] = useState('');
  const [email, setemail] = useState();
  const [type, settype] = useState('donor');

  return (
    <View style={styles.modalContainer}>
      <View style={{flex: 1.25, justifyContent: 'center'}}>
        <Text style={styles.modalHead}>Enter Details</Text>
      </View>
      <View style={{flex: 5.5, justifyContent: 'center'}}>
        <TextInput
          placeholder={
            type === 'donor' ? `Name` : type === 'NGO' ? 'Name as NGO' : null
          }
          onChangeText={text => setname(text)}
          style={styles.textInput}
          keyboardType="default"
          autoComplete="off"
          autoCorrect={false}
          placeholderTextColor="grey"
        />
        <TextInput
          placeholder={
            type === 'donor'
              ? `Email`
              : type === 'NGO'
              ? 'Email of your NGO'
              : null
          }
          placeholderTextColor="grey"
          onChangeText={text => setemail(text)}
          style={styles.textInput}
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
        />
      </View>
      <View style={{flex: 3.25, justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => {
            if (email !== '' && name !== '') {
              navigation.navigate('Password',{email:email})
            } else {
              Alert.alert('Please fill all the details');
            }
          }}>
          <Text style={styles.modalButtonText}>
            {type === 'donor' ? `DONATE` : type === 'NGO' ? 'REGISTER' : null}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: '1.5%'}}
          onPress={() =>
            navigation.navigate('SignIn')
          }>
          <Text style={styles.checkText}>
            Already a user.. Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: '1.5%'}}
          onPress={() =>
            type === 'donor' ? settype('NGO') : settype('donor')
          }>
          <Text style={styles.checkText}>
            {type === 'donor'
              ? `Not a donor? Register as an NGO`
              : type === 'NGO'
              ? 'Not an NGO? Register as a donor'
              : null}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginModal;
