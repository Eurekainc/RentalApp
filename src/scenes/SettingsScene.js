import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

class SettingsScene extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  state = {
    username: '',
  };

  componentDidMount() {
    this.getUsername();
  }

  async getUsername() {
    const username = await AsyncStorage.getItem('username');
    this.setState({
      username,
    });
  }

  handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>User logged in:</Text>
        <Text style={styles.text}>{this.state.username}</Text>
        <TouchableOpacity onPress={this.handleLogout}>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 24,
    marginBottom: 24,
  },
});

export default SettingsScene;
