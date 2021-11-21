import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from '../../styles/ScreenStyle/Donor/DonorStyles';
import ListItem from '../../components/NGO/ListItem';
import NoItems from '../../components/Donor/NoItems';

const ListData = ({data, navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 2, justifyContent: 'center'}}>
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
