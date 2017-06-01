import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

class Home extends Component {
    state = {
        name: 'default'
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
                <TextInput style={styles.nameInput} placeholder="Fenin Sam" onChangeText={(text) => {
                    this.setState({
                        name: text
                    })
                }} />
                <TouchableOpacity onPress={() => {
                    Actions.singleItem({
                        name: this.state.name
                    })
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