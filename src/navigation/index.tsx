import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { loginNavTypes, drawerNavTypes, starGateDetails } from './config';

import Home from '../screens/Home';
import DetailsCard from '../screens/DetailsCard';

const LoginStack = createStackNavigator(
  {
    [loginNavTypes.LOGIN]: { screen: Home },
  },
  {
    headerMode: 'none',
  }
);

const DrawerStack = createDrawerNavigator({
  [drawerNavTypes.HOME]: { screen: Home },
  [starGateDetails.STAR_GATE_DETAILS]: {
    screen: DetailsCard
  },

});

const DrawerNavigation = createStackNavigator(
  {
    DrawerStack: { screen: DrawerStack },
  },
  {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      headerStyle: { backgroundColor: '#4C3E54' },
      title: 'Welcome!',
      headerTintColor: 'white',
        ...navigation,
    }),
  }
);

export const PrimaryNav = createSwitchNavigator(
  {
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation },
  },
  {
    initialRouteName: 'loginStack',
  }
);
