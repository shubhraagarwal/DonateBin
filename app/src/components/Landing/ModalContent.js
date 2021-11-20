import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/ScreenStyle/Landing/LandingStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ModalContent = ({ navigation }) => {
  
  return (
    <View style={styles.ModalContainer}>
      <View style={{flex: 4, justifyContent: 'center'}}>
        <Text style={styles.modalHeading}>Modal Content</Text>
      </View>
      <View style={{flex: 6, justifyContent: 'center'}}>
        <Text style={styles.modalData}>
          Pellentesque libero lobortis arcu eget. {`\n`}Pellentesque libero
          lobortis arcu eget. {`\n`}Pellentesque libero lobortis arcu eget.
        </Text>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => navigation.navigate('EmailAuth')}>
          <Text style={{color: '#000', fontSize: hp('2.75%')}}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalContent;
