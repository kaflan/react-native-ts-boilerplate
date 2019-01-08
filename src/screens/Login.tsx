import React, { Component } from 'react';
import { View } from 'react-native';
import Header, { HeaderProps } from '../components/Header';





export default class Login extends Component<any,HeaderProps > {
  constructor(props:any) {
    super(props);
    this.state = {
      headerText: 'Star Gate',
    };
  }
  render() {
    const { headerText } = this.state;
    return (
      <View>
        <Header headerText={headerText} />
      </View>
    );
  }
}
