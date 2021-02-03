import React, {useState, useMemo} from 'react';
import styled from 'styled-components/native';
import {Image, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Container = styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;
    align-items: center;
    margin-bottom: 10px;
`;
const ImagemContainer = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 12px;
    overflow: hidden;
    elevation: 6;
`;
const TextContainer = styled.View`
    padding-left: 10px;
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
    margin-top: -7px;
`;
const TextTitleTextMusicas = styled.Text`
    font-size: 8px;
    font-family: 'Poppins-Bold';
    padding: 2px;
    color: #838383;
`;

const TitleMusics = styled.View`
    flex-direction: row;
    align-items: center;
`;
const Number = styled.View`
    background-color: #ff2d55;
    width: 40px;
    padding: 4px 0 0;
    justify-content: center;
    align-items: center;
    border-radius: 31px;
    elevation: 8;
`;
const NumberText = styled.Text`
    font-size: 12px;
    color: #fff;
    font-family: 'Poppins-SemiBold';
`;
const NumberMusic = styled.View`
    padding-right: 14px;
`;
const Texto = styled.Text`
    font-size: 16px;
    color: #838383;
    font-family: 'Poppins-Bold';
`;

export default ({data}) => {
    return (
        <FlatList
            data={data.sort((a, b) => a.music_album - b.music_album)}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={Musics}
        />
    );
    function Musics(item) {
        const {title, music_album, album, artwork, artist_album} = item.item;
        let index = item.index + 1;
        return (
            <Container>
                <NumberMusic>
                    <Texto>{index}</Texto>
                </NumberMusic>
                <ImagemContainer>
                    <Image
                        source={{uri: artwork}}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </ImagemContainer>
                <TextContainer>
                    <Number>
                        <NumberText>#{music_album}</NumberText>
                    </Number>
                    <TextTitle>
                        <TextTitleText numberOfLines={1}>
                            {title.length < 20
                                ? `${title}`
                                : `${title.substring(0, 20)}...`}
                        </TextTitleText>
                        <TitleArtist>
                            <TextTitleText
                                style={{
                                    fontSize: 10,
                                    fontFamily: 'Poppins-Regular',
                                    color: '#838383',
                                }}>
                                {album.length < 20
                                    ? `${album}`
                                    : `${album.substring(0, 20)}...`}
                            </TextTitleText>
                            <TextTitleText
                                style={{
                                    fontSize: 10,
                                    fontFamily: 'Poppins-Regular',
                                    color: '#838383',
                                }}>
                                {artist_album}
                            </TextTitleText>
                            <TitleMusics>
                                <TextTitleTextMusicas>
                                    03:54
                                </TextTitleTextMusicas>
                            </TitleMusics>
                        </TitleArtist>
                    </TextTitle>
                </TextContainer>
                <Ionicons name="heart" color="#ff2d55" size={22} />
            </Container>
        );
    }
};
