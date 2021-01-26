import React, {useState, useEffect} from 'react';
import {useStateValueData} from '../../contexts/ContextProviderData';
import TopCabecary from '../../components/TopCabecary';
import TextAll from '../../components/TextAll';
import MusicRecent from '../../components/MusicRecent';
import Genres from '../../components/Genres';
import Albuns from '../../components/Albuns';
import Artists from '../../components/Artists';
import {Container, Scroller, Musics} from './styles';
export default () => {
    const {data} = useStateValueData();
    const genresu = [];
    data.musicas.map((value) => {
        value.genre.map((value) => {
            genresu.push(value);
        });
    });
    return (
        <Container>
            <TopCabecary />
            <Scroller>
                <TextAll name="Tocadas Recentemente" />
                <Musics>
                    <MusicRecent data={data.musicas} />
                </Musics>
                <TextAll name="Géneros" />
                <Musics>
                    <Genres data={genresu} />
                </Musics>
                <TextAll name="Albuns" />
                <Musics>
                    <Albuns data={data.musicas} />
                </Musics>
                <TextAll name="Explore" />
                <Musics>
                    <Genres data={data.explore} />
                </Musics>
                <TextAll name="Artistas" />
                <Musics>
                    <Artists data={data.musicas} />
                </Musics>
            </Scroller>
        </Container>
    );
};
