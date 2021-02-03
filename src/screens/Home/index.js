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
    const {artists, genres, albuns, data} = useStateValueData();
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
                <TextAll name="Géneros" ver="Ver todos >" />
                <Musics>
                    <Genres data={genres} color={'#fff'} bgColor={'#858585'} />
                </Musics>
                <TextAll name="Albuns" ver="Ver todos >" />
                <Musics>
                    <Albuns data={albuns} />
                </Musics>
                <TextAll name="Explore" ver="Ver todos >" />
                <Musics>
                    <Genres
                        data={data.explore}
                        color={'#fffffff9'}
                        bgColor={'#FF2D55'}
                    />
                </Musics>
                <TextAll name="Artistas" ver="Ver todos >" />
                <Musics>
                    <Artists data={artists} />
                </Musics>
            </Scroller>
        </Container>
    );
};
