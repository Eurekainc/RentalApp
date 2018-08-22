import React from 'react';
import {
  View,
  AsyncStorage,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Image
} from 'react-native';

class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    username: 'user',
    password: 'pass'
  };

  handleChangeText = field => value => {
    this.setState({
      [field]: value
    });
  };

  signIn = async () => {
    const { username, password } = this.state;

    if (username === 'user' && password === 'pass') {
      await AsyncStorage.setItem('userToken', 'abc');
      await AsyncStorage.setItem('username', username);
      return this.props.navigation.navigate('App');
    }
    return Alert.alert(
      'Error!',
      'Wrong username or password. Please try again'
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/home-icon.png')}
            style={{ width: 80, height: 80 }}
          />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/username.png')}
              style={{ width: 24, height: 24 }}
            />
            <TextInput
              onChangeText={this.handleChangeText('username')}
              style={styles.textInput}
              placeholder="Username"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/password.png')}
              style={{ width: 24, height: 24 }}
            />
            <TextInput
              onChangeText={this.handleChangeText('password')}
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.signIn}
            disabled={!this.state.username || !this.state.password}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logoContainer: {
    flex: 1,
    marginTop: 128
  },
  formContainer: {
    flex: 2,
    justifyContent: 'flex-start'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f3'
  },
  textInput: {
    fontSize: 20,
    paddingVertical: 10,
    width: '80%',
    marginLeft: 16
  },
  button: {
    marginTop: 32,
    backgroundColor: '#4a89dc',
    borderRadius: 6,
    paddingVertical: 16,
    paddingHorizontal: '40%'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
});

export default Login;
