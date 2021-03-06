import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from '../../styles/ScreenStyle/Donor/DonorStyles';
import ListItem from '../../components/NGO/ListItem';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ListData = ({data, navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 2, justifyContent: 'center',alignItems:"flex-start"}}>
        <Icon
          hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
          onPress={() => navigation.navigate('DonorProfile')}
          type="material-community"
          name={'drag-horizontal-variant'}
          color="#000"
          size={hp('5%')}
          style={{marginLeft: wp('5%')}}
        />
        <Text style={styles.heading}>Active Donations</Text>
      </View>
      <View style={{flex: 6}}>
        <FlatList
          data={data}
          renderItem={({item}) => <ListItem donor={true} item={item} />}
        />
      </View>
      <View style={{flex: 1.5, justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={() => navigation.navigate('Camera')}>
          <Icon type="ant-design" name="camerao" size={35} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListData;
