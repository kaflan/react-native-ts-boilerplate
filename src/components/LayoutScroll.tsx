import React, {SFC, ReactNode} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

interface ILayout {
    children: ReactNode,
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        padding: 10,
        marginBottom: 150
    }
});
const {container} = styles;

const Layout: SFC<ILayout> = ({children}) => (
    <ScrollView>
        <View style={container}>
            {children}
        </View>
    </ScrollView>
);


export default Layout;
