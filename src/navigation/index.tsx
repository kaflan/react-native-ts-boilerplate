import {
  createStackNavigator,
} from 'react-navigation';
import { homeNavTypes, starGateDetailsNavTypes } from './config';

import Home from '../screens/Home';
import DetailsCard from '../screens/DetailsCard';
import {width} from '../../constants';

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
        headerStyle: { backgroundColor: '#4C3E54' },
        headerBackTitle: ' ',
        title,
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 18,
          width
        },

      })
    },
    initialRouteName: homeNavTypes.HOME,
  }
);

