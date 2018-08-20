import { createStackNavigator } from 'react-navigation';

import SettingsScene from '../scenes/SettingsScene';

export default createStackNavigator({
  Main: {
    screen: SettingsScene,
  },
});
