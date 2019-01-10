import React from 'react';
import { View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import { homeNavTypes, starGateDetailsNavTypes } from './config';

import Home from '../screens/Home';
import DetailsCard from '../screens/DetailsCard';

export const PrimaryNav = createStackNavigator(
  {
    [homeNavTypes.HOME]: { screen: Home },
    [starGateDetailsNavTypes.STAR_GATE_DETAILS]: {
      screen: DetailsCard
    },
  },
  {
    headerMode: 'float',
    headerLayoutPreset: 'center',
    navigationOptions: ({navigation}) => {
      const title = navigation.getParam('name', 'Favorite Films').toUpperCase();

      return ({
        headerStyle: { backgroundColor: '#4C3E54' },
        headerBackTitle: '',
        title,
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 18,
          alignSelf: 'center',
          textAlign: "center",
          justifyContent: 'center',
          flex: 1,
          fontWeight: 'bold',
          textAlignVertical: 'center',
        },
        headerRight: (<View />),
      })
    },
    initialRouteName: homeNavTypes.HOME,
  }
);

