import React from 'react';
import styled from 'styled-components/native';
import {Image, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
    const navigation = useNavigation();
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={Atists}
        />
    );
    function Atists(item) {
        const {id, name, artwork, album, artwork_cover} = item.item;
        const HandleRoute = () => {
            navigation.navigate('ArtistsScreen', {
                id: id,
                artist: name,
                artwork: artwork,
                artwork_cover: artwork_cover,
                album: album,
            });
        };
        return (
            <Container>
                <ImagemContainer style={{elevation: 4}} onPress={HandleRoute}>
                    <Image
                        source={{uri: artwork}}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </ImagemContainer>
                <TextContainer onPress={HandleRoute}>
                    <TextTitle>
                        <TextTitleText numberOfLines={1}>
                            {name.length < 20
                                ? `${name}`
                                : `${name.substring(0, 32)}...`}
                        </TextTitleText>
                    </TextTitle>
                </TextContainer>
            </Container>
        );
    }
};
