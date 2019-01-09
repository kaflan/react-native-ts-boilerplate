import React, {SFC} from 'react';
import {View, Text, Image, StyleSheet, ImageStyle, TouchableOpacity} from 'react-native';
import {width} from '../../constants';

const style = StyleSheet.create({
    container: {
        backgroundColor: '#f1c40f',
        width: width / 2.4,
        marginBottom: 10,
        borderRadius: 10,
    },
    sub: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {
            width: 0, height: 5,
        },
        shadowOpacity: 0.6,
    },
    h1: {
        paddingTop: 20,
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: width / 2.4,
    },
    cover: {
        borderRadius: 10,
        height: width * 0.63,
        width: width / 2.4,
    }
});

interface ICard {
    image: string;
    name: string;
    onPress: () => void;
}

const {container, h1, cover, sub} = style;

const Card: SFC<ICard> = ({image, name, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={container}>
            <View style={sub}>
                <Image style={cover as ImageStyle} source={{uri: image}}/>
            </View>
            <Text style={h1}>{name.toUpperCase()}</Text>
        </View>
    </TouchableOpacity>
);

export default Card;
