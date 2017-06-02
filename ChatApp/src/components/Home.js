import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';

class Home extends Component {
    static navigationOptions={
        title:"Package Drop"
    }
    state = {
        name: 'VegPuff'
    }
   
    constructor(props) {
        super(props);
    
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>
                    Enter Your Name:
                </Text>
                <TextInput style={styles.nameInput} placeholder="Item" onChangeText={(text) => {
                    this.setState({
                        name: text
                    })
                }} />
                <TouchableOpacity onPress={() => {
                     this.props.navigation.navigate('SingleItem',{name:this.state.name})
                }}>
                    <Text style={styles.nextButton}>
                        Next
                        </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20
    },
    nameInput: {
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20
    },
    nextButton: {
        marginLeft: 50
    }
})
export default Home;