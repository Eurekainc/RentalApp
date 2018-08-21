import React from 'react';
import {
  View,
  AsyncStorage,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  state = {
    username: 'user',
    password: 'pass',
  };

  handleChangeText = field => value => {
    this.setState({
      [field]: value,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.handleChangeText('username')}
          style={styles.textInput}
          placeholder="Username"
          autoCapitalize="none"
        />
        <TextInput
          onChangeText={this.handleChangeText('password')}
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity
          onPress={this.signIn}
          disabled={!this.state.username || !this.state.password}
        >
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  signIn = async () => {
    const { username, password } = this.state;

    if (username === 'user' && password === 'pass') {
      await AsyncStorage.setItem('userToken', 'abc');
      await AsyncStorage.setItem('username', this.state.username);
      return this.props.navigation.navigate('App');
    }
    return Alert.alert(
      'Error!',
      'Wrong username or password. Please try again'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 20,
    paddingVertical: 10,
    width: '80%',
  },
  loginButton: {
    fontSize: 20,
    paddingVertical: 20,
    width: '100%',
  },
});

export default Login;
