import React from 'react';
import {Text, View, TouchableOpacity,Linking} from 'react-native';
import styles from '../../styles/ScreenStyle/QRCode/QRCodeStyles';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QrCode = () => {
  const onSuccess = e => {
    try {
        console.log(e.data);
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <QRCodeScanner
      onRead={()=>onSuccess()}
    />
  );
};

export default QrCode;
