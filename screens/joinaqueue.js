import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class JoinAQueue extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
	    <Text style = {styles.countText}>JoinAQueue has started </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 10
  },

  countText: {
    color: 'white',

    textAlign: 'center',

  }
})