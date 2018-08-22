import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

class Favourites extends React.Component {
  static navigationOptions = {
    title: 'Favourites'
  };

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  }
});

export default createStackNavigator({
  Favourites: {
    screen: Favourites,
    headerMode: 'screen'
  }
});
