import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles/ScreenStyle/NGO/DelDetails';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ModalHeader from '../../components/NGO/ModalHeader';
import ModalList from '../../components/NGO/ModalList';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Store from '../../store/Store';

const DelDetails = () => {
  const [height, setheight] = useState('35%');

  const onChangeHeight = height => {
    height === '35%' ? setheight('85%') : setheight('35%');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.58,
          longitude: 77.05,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View
        style={[
          styles.modal,
          {height: hp(height), opacity: height === '35%' ? 0.7 : 1},
        ]}>
        <View style={styles.modalContainer}>
          <View style={{flex: height === '35%' ? 1.5 : 1}}>
            <ModalHeader onChangeHeight={onChangeHeight} height={height} />
          </View>
          <View style={{flex: 8}}>
            <ModalList />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DelDetails;
