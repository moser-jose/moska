import React from 'react';
import MainStack from './src/stacks/MainStack';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
    return (
        <>
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
        </>
    );
};
export default App;
