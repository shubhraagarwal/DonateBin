import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import styles from '../../styles/ScreenStyle/Profile/ProfileStyles';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation}) => {
  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.push('EmailAuth');
        console.log('User signed out!');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={{flex: 5}}>
          <ProfileHeader />
        </View>
        <View style={{flex: 3, justifyContent: 'space-evenly'}}>
          <TouchableOpacity onPress={()=>logout()} style={styles.logout} >
            <Text style={styles.logoutText} >Log-Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
