import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Image, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Container = styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;
    align-items: center;
    height: 70px;
    background-color: 'rgba(0, 0, 0, 0.1)';
    padding: 0 10px;
    justify-content: center;
`;
const ImagemContainer = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 12px;
    overflow: hidden;
    elevation: 6;
`;
const TextContainer = styled.View`
    padding: 0 20px;
    flex: 1;
`;
const TextTitle = styled.View`
    justify-content: center;
`;
const TextTitleText = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 18px;
`;

const TitleArtist = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: -8px;
`;

const BottomPlay = styled.TouchableOpacity``;

export default ({data}) => {
    const navigation = useNavigation();
    const HandlePlay = () => {
        navigation.navigate('Play');
    };
    return (
        <Container onPress={HandlePlay}>
            <ImagemContainer>
                <Image
                    source={{
                        uri:
                            'https://upload.wikimedia.org/wikipedia/pt/6/6c/Free_Spirit_de_Khalid.png',
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </ImagemContainer>
            <TextContainer>
                <TextTitle>
                    <TextTitleText numberOfLines={1}>
                        Saturday Nights
                    </TextTitleText>
                    <TitleArtist>
                        <TextTitleText
                            style={{
                                fontSize: 10,
                                fontFamily: 'Poppins-Regular',
                                color: '#5D5D5D',
                            }}>
                            Khalid
                        </TextTitleText>
                    </TitleArtist>
                </TextTitle>
            </TextContainer>
            <BottomPlay style={{marginRight: 8}}>
                <Ionicons name="play" color="#0D0A1E" size={30} />
            </BottomPlay>
            <BottomPlay>
                <Ionicons name="play-forward" color="#0D0A1E" size={30} />
            </BottomPlay>
        </Container>
    );
};
