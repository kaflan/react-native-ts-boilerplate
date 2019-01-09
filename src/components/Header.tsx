import React, { SFC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export interface IHeaderProps {
  headerText: string;
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    backgroundColor: '#3498db',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 70,
    marginLeft: 20,
    color: '#fff'
  }
});

const Header: SFC<IHeaderProps> = ({headerText}) => (
  <View style = { styles.viewStyle } >
    <Text style={styles.textStyle}>{headerText}</Text>
  </View >
);

Header.defaultProps = {
  headerText: 'test',
};

export default Header;
