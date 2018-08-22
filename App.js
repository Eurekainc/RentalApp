import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Offers from './src/Offers';
import Settings from './src/Settings';
import Favourites from './src/Favourites';

import AuthLoading from './src/AuthLoading';
import Login from './src/Login';
import Details from './src/Details';

const AppNavigator = createBottomTabNavigator(
  {
    Offers: {
      screen: Offers,
      navigationOptions: {
        title: 'Offers'
      }
    },
    Favourites: {
      screen: Favourites,
      navigationOptions: {
        title: 'Favourites'
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: 'Settings'
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconSource;

        switch (routeName) {
          case 'Offers':
            iconSource = focused
              ? require('./assets/home-active.png')
              : require('./assets/home.png');
            break;
          case 'Favourites':
            iconSource = focused
              ? require('./assets/likes-active.png')
              : require('./assets/likes.png');
            break;
          case 'Settings':
            iconSource = focused
              ? require('./assets/settings-active.png')
              : require('./assets/settings.png');
            break;
        }

        return iconSource ? (
          <Image source={iconSource} style={{ width: 20, height: 20 }} />
        ) : null;
      }
    })
  }
);

const RootNavigator = createStackNavigator(
  {
    App: {
      screen: AppNavigator
    },
    Details: {
      screen: Details
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default createSwitchNavigator(
  {
    AuthLoading,
    RootNavigator,
    Login
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
