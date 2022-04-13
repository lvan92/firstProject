// react
import { Button } from "native-base";
import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loadingActions from '../actions/loading.action';

class Login extends Component {

    state = {
        username: '',
        password: ''
    }
    onLogin = () => {
        const { username } = this.state;
        this.props.loadingActions.loading(true);
        this.props.onGetLoginStatus(true, username);
        setTimeout(()=>{
            this.props.loadingActions.loading(false);
        },5000)
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
    backgroundColor: "black",
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
  },
  Footer: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    borderRadius: 5,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    backgroundColor: "transparent",
    width: "100%",
    paddingLeft: 20,
  },
});

function mapStateToProps(state) {
  return {
    isLoading: state.loading.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadingActions: bindActionCreators(loadingActions, dispatch),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
