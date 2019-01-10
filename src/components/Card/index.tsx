import React, {PureComponent} from 'react';
import {View, Text, Image, ImageStyle, TouchableOpacity} from 'react-native';
import {NavigationScreenProp} from "react-navigation";
import style from './style';
import {IFilm} from "../../redux/modules/global/types";
import {starGateDetailsNavTypes} from "../../navigation/config";


interface ICard extends IFilm {
    navigation: NavigationScreenProp<any, any>;
}

const {container, h1, cover, sub} = style;

class Card extends PureComponent<ICard> {

    public render() {
        const {image, name} = this.props;
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={container}>
                    <View style={sub}>
                        <Image style={cover as ImageStyle} source={{uri: image}}/>
                    </View>
                    <Text style={h1}>{name.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    private onPress = () => {
        const {navigation, image, name, year, info, id} = this.props;
        const item: IFilm = {
            image, name, year, info, id
        };
        navigation.navigate(starGateDetailsNavTypes.STAR_GATE_DETAILS, ({...item}))

    }
}

export default Card;
