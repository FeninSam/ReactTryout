import React, { Component } from 'react';
import Home from './components/Home';
import SingleItem from './components/SingleItem';
import {TabNavigator} from 'react-navigation'

BasicApp = TabNavigator({
  Main: {screen: Home},
  SingleItem: {screen: SingleItem},
});

export default BasicApp;