import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AllBoats from './components/Boats.js';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AllBoats" id={}>
                <Stack.Screen
                    name="AllBoats"
                    component={AllBoats}
                    options={{ title: 'GetABoat - For Sale' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

