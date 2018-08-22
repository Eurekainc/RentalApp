import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

class Settings extends React.Component {
  state = {
    username: ''
  };

  componentDidMount() {
    this.getUsername();
  }

  async getUsername() {
    const username = await AsyncStorage.getItem('username');
    this.setState({
      username
    });
  }

  handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Logged in as: {this.state.username}</Text>
        <TouchableOpacity style={styles.button} onPress={this.handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
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
    padding: 16
  },
  text: {
    color: '#333',
    fontSize: 24,
    marginBottom: 24
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    backgroundColor: '#4a89dc',
    borderRadius: 6,
    paddingVertical: 16,
    paddingHorizontal: '40%'
  }
});

export default Settings;
