import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from "lottie-react-native";
import MainButton from "../components/MainButton";

import Colors from '../constants/colors';

const SplashScreen = props => {

    return (

        <View style={styles.animationContainer}>
            <LottieView
                ref={animation => {
                    animation.play();
                }}
                style={{
                    backgroundColor: Colors.primary,
                }}
                source={require('../assets/world.json')}
            // OR find more Lottie files @ https://lottiefiles.com/featured
            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
            />
            <MainButton style={styles.buttonB} onPress={() => { props.navigation.navigate('Index') }}>
                Find
        </MainButton>
        </View>

    );
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        backgroundColor: Colors.accent
    }
});

export default SplashScreen;
