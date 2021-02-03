import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Play from '../screens/Play';
import MainTab from './MainTab';
import AlbumMusics from '../screens/Albuns/AlbunsAtist';
import Albuns from '../screens/Albuns/';
import ArtistsScreen from '../screens/Artists';
const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="MainTab"
        screenOptions={{
            headerShown: false,
        }}>
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="AlbumMusics" component={AlbumMusics} />
        <Stack.Screen name="ArtistsScreen" component={ArtistsScreen} />
        <Stack.Screen name="Play" component={Play} />
    </Stack.Navigator>
);
