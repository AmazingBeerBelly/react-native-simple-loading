/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet, 
  View,
} from 'react-native';

const sizeRange = [10, 15, 20, 15, 10, 10];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  pointBox: {
    width: 20, 
    height: 20, 
    marginLeft: 20, 
    alignItems: 'center', 
    justifyContent: 'center',
  },

  point: {
    backgroundColor: 'gray',
    borderRadius: 20,
  }
});

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      sizeIndex: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({sizeIndex: (this.state.sizeIndex + 1) % 6});
    }, 200);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pointBox}>
          <View style={[
              {
                width: sizeRange[(this.state.sizeIndex + 2) % 6], 
                height: sizeRange[(this.state.sizeIndex + 2) % 6],
              }
            , styles.point]}
            ></View>
          </View>

          <View style={styles.pointBox}>
            <View style={[
              {
                width: sizeRange[(this.state.sizeIndex + 1) % 6], 
                height: sizeRange[(this.state.sizeIndex + 1) % 6],
              }
            , styles.point]}
            ></View>
          </View>

          <View style={styles.pointBox}>
            <View style={[
              {
                width: sizeRange[(this.state.sizeIndex) % 6], 
                height: sizeRange[(this.state.sizeIndex) % 6],
              }
            , styles.point]}
            ></View>
          </View>
      </View>
    )
  }
}
