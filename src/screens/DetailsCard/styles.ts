import {StyleSheet} from "react-native";
import {width, height} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        elevation: 16
    },
    sub: {
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        elevation: 16
    },
    cover: {
        height,
        width: width * 0.9,
    },
    h4: {
        padding: 20,
        fontSize: 20,
    },
    h3: {
        fontSize: 26,
        textAlign: 'center',
    }
});

export default styles;
