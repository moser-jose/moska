import React from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import {useNavigation} from '@react-navigation/native';
const Container = styled.View``;
const TextView = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    background-color: #ff2d55;
    color: #fff;
    padding: 7px 12px;
    border-radius: 10px;
    margin-right: 13px;
`;
const Text = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 15px;
    color: #fff;
    padding: 5px 0 0;
`;
export default ({data, bgColor, color}) => {
    const navigation = useNavigation();
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item, index) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={Genres}
        />
    );

    function Genres(item) {
        const {name} = item.item;

        const HandleAlbuns = () => {
            if (name === 'Albuns') {
                navigation.navigate('Albuns', {});
            }
            if (name === 'Musicas') {
                navigation.navigate('AllMusics', {});
            }
        };
        return (
            <Container>
                <TextView
                    onPress={HandleAlbuns}
                    style={{backgroundColor: bgColor}}>
                    <Text style={{color: color}}>{name}</Text>
                </TextView>
            </Container>
        );
    }
};
