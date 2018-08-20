import { createStackNavigator } from 'react-navigation';

import OffersListScene from '../scenes/OffersListScene';

export default createStackNavigator({
  Main: {
    screen: OffersListScene,
  },
});
