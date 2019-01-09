import React, {SFC} from 'react';
import {Image, View, StyleSheet, ImageStyle, Text, ScrollView} from 'react-native';
import { width } from '../../constants';
import {IFilm} from "../redux/modules/global/types";
import Header from "./Header";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    sub: {
        shadowColor: '#000',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.4
    },
    cover: {
        borderRadius: 10,
        flex: width * 0.8,
        height: width * 0.9
    },
    h4: {
        fontSize: 10,
    }
});
const {cover, sub, container, h4 } = styles;

const DetailsCard:SFC<IFilm> = ({image, name, info, year }) => (
    <View style={container}>
        <Header headerText={name.toUpperCase()} />
        <View style={sub}>
            <Image style={cover as ImageStyle} source={{uri: image}}/>
        </View>
        <ScrollView>
            <Text style={h4}>{info}</Text>
            <Text style={h4}>Year: {year}</Text>
        </ScrollView>

    </View>
);


export default DetailsCard
