import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: wp('75%'),
    height: hp('35.25%'),
    alignSelf: 'center',
  },
  mainText: {
    fontSize: wp('7%'),
    color: '#000',
    padding: wp('2.5%'),
    fontWeight: 'bold',
  },
  cameraButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#3A4A3D',
    width: wp('18%'),
    height: wp('18%'),
    marginRight: wp('2.5%'),
    borderRadius: wp('9%'),
    justifyContent: 'center',
  },
  camcontainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3A4A3D',
  },
  campreview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: wp('2.5%'),
    padding: hp('2%'),
    alignSelf: 'center',
    margin: wp('3.5%'),
  },
  captureContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  captureText: {
    fontSize: hp('2.75%'),
    color: '#3a4a3d',
    fontWeight: 'bold',
  },
});

export default styles;
