import React, {Component} from 'react';
import {Image, View, ImageStyle, Text, ScrollView} from 'react-native';
import {NavigationScreenProp, NavigationState} from "react-navigation";
import styles from './styles';

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
