import React, { Component } from 'react';
import Home from './components/Home';
import SingleItem from './components/SingleItem';

import {
    Router, Scene
} from 'react-native-router-flux';

class App extends Component {

    render() {
        return (
            <Router>
                <Scene key='root' style={{paddingTop:54}}>
                    <Scene key='home' component={Home} title='Home Page' />
                    <Scene key='singleItem' component={SingleItem} title='SingleItem' />
                </Scene>
            </Router>
        );
    }
}
export default App;