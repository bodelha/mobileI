import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';
import HelloWorldApp from './pages/characters';
import CreateUser from './pages/user';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#e89ac7',
                        height: 75
                    }
                }}
                >
                <Stack.Screen name="login" component={Login} options={{
                    title: 'LOGIN',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#fff'
                    }
                }} />
                <Stack.Screen name="characters" component={HelloWorldApp} options={{
                    title: 'CARDS',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#fff'
                    }
                }} />
                <Stack.Screen name="user" component={CreateUser} options={{
                    title: 'CADASTRAR USUÁRIO',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#fff'
                    }
                }} />
                <Stack.Screen name="character" component={HelloWorldApp} options={{
                    title: 'DETALHE',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#fff'
                    }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}
