import { StyleSheet } from 'react-native';
import {width , height} from "../../../constants";

const style = StyleSheet.create({
    container: {
        backgroundColor: '#f1c40f',
        flex: 3,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {
            width: 0, height: 5,
        },
        padding: 10,
        shadowOpacity: 0.8,
        elevation: 2,
    },
    sub: {
        borderRadius: 10,
    },
    h1: {
        fontSize: 18,
        alignSelf: 'center',
        textAlign: "center",
        justifyContent: 'center',
        width: width / 2.4,
        flex: 3,
        marginTop: 10,
        fontWeight: 'bold',
        textAlignVertical: 'center',
    },
    cover: {
        alignSelf: 'center',
        flex: 1,
        height: height / 2,
        resizeMode: "contain",
        width: width * 0.8,
    }
});

export default style;
