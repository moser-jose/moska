import React, {useState, useMemo, useEffect, useCallback} from 'react';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Container, ContainerArtist, Scroller, AlbunsArtist} from './styles';
import Cabecario from '../../../components/ArtistsCabecary';
import TextAll from '../../../components/TextAll';
import Musics from '../../../components/Musics';

export default () => {
    const route = useRoute();
    const [album, setArtist] = useState({
        id: route.params.id,
        artist: route.params.name,
        musics: route.params.musics,
        artwork: route.params.artwork,
        artwork_cover: route.params.artwork,
        name: route.params.artist,
    });
    return (
        <Container>
            <Cabecario data={album} value="Album" />
            <ContainerArtist>
                <TextAll name="Musicas" ver="" />
                <Scroller>
                    <Musics data={album} />
                </Scroller>
            </ContainerArtist>
        </Container>
    );
};
