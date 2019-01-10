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
    navigationOptions: ({navigation}) => {
      const title = navigation.getParam('name', 'Favorite films').toUpperCase();
      return ({
        headerStyle: { backgroundColor: '#4C3E54', fontSize: 40, color: '#fff' },
        headerBackTitle: ' ',
        title,
        headerTintColor: 'white',

      })
    },
    initialRouteName: homeNavTypes.HOME,
  }
);

