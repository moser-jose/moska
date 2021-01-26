import React from 'react';
import styled from 'styled-components/native';
import {Image, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Container = styled.View`
    width: 130px;
    justify-content: center;
`;
const ImagemContainer = styled.TouchableOpacity`
    width: 120px;
    height: 120px;
    border-radius: 18px;
    overflow: hidden;
`;
const TextContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    height: 40px;
    width: 120px;
    align-items: center;
`;
const TextTitle = styled.View`
    height: 40px;
    flex: 1;
    justify-content: center;
`;
const TextTitleText = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 10px;
`;

const TitleArtist = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const TextTitleTextMusicas = styled.Text`
    font-size: 8px;
    font-family: 'Poppins-SemiBold';
    padding: 2px;
`;

const TitleMusics = styled.View`
    flex-direction: row;
    align-items: center;
`;

export default ({data}) => {
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={Album}
        />
    );
    function Album(item) {
        const {
            id,
            title,
            music_album,
            url,
            artist,
            album,
            artist_ft,
            genre,
            date,
            artwork,
            artwork_artist,
            artwork_artist_cover,
        } = item.item;
        return (
            <Container>
                <ImagemContainer style={{elevation: 6}}>
                    <Image
                        source={{uri: artwork}}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </ImagemContainer>
                <TextContainer>
                    <TextTitle>
                        <TextTitleText numberOfLines={1}>
                            {album.length < 20
                                ? `${album}`
                                : `${album.substring(0, 20)}...`}
                        </TextTitleText>
                        <TitleArtist>
                            <TextTitleText
                                style={{
                                    fontSize: 9,
                                    fontFamily: 'Poppins-Regular',
                                }}>
                                {artist_ft}
                            </TextTitleText>
                            <TitleMusics>
                                <TextTitleTextMusicas>23</TextTitleTextMusicas>
                                <MaterialIcons
                                    name="music-note"
                                    color="#FF2D55"
                                    size={12}
                                />
                            </TitleMusics>
                        </TitleArtist>
                    </TextTitle>
                </TextContainer>
            </Container>
        );
    }
};
