import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from '../screens/IndexScreen';
import { Platform } from 'react-native';

import Colors from '../constants/colors';
import SplashScreen from '../screens/SplashScreen';
import HistoricoScreen from '../screens/HistoricoScreen';

const AppNavigator = createStackNavigator(
    {
        Splash: {
            screen: SplashScreen
        },
        Index: {
            screen: IndexScreen
        },
        Historico: {
            screen: HistoricoScreen
        }
    },
    {
        // initialRouteName: 'Categories',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            },
            headerTintColor:
                Platform.OS === 'android' ? 'white' : Colors.primary,
            headerTitle: ''
        }
    }
);

export default createAppContainer(AppNavigator);
