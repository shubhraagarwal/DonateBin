import React, { useState, useEffect } from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import Store from '../../store/Store';
import styles from '../../styles/ScreenStyle/Donor/DonorStyles';

const ProdDetails = ({navigation}) => {

    const [prodName, setprodName] = useState('hello');

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
          <View style={{flex: 5,justifyContent:"center"}}>
              <Input
              placeholder={'Product Type'}
              value={prodName}
              editable={false}
              style={styles.input}
              placeholderTextColor='#000'
              />
            <TouchableOpacity style={styles.confirmationButton}
            onPress={() => {
              navigation.navigate('DonorConfirmation');
            }}
            >
                <Text style={{color:"#fff",fontSize:25,}} >
                    Confirm
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProdDetails;
