// react
import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
// redux
import { connect } from 'react-redux';

class Spinner extends Component {
  render(){
    const { isLoading = false } = this.props;
    return(
      <View style={style.container}>
        {isLoading &&
          <View style={style.indicator}>
            <ActivityIndicator size="large" color="red" />
          </View>
        }
        {/* check login to redirect */}
        {this.props.children}
      </View>
    );
  }
}

// style
const style = StyleSheet.create({
  indicator: {
    opacity: 0.5,
    flex: 0,
    zIndex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: 'center',
    backgroundColor: "white"
  },
  container : {
    backgroundColor: 'white',
    flex: 1
  }
});

function mapStateToProps(state) {
  return {
    isLoading: state.loading.isLoading
  };
}

export default connect(
  mapStateToProps,
)(Spinner);