import React, { useState } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QrCode = () => {

    const [qrcode, setqrcode] = useState();

  const onSuccess = e => {
    try {
        console.log(e.data);
        setqrcode(e.data);

    } catch (error) {
        console.log(error);
    }
  };
  return (
    <QRCodeScanner
      onRead={onSuccess}
    />
  );
};

export default QrCode;
