import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96AD90',
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: wp('100%'),
    margin: 0,
    height: hp('45%'),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 30,
    paddingTop: 25,
    paddingBottom: 20,
  },
  modalContainer: {
    flex: 1,
  },
  modalHead: {
    textAlign: 'center',
    color: '#000',
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: hp('0.25%'),
    borderColor: '#3A4A3D',
    borderRadius: hp('1.5%'),
    paddingLeft: hp('2%'),
    marginTop: hp('2%'),
    fontSize: hp('2.37%'),
    color:"#000"
  },
  modalButton: {
    backgroundColor: '#3A4A3D',
    height: hp('6%'),
    borderRadius: hp('1.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkText: {
    textAlign: 'center',
    color: '#D75E5C',
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  verifyModal: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: wp('100%'),
    margin: 0,
    height: hp('80%'),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 30,
    paddingTop: 25,
    paddingBottom: 20,
  },
  otpContainer: {flex: 1},
  modalButtonText:{color: '#fff', fontSize: hp('2.75%'), fontWeight: 'bold'}
});

export default styles;
