import React from 'react';
import styled from 'styled-components/native';
import {Image, FlatList} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Container = styled.View`
    justify-content: center;

    margin-right: 14px;
    /* flex: 1; */
`;
const ImagemContainer = styled.TouchableOpacity`
    width: 178px;
    height: 178px;
    border-radius: 18px;
    overflow: hidden;
    margin-top: 10px;
`;
const TextContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const TextTitle = styled.View`
    height: 40px;
    flex: 1;
    justify-content: center;
`;
const TextTitleText = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 14px;
`;

const TitleArtist = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: -4px;
`;
const TextTitleTextMusicas = styled.Text`
    font-size: 10px;
    font-family: 'Poppins-SemiBold';
`;

const TitleMusics = styled.View`
    flex-direction: row;
    align-items: center;
`;

export default ({data}) => {
    const navigation = useNavigation();
    return (
        <FlatList
            style={{marginBottom: 50}}
            data={data.album}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={Album}
        />
    );
    function Album(item) {
        const {id, name, numb_musics, artist, musics, artwork} = item.item;
        const HandleAlbum = () => {
            navigation.navigate('AlbumMusics', {
                id: id,
                name: name,
                artwork: artwork,
                musics: musics,
                artist: data.artist,
            });
        };
        return (
            <Container>
                <ImagemContainer onPress={HandleAlbum} style={{elevation: 6}}>
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
                            {name.length < 20
                                ? `${name}`
                                : `${name.substring(0, 20)}...`}
                        </TextTitleText>
                        <TitleArtist>
                            <TextTitleText
                                style={{
                                    fontSize: 10,
                                    fontFamily: 'Poppins-Regular',
                                }}>
                                {data.artist}
                            </TextTitleText>
                            <TitleMusics>
                                <TextTitleTextMusicas>
                                    {numb_musics}
                                </TextTitleTextMusicas>
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
