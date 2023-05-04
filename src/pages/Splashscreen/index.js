import React, { Component } from 'react';
import { View, Image, Text, StatusBar } from 'react-native'
import { StackActions } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

class Splashscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Home'));
        }, 5000);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" backgroundColor="#cf0d73"/>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}>
                    <LottieView source={require('../../../assets/logo-sistem-tertanam.json')} autoPlay loop style={{
                        flex: 1,
                        backgroundColor: '#f8f3f9'
                    }} />
                </View>
            </View>

        );
    }
}

export default Splashscreen;