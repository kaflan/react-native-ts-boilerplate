import { StyleSheet } from 'react-native';
import {width} from "../../../constants";

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
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center',
        width: width / 2.4,
        height: 60
    },
    cover: {
        borderRadius: 10,
        height: width * 0.63,
        width: width / 2.4,
    }
});

export default style;
