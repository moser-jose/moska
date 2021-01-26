import React from 'react';
import styled from 'styled-components/native';
import {Image, FlatList} from 'react-native';
const Container = styled.View`
    justify-content: center;
    margin-right: 10px;
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
    align-items: center;
`;
const TextTitleText = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 14px;
    text-align: center;
`;

export default ({data}) => {
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={MusicRecent}
        />
    );
    function MusicRecent(item) {
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
                <ImagemContainer style={{elevation: 4}}>
                    <Image
                        source={{uri: artwork_artist}}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </ImagemContainer>
                <TextContainer>
                    <TextTitle>
                        <TextTitleText numberOfLines={1}>
                            {artist.length < 20
                                ? `${artist}`
                                : `${artist.substring(0, 32)}...`}
                        </TextTitleText>
                    </TextTitle>
                </TextContainer>
            </Container>
        );
    }
};
