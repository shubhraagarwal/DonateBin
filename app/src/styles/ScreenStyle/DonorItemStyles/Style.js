import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DelStyles = StyleSheet.create({
  modal: {
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
  },
  modalContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  listImage: {
    width: hp('10%'),
    height: hp('10%'),
  },
  listItemContainer: {
    flexDirection: 'row',
    height: hp('15%'),
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: hp('5%'),
    borderRadius: hp('1%'),
    paddingHorizontal: hp('2%'),
  },
  itemHeader: {
    color: '#000',
    fontSize: hp('3.25%'),
    fontWeight: 'bold',
  },
  detailsHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('7%'),
    borderRadius: hp('1%'),
    borderColor: '#3A4A3D',
    borderWidth: hp('0.35%'),
  },
  HeaderText: {
    color: '#000',
    fontSize: hp('3.75%'),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  descriptionText: {
    color: '#000',
    fontSize: hp('2.75%'),
    textAlign: 'center',
  },
  confirmText: {
    color: '#000',
    textAlign: 'center',
    fontSize: hp('2%'),
  },
  confirmButton: {
    backgroundColor: '#3A4A3D',
    borderRadius: hp('1%'),
    marginHorizontal: hp('2%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 8,
    justifyContent: 'center',
    borderRadius: hp('1%'),
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  donorListItemContainer:{
    flexDirection: 'row',
    height: hp('15%'),
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: hp('5%'),
    borderRadius: hp('1%'),
    paddingHorizontal: hp('2%'),
    backgroundColor:"#A1B69C",
    width: wp('90%'),
    alignSelf:"center"
  }
});

export default DelStyles;
