import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';
import { Drawer} from './Navigator/navigator';
export default class CustomDrawer extends Component {
  render () {
    return (
        <Drawer />
      
    );
  }
}
AppRegistry.registerComponent('PostureApp', () => CustomDrawer );

