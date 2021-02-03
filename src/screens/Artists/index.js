import React, {useState, useMemo, useEffect, useCallback} from 'react';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Container, ContainerArtist, Scroller, AlbunsArtist} from './styles';
import Cabecario from '../../components/ArtistsCabecary';
import TextAll from '../../components/TextAll';
import Albuns from '../../components/Albuns_Artist';
import Musics from '../../components/Musics';
import {useStateValueData} from '../../contexts/ContextProviderData';

export default () => {
    const route = useRoute();
    const {api, data} = useStateValueData();
    const [artist, setArtist] = useState({
        id: route.params.id,
        artist: route.params.artist,
        artwork_cover: route.params.artwork_cover,
        album: route.params.album,
    });
    /* console.log(artist); */
    return (
        <Container>
            <Cabecario data={artist} value="Artista" />
            <ContainerArtist>
                <TextAll name="Albuns" ver="" />
                <AlbunsArtist>
                    <Albuns data={artist} />
                </AlbunsArtist>
                {/* <TextAll name="Musicas" ver="" />
                <Scroller>
                    {artist.album.map((value, index, array) => {
                        return <Musics key={value.id} data={value} />;
                    })}
                </Scroller> */}
            </ContainerArtist>
        </Container>
    );
};
