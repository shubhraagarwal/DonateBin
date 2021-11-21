import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import Store from '../../store/Store';
import styles from '../../styles/ScreenStyle/Donor/DonorStyles';
import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';

const ProdDetails = ({navigation, route}) => {
  const {itemType, imgBase64} = route.params;
  const [prodName, setprodName] = useState(itemType.class_name);

  const Submit = () => {
    Axios.post('http://10.0.2.2:5000/donate', {
      uid: uuidv4(),
      email: Store.basicUserInfo.email,
      prodName: prodName,
      name: Store.basicUserInfo.name,
      image: imgBase64,
    })
      .then(res => {
        console.log(res);
        navigation.navigate('DonorConfirmation');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ProdImage}
        source={{
          uri: `data:image/png;base64,${Store.imageBase64}`,
        }}>
        <View style={styles.ProdDetail}>
          <Icon
            type="ionicons"
            name="arrow-back"
            color="#000"
            size={30}
            style={styles.back}
          />
          <View style={styles.modalHeadingContainer}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Product Details
            </Text>
          </View>
          <View style={{flex: 5, justifyContent: 'center'}}>
            <Input
              placeholder={`${itemType}`}
              value={prodName}
              onChangeText={text => setprodName(text)}
              style={styles.input}
              placeholderTextColor="#000"
            />
            <TouchableOpacity
              style={styles.confirmationButton}
              onPress={() => {
                Submit();
              }}>
              <Text style={{color: '#fff', fontSize: 25}}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProdDetails;
