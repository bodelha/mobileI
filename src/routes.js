import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#e89ac7',
                        height: 75
                    },
                    
                }}
                >
                <Stack.Screen name="login" component={Login} options={{
                    title: 'LOGIN',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#fff'
                    },
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styleForHeaders = StyleSheet.create({

})