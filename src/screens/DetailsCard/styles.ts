import {StyleSheet} from "react-native";
import {width, height} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    sub: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    cover: {
        height: height / 2,
        resizeMode: "contain",
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
