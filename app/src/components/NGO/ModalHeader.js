import React from 'react';
import { View} from 'react-native';
import styles from '../../styles/ScreenStyle/NGO/DelDetails';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';

const ModalHeader = ({onChangeHeight, height}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon
        hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
        onPress={() => onChangeHeight(height)}
        type="entypo"
        name={height === '35%' ? 'chevron-up' : 'chevron-down'}
        color="#000"
        size={hp('5%')}
      />
    </View>
  );
};

export default ModalHeader;
