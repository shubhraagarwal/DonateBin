import {StyleSheet} from 'react-native';
import{
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent:"flex-end"
    },
    container: {
        width: wp('100%'),
        height: hp('70%'),
        borderTopRightRadius: wp('10%'),
        borderTopLeftRadius: wp('10%'),
        backgroundColor:"#96AD90",
    },
    heading:{
        textAlign:"center",
        fontSize:hp('4%'),
        marginTop:hp('5%'),
        color: '#000',
        fontWeight: 'bold',
    },
    subHeading:{
        textAlign:"center",
        fontSize:hp('2.5%'),
        marginTop:hp('2%'),
        color: '#000',
    },
    button:{
        alignSelf:"center",
        backgroundColor:"#3A4A3D",
        width: wp('60%'),
        alignItems:"center",
        height: hp('7%'),
        justifyContent:"center",
        borderRadius: wp('2%'),
    },
});

export default styles;
