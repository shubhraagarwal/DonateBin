import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#96AD90',
    width: wp('100%'),
    margin: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 20,
    height: hp('75%'),
  },
  lottie: {
    height: hp('27%'),
  },
  head: {
    fontSize: hp('4%'),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  det: {
    fontSize: hp('2.5%'),
    textAlign: 'center',
    marginTop: hp('2%'),
  },
  returnButton: {
    height: hp('7%'),
    backgroundColor: '#3A4A3D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp('1%'),
  },
});

export default styles;
