import React, {Component} from 'react';
import {Image, View, StyleSheet, ImageStyle, Text, ScrollView} from 'react-native';
import {width} from '../../constants';
import {NavigationScreenProp, NavigationState} from "react-navigation";

const styles = StyleSheet.create({
    container: {},
    sub: {
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    cover: {
        height: width * 1.67,
        width: width * 0.9,
    },
    h4: {
        padding: 20,
        fontSize: 20,
    },
    h3: {
        fontSize: 22,
        textAlign: 'center',
    }
});
const {cover, sub, container, h4, h3} = styles;

interface IDetailsCard {
    navigation: NavigationScreenProp<NavigationState>;
}

class DetailsCard extends Component<IDetailsCard> {
    render() {
        const {image, info, year} = this.props.navigation.state.params;
        return (
            <View style={container}>
                <ScrollView>
                    <View style={sub}>
                        <Image style={cover as ImageStyle} source={{uri: image}}/>
                    </View>
                    <Text style={h3}> Info </Text>
                    <Text style={h4}> {info}</Text>
                    <Text style={h4}>Year: {year}</Text>
                </ScrollView>
            </View>
        );
    }


};

export default DetailsCard
