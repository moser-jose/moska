import React from 'react';
import {
    createBottomTabNavigator,
    BottomTabBar,
} from '@react-navigation/bottom-tabs';
import MiniPlayer from '../components/MiniPlayer';
import TabBarBotton from '../components/TabBarBotton';
import Home from '../screens/Home';
import Albuns from '../screens/Albuns/';
import AllMusics from '../screens/Musics/';
import AlbumMusics from '../screens/Albuns/AlbunsAtist';
import ArtistsScreen from '../screens/Artists';
const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => {
                return (
                    <>
                        <MiniPlayer />
                        <TabBarBotton {...props} />
                    </>
                );
            }}
            initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="AllMusics" component={AllMusics} />
            <Tab.Screen name="Albuns" component={Albuns} />
        </Tab.Navigator>
    );
};

export default MainTab;
