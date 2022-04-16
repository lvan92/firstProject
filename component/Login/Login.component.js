// react
import { Button } from "native-base";
import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loadingActions from '../../actions/loading.action';
import * as userActions from '../../actions/user.action';
import uuid from 'uuid';

class Login extends Component {

    state = {
        username: '',
        password: ''
    }
    onLogin = () => {
        const { username, password } = this.state;
        const listUser =  this.props.listUser;
        if (username) {
          const key = listUser?.length ? listUser.length + 1 : 1;
          const user = {
            key: key.toString(),
            name: username,
            password
          }
          this.props.userActions.add(user);
          this.props.loadingActions.loading(true);
          this.props.onGetLoginStatus(true, username);
        }
    }
    onChangeValue = (value, type) => {
        this.setState({
            [type]: value
        })
    }
    render() {
        const {username, password} = this.state;
        return(
            <View style={styles.container} >
                <View style={styles.Header}></View>
                <View style={styles.Content}>
                    <Text>Username</Text>
                    <TextInput
                        numberOfLines={2}
                        style={styles.inputStyle}
                        multiline={false}
                        placeholder={"Please input username"}
                        value={username}
                        onChangeText={value => this.onChangeValue(value, 'username')}
                    />
                    <Text>Password</Text>
                    <TextInput
                        numberOfLines={2}
                        style={styles.inputStyle}
                        multiline={false}
                        placeholder={"Please input password"}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={value =>  this.onChangeValue(value, 'password')}
                    />
                    <View style={styles.buttonContainer}>
                        <Button 
                            style={styles.button}
                            onPress={this.onLogin}
                        >
                            <Text>Login</Text>
                        </Button>
                    </View>
                </View>
                <View style={styles.Footer} ></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10f4cc",
    alignItems: "center",
    justifyContent: "center",
  },
  Header: {
    flex: 1,
  },
  Content: {
    flex: 2,
    backgroundColor: "white",
    width: "90%",
    borderRadius: 20,
    padding: 20,
    justifyContent: "center",
    marginVertical: 16,
  },
  Footer: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 5,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold"
  },
  inputStyle: {
    backgroundColor: "transparent",
    width: "100%",
    paddingLeft: 20,
    borderWidth: 1,
    borderEndColor: 'red',
    marginVertical: 16, borderRadius:5
  },
});

function mapStateToProps(state) {
  return {
    isLoading: state.loading.isLoading,
    listUser: state.user.listUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadingActions: bindActionCreators(loadingActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
