import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96AD90',
    flexDirection: 'row',
  },
  profileContainer: {
    width: wp('80%'),
    backgroundColor: '#fff',
    borderTopRightRadius: wp('6%'),
    borderBottomRightRadius: wp('6%'),
  },
  profileImage: {
    width: wp('60%'),
    height: hp('35%'),
    alignSelf: 'center',
    borderRadius: wp('30%'),
    marginTop: hp('5%'),
  },
  headerContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: hp('2%'),
  },
  name: {
    fontSize: hp('4%'),
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
    marginTop: hp('3%'),
  },
  email: {
    fontSize: hp('2.5%'),
    color: 'grey',
    alignSelf: 'center',
    marginTop: hp('1%'),
  },
  scan: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A4A3D',
    width: wp('65%'),
    alignItems: 'center',
    borderRadius: wp('2.5%'),
  },
  scanText: {
    fontSize: hp('3.5%'),
    color: '#fff',
    fontWeight: 'bold',
    padding: hp('1%'),
  },
  logout:{
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: wp('65%'),
    alignItems: 'center',
    borderRadius: wp('2.5%'),
  },
  logoutText: {
    fontSize: hp('3.5%'),
    color: '#D31C1C',
    padding: hp('1%'),
  },
});

export default styles;
