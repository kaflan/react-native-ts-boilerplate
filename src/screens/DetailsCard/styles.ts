import {StyleSheet} from "react-native";
import {width} from "../../../constants";

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
        fontSize: 26,
        textAlign: 'center',
    }
});

export default styles;
