import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';
import AuthLoadingScene from '../scenes/AuthLoadingScene';
import LoginScene from '../scenes/LoginScene';

const LoginStack = createStackNavigator({ LoginScene });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScene,
    App: TabNavigator,
    Login: LoginStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
