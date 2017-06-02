import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BasicApp from './src/App';

export default class ChatApp extends Component {
  render(){
    return(
      <BasicApp/>
    )
  }
}

AppRegistry.registerComponent('ChatApp', () => ChatApp);
