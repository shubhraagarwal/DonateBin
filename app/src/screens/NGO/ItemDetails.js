import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../../styles/ScreenStyle/NGO/DelDetails';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ItemDetails = ({route,navigation}) => {
  const {item} = route.params;

  return (
    <ImageBackground
      source={{
        uri: `data:image/png;base64,${item.image}`
      }}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>
      <View style={[styles.modal, {height: hp('40%')}]}>
        <View style={{flex: 3}}>
          <TouchableOpacity style={styles.detailsHeader}>
            <Text style={{color: '#3A4A3D', fontSize: hp('3%')}}>
              Product Details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <View style={{flex:1,justifyContent:"center"}} ><Text style={styles.HeaderText} >{item.prodName}</Text>
          <Text style={styles.descriptionText} >{item.description}</Text>
          </View>
          <View style={{flex:1,justifyContent:"space-around"}} >
          <Text style={styles.confirmText} >Press to confirm booking</Text>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('Confirm',{item})}
          style={styles.confirmButton} >
            <Text style={{color:"#fff",fontSize:hp('3%')}} >Confirm Booking</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ItemDetails;
