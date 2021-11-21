import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/ScreenStyle/NGO/DelDetails';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const ModalHeader = ({onChangeHeight, height}) => {

  const navigation = useNavigation();

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <Icon
        hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
        onPress={() => navigation.navigate('Profile')}
        type="material-community"
        name={'drag-horizontal-variant'}
        color="#000"
        size={hp('5%')}
      />
      <View style={{marginRight: wp('5%')}}>
        <Icon
          hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
          onPress={() => onChangeHeight(height)}
          type="entypo"
          name={height === '35%' ? 'chevron-up' : 'chevron-down'}
          color="#000"
          size={hp('5%')}
        />
      </View>
      <View />
    </View>
  );
};

export default ModalHeader;
