import {
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#13151e',
        flex: 1, 
        alignItems: 'center', 
    },
    container: {
        backgroundColor: '#06070a',
        width: wp('95%'),
        height: hp('50%'),
        borderRadius: wp('10%'),
        marginTop: wp('15%')
    },
    containerTextHeader: {
        color: 'white',
        marginHorizontal: wp('5%'),
        marginTop: wp('10%'),
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerIcon: {
        backgroundColor: '#7c90aa',
        width: wp('13.3%'),
        height: hp('6%'),
        borderRadius: wp('5.3%'),
        marginTop: wp('5%'),
        marginRight: wp('4%'),
    },
    iconTextView: {
        backgroundColor: '#ff576a',
        width: wp('6%'),
        height: hp('2.7%'),
        borderRadius: wp('20%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: wp('7.5%'),
        marginLeft: wp('-2%'),
    },
    iconText: {
        color: 'white',
        fontSize: wp('2.5%'),
        fontWeight: 'bold',
    },
    slide: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: 'blue',
        justifyContent: 'center',
        borderRadius: wp('5%'),
    },
    title: {
        color: 'white',
    },
    slideStyle: {
        height: hp('30%'),
        marginTop: wp('10%'),
    },
    cardsView: {
        marginLeft: wp('-20%'),
    }
})

export default styles;
