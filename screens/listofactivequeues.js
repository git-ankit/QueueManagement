import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class ListOfActiveQueues extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
	    <Text style = {styles.countText}>ListOfActiveQueues has started </Text>
        
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