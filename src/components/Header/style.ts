import {StyleSheet} from "react-native";
import {BLUE, width} from "../../../constants";
import {ifIphoneX} from "react-native-iphone-x-helper";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        paddingHorizontal: 20,
        backgroundColor: BLUE,
        position: 'relative',
        ...ifIphoneX({
            height: 122
        }, {
            height: 90
        })
    },
    textStyle: {
        color: '#fff',
        fontSize: 20,
        width: width - 75,
        textAlign: 'center',
        alignSelf: 'center',
        margin: 10,
        fontFamily: 'AvenirNext-DemiBold',
        ...ifIphoneX({
            paddingTop: 75
        }, {
            paddingTop: 40
        })
    },
    iconLeftStyle: {
        ...ifIphoneX({
            paddingTop: 75
        }, {
            paddingTop: 40
        }),
        fontSize: 35
    },
    rightIconStyle: {
        ...ifIphoneX({
            paddingTop: 75
        }, {
            paddingTop: 44
        }),
        fontSize: 30,
        marginRight: 3
    }
});

export default styles;
