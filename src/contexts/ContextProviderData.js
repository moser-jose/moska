import React, {createContext, useEffect, useState, useContext} from 'react';
import data from '../api/data.json';
import api from '../api/Api';
export const StateContext = createContext();
export const StateProviderData = ({children}) => {
    const [artists, setArtists] = useState([]);
    const [albuns, setAlbuns] = useState([]);
    const [genres, setGenres] = useState([]);
    const [musics, setMusics] = useState([]);
    useEffect(() => {
        api.get('/artists')
            .then((response) => {
                setArtists(response.data);
            })
            .catch((err) => {
                console.log(err);
            });

        api.get('/albuns')
            .then((response) => {
                setAlbuns(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
        api.get('/musics')
            .then((response) => {
                setMusics(response.data);
            })
            .catch((err) => {
                console.log(err);
            });

        api.get('/genres')
            .then((response) => {
                setGenres(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <StateContext.Provider
            value={{musics, genres, artists, albuns, api, data}}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateValueData = () => useContext(StateContext);
