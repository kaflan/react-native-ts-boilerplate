import React, { SFC } from 'react';
import { Image, View, StyleSheet, ImageStyle, Text, ScrollView } from 'react-native';
import { width } from '../../constants';
import Header from "../components/Header";
import { NavigationScreenProp, NavigationState } from "react-navigation";

const styles = StyleSheet.create({
    container: {
    },
    sub: {
        shadowColor: '#000',
        backgroundColor: 'white',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cover: {
        borderRadius: 10,
        height: width * 1.67,
        width: width * 0.9,
    },
    h4: {
        fontSize: 18,
    }
});
const { cover, sub, container, h4 } = styles;

interface IDetailsCard {
    navigation: NavigationScreenProp<NavigationState>;
}

const DetailsCard: SFC<IDetailsCard> = (props) => {
    const { image, name, info, year } = props.navigation.state.params.show;
    return (
        <View style={container}>
            <ScrollView>
                <Header headerText={name} />
                <View style={sub}>
                    <Image style={cover as ImageStyle} source={{ uri: image }} />
                </View>
                <ScrollView>
                    <Text style={h4}>{info}</Text>
                    <Text style={h4}>Year: {year}</Text>
                </ScrollView>
            </ScrollView>
        </View>
    );
};

export default DetailsCard
