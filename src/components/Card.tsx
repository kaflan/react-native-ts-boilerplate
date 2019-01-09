import React, {SFC} from 'react';
import {View, Text, Image, StyleSheet, ImageStyle} from 'react-native';
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
    image: string,
    name: string,
}

const {container, h1, cover, sub} = style;

const Card: SFC<ICard> = (props) => (
    <View style={container}>
        <View style={sub}>
            <Image style={cover as ImageStyle} source={{uri: props.image}}/>
        </View>
        <Text style={h1}>{props.name.toUpperCase()}</Text>
    </View>
);

export default Card;
