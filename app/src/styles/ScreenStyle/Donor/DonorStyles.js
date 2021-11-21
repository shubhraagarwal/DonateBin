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
    width: wp('71%'),
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
  ProdImage: {
    width: wp('100%'),
    height: hp('100%'),
    flex: 1,
    justifyContent:"flex-end"
  },
  ProdDetail:{
    width: wp('100%'),
    height: hp('40%'),
    backgroundColor:"#96AD90",
    borderTopRightRadius:wp('7%'),
    borderTopLeftRadius:wp('7%'),
    opacity: 0.85
  },
  back:{
    alignSelf:'flex-start',
    marginLeft:wp('3.5%'),
    marginTop:hp('2.5%')
  },
  modalHeadingContainer:{ 
    alignItems:'center',
    justifyContent:'center',
    width: wp('80%'),
    alignSelf:'center',
    borderWidth:wp('0.6%'),
    height: hp('6%'),
    borderRadius: wp('2.5%'),
    borderColor: '#3A4A3D',
    flex:1
  },
  input:{
    backgroundColor:"#fff",
    paddingLeft:hp('2.5%'),
    borderRadius:wp('2.5%'),
    color: '#000',
    width:wp('75%'),
  },
  confirmationButton:{
    backgroundColor:"#3A4A3D",
    width:wp('80%'),
    alignSelf:'center',
    alignItems:'center',
    width: wp('80%'),
    height: hp('6%'),
    justifyContent:'center',
    borderRadius: wp('2.5%'),
  },
  heading:{
    fontWeight:"bold",
    fontSize:hp('5%'),
    color:"#000",
    alignSelf:"center"
  }
});

export default styles;
