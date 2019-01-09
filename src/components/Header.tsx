import React, {SFC} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BLUE, width} from "../../constants";

export interface IHeaderProps {
    headerText: string;
    iconLeft?: string;
    onPress?: () => {},
    colorRight?: string;
    onPressRight?: () => {};
    colorLeft?: string;
    iconRight?: string;
}

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
        fontSize: 28,
        width: width - 75,
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
const {container, textStyle, iconLeftStyle, rightIconStyle} = styles;

const Header: SFC<IHeaderProps> = ({headerText, iconLeft, onPress, onPressRight, iconRight, colorRight, colorLeft}) => (
    <View style={container}>
        {iconLeft &&
        <TouchableOpacity onPress={onPress}>
            <Ionicons name={iconLeft} style={iconLeftStyle} color={colorLeft}/>
        </TouchableOpacity>
        }
        <Text style={textStyle}>{headerText}</Text>
        {iconRight &&
        <TouchableOpacity onPress={onPressRight}>
            <MaterialCommunityIcons name={iconRight} style={[rightIconStyle, {color: colorRight}]}/>
        </TouchableOpacity>
        }
    </View>
);

Header.defaultProps = {
    headerText: 'test',
};

export default Header;
