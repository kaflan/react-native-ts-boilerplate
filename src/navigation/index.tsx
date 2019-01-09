import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { loginNavTypes, drawerNavTypes } from './config';

import Home from '../screens/Home';
import FilmLIst from '../screens/FilmLIst';

const LoginStack = createStackNavigator(
  {
    [loginNavTypes.LOGIN]: { screen: FilmLIst },
  },
  {
    headerMode: 'none',
  }
);

const DrawerStack = createDrawerNavigator({
  [drawerNavTypes.HOME]: { screen: Home },
});

const DrawerNavigation = createStackNavigator(
  {
    DrawerStack: { screen: DrawerStack },
  },
  {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#4C3E54' },
      title: 'Welcome!',
      headerTintColor: 'white',
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
