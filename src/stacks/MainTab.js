import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/* import {useRoute} from '@react-navigation/native';
 */
import TabBarBotton from '../components/TabBarBotton';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <TabBarBotton {...props} />}
            initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    );
};

export default MainTab;
