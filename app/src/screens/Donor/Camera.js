import React, {useState, useRef} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles/ScreenStyle/Donor/DonorStyles';
import {RNCamera} from 'react-native-camera';
import Store from '../../store/Store';
import Axios from 'axios';
import FormData from 'form-data';

const Camera = ({navigation}) => {
  let cameraRef = useRef();
  const [imgBase64, setimgBase64] = useState();
  const [itemType, setitemType] = useState();

  const takePicture = async () => {
    if (cameraRef) {
      const options = {quality: 5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      setimgBase64(data.base64);
      Store.setImageBase64(data.base64);
      console.log('heoi');
      ImageDetection(data.base64);
      
    }
  };

  const ImageDetection = (image) => {
    console.log('object \n')
    let data=new FormData();
    data.append('string',image)
    Axios.post('http://10.0.2.2:80/predict',data)
      .then(res => {
        setitemType(res.data);
        navigation.navigate('ProdDetails',{itemType:res.data,imgBase64:image});
      })
      .catch(err => {
        console.log(err);
      });
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
