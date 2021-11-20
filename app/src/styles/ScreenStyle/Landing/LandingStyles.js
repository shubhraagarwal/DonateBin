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
  modal:{
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: wp('100%'),
    margin: 0,
    height: hp('47%'),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 30,
    paddingTop: 25,
    paddingBottom: 20,
  },
  ModalContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },
  modalHeading: {
    fontSize: hp('5%'),
    color: '#000',
    fontWeight: 'bold',
  },
  modalData:{
      color: '#000',
  },
  modalButton:{
      justifyContent:"center",
      alignItems:"center",
      height: hp('7%'),
      marginTop: hp('3%'),
      borderRadius:hp('1.5%'),
      borderWidth:hp('0.35%'),
      borderColor:"#3A4A3D"
  }
});

export default styles;
