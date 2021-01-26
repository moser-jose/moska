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

const TabItemHome = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background: #29c17e;
    border-radius: 25px;
    margin-top: 5px;
    elevation: 2;
`;

export default ({state, navigation}) => {
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    };
    return (
        <TabArea>
            <TabItem onPress={() => goTo('Search')}>
                <SearchIcon width="21" fill="#0D0A1E" />
            </TabItem>
            <TabItem onPress={() => goTo('Categories')}>
                <MusicIcon width="21" fill="#0D0A1E" />
            </TabItem>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon fill="#0D0A1E" />
            </TabItem>

            <TabItem onPress={() => goTo('Favorites')}>
                <ConfigurationIcon width="22" fill="#0D0A1E" />
            </TabItem>
        </TabArea>
    );
};
