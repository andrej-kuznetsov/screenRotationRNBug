import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<Props> {
    openMap = () => {
        Linking.openURL('https://www.google.com/maps/dir/?api=1&travelmode=driving&origin=10,11&destination=12,11');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <TouchableOpacity onPress={this.openMap} style={styles.btn}>
                    <Text>Open map</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    btn: {
        height: 50,
        width: 125,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
