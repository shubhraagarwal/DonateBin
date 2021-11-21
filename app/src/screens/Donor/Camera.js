import React, {useState,useRef} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles/ScreenStyle/Donor/DonorStyles';
import {RNCamera} from 'react-native-camera';
import Store from '../../store/Store';

const Camera = ({navigation}) => {
  let cameraRef = useRef();
  const [imgBase64, setimgBase64] = useState();

  const takePicture = async () => {
    if (cameraRef) {
      const options = {quality: 5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      setimgBase64(data.base64);
      Store.setImageBase64(data.base64);
      console.log(data.base64);
      navigation.navigate('ProdDetails');
    }
  };

  return (
    <View style={styles.camcontainer}>
      <RNCamera
        style={styles.campreview}
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
      />
      <View style={styles.captureContainer}>
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={styles.captureText}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Camera;
