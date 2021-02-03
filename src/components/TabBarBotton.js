import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeIcon from '../assets/img/home.svg';
import MusicIcon from '../assets/img/musics.svg';
import SearchIcon from '../assets/img/search.svg';
import ConfigurationIcon from '../assets/img/configuration.svg';

const TabArea = styled.View`
    height: 70px;
    flex-direction: row;
    elevation: 2;
    background-color: #fff;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const Bola = styled.View`
    background-color: #ff2d5580;
    height: 7px;
    width: 7px;
    border-radius: 3.5px;
    margin-top: 5px;
`;

export default ({state, navigation}) => {
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    };
    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <SearchIcon width="21" fill="#0D0A1E" />
            </TabItem>
            <TabItem onPress={() => goTo('AllMusics')}>
                <MusicIcon width="21" fill="#0D0A1E" />
                {state.index === 1 && <Bola />}
            </TabItem>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon fill="#0D0A1E" />

                {state.index === 0 && <Bola />}
            </TabItem>

            <TabItem onPress={() => goTo('Home')}>
                <ConfigurationIcon width="22" fill="#0D0A1E" />
            </TabItem>
        </TabArea>
    );
};
