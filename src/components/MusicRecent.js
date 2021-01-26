import React from 'react';
import styled from 'styled-components/native';
import {Image, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

const TextFavorite = styled.View`
    height: 40px;
    width: 20px;
    align-items: center;
    justify-content: center;
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
                    <TextTitle>
                        <TextTitleText numberOfLines={1}>
                            {title.length < 20
                                ? `${title}`
                                : `${title.substring(0, 32)}...`}
                        </TextTitleText>
                        <TextTitleText
                            style={{
                                fontSize: 9,
                                fontFamily: 'Poppins-Regular',
                            }}>
                            {artist_ft}
                        </TextTitleText>
                    </TextTitle>
                    <TextFavorite>
                        <Ionicons size={16} name="heart" color="#FF2D55" />
                    </TextFavorite>
                </TextContainer>
            </Container>
        );
    }
};
