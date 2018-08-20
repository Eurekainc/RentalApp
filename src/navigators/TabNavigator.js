import { createBottomTabNavigator } from 'react-navigation-tabs';

import OffersStack from './OffersStack';
import SettingsStack from './SettingsStack';

export default createBottomTabNavigator({
  Offers: { screen: OffersStack, tabBarLabel: 'Offers' },
  Settings: {
    screen: SettingsStack,
    tabBarLabel: 'Settings',
  },
});
