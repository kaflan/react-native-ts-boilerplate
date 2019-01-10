import React, {SFC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';


export interface IHeaderProps {
    headerText: string;
    iconLeft?: string;
    onPress?: () => {},
    colorRight?: string;
    onPressRight?: () => {};
    colorLeft?: string;
    iconRight?: string;
}

const {container, textStyle, iconLeftStyle, rightIconStyle} = styles;

const Header: SFC<IHeaderProps> = ({headerText, iconLeft, onPress, onPressRight, iconRight, colorRight, colorLeft}) => (
    <View style={container}>
        {iconLeft &&
        <TouchableOpacity onPress={onPress}>
            <Ionicons name={iconLeft} style={iconLeftStyle} color={colorLeft}/>
        </TouchableOpacity>
        }
        <Text style={textStyle}>{headerText.toUpperCase()}</Text>
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
