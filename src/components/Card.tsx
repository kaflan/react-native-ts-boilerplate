import React, {SFC} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {width} from '../../constants';

const style = StyleSheet.create({
    container: {
        backgroundColor: '#f1c40f',
        width: width / 2.1
    },
    sub: {
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {
            width: 0, height: 5,
        },
        shadowOpacity: 0.6,
    },
    h1: {
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: width / 2.4,
    },
    cover: {
        height: width * 0.63,
        width: width / 2.4,
    }
});

interface ICard {
    image: string,
    name: string,
}

const { container, h1, cover, sub } = style;

const Card: SFC<ICard> = ({image, name}) => (
    <View style={container}>
        <View style={sub}>
            <Image source={{uri: image }} />
        </View>
        <Text style={h1}>{name}</Text>
    </View>
)

export default Card;
