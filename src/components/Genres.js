import React from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
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
`;
export default ({data}) => {
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
            renderItem={Genres}
        />
    );

    function Genres(item) {
        const {name} = item.item;
        return (
            <Container>
                <TextView>
                    <Text>{name}</Text>
                </TextView>
            </Container>
        );
    }
};
