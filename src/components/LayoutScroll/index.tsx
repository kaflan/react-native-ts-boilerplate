import React, {SFC, ReactNode} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style';

interface ILayout {
    children: ReactNode,
}

const {container} = styles;

const Layout: SFC<ILayout> = ({children}) => (
    <ScrollView>
        <View style={container}>
            {children}
        </View>
    </ScrollView>
);


export default Layout;
