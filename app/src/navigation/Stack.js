import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test from '../screens/Landing/Landing';
import EmailAuth from '../screens/Authentication/EmailAuth';
import Password from '../screens/Authentication/Password';
import DelDetails from '../screens/NGO/DelDetails';
import ItemDetails from '../screens/NGO/ItemDetails';
import Confirm from '../screens/Confirmation/Confirm';
import SignIn from '../screens/Authentication/SignIn';
import LandDonor from '../screens/Donor/LandDonor';
import Camera from '../screens/Donor/Camera';

const StackNav = createNativeStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <StackNav.Navigator
        initialRouteName="Landing"
        screenOptions={{headerShown: false}}>
        <StackNav.Screen component={Test} name="Landing" />
        <StackNav.Screen component={EmailAuth} name="EmailAuth" />
        <StackNav.Screen component={Password} name='Password'/>
        <StackNav.Screen component={DelDetails} name='DelDetails'/>
        <StackNav.Screen component={ItemDetails} name='ItemDetails' />
        <StackNav.Screen component={Confirm} name='Confirm' />
        <StackNav.Screen component={SignIn} name='SignIn'/>
        <StackNav.Screen component={LandDonor} name='LandDonor'/>
        <StackNav.Screen component={Camera} name='Camera'/>
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
