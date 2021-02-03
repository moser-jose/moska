import React from 'react';
import styled from 'styled-components/native';
import {FlatList, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Container = styled.View`
    height: 230px;
    position: relative;
    z-index: 1000;
`;
const BottonBack = styled.TouchableOpacity`
    position: absolute;
    left: 15px;
    top: 20px;
    background-color: #353840;
    height: 35px;
    width: 35px;
    border-radius: 17.5px;
    justify-content: center;
    align-items: center;
`;
const BottonArtist = styled.View`
    position: absolute;
    left: 15px;
    bottom: 6px;
    justify-content: center;
`;
const Text = styled.Text`
    font-size: 20px;
    color: #fff;
    font-family: 'Poppins-Bold';
`;

const BottonPlay = styled.TouchableOpacity`
    position: absolute;
    right: 30px;
    bottom: -30px;
    background-color: #ff2d55;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    elevation: 15;
    padding-left: 6px;
`;
const Transparent = styled.View`
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
`;

export default ({data, value}) => {
    const navigation = useNavigation();
    return (
        <Container>
            <ImageBackground
                source={{uri: data.artwork_cover}}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'red',
                }}>
                <Transparent />
            </ImageBackground>
            <BottonBack onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons
                    name="arrow-left-thick"
                    color="#fff"
                    size={23}
                />
            </BottonBack>
            <BottonArtist>
                <Text>{value}</Text>
                <Text style={{fontSize: 32, fontFamily: 'Poppins-ExtraBold'}}>
                    {data.artist}
                </Text>
            </BottonArtist>
            <BottonPlay>
                <Ionicons name="play" color="#fff" size={33} />
            </BottonPlay>
        </Container>
    );
};
