import React, {useState, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../../styles/ScreenStyle/NGO/DelDetails';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ModalHeader from '../../components/NGO/ModalHeader';
import ModalList from '../../components/NGO/ModalList';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Store from '../../store/Store';
import Axios from 'axios';

const DelDetails = () => {
  const [height, setheight] = useState('35%');

  const onChangeHeight = height => {
    height === '35%' ? setheight('85%') : setheight('35%');
  };

  const [data, setdata] = useState([]);
  useEffect(() => {
    Axios.get('http://10.0.2.2:5000/getDonations')
      .then(res => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.58,
          longitude: 77.05,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}>
        {/* {data.map(res => (
          <View>
            {res.latitude && res.longitude ? (
              <Marker
                key={res.uid}
                title={res.prodName}
                coordinate={{
                  longitude: res.longitude,
                  latitude: res.latitude,
                }}>
                <Image
                  style={{height: 10, width: 10}}
                  source={{uri: `data:image/png;base64,${res.image}`}}
                />
              </Marker>
            ) : null} */}
          {/* </View> */}
        {/* ))} */}
      </MapView>
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
            <ModalList data={data} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DelDetails;
