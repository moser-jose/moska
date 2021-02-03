import React, {useState, useMemo, useEffect, useCallback} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import {useRoute, useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Container, ContainerArtist, Scroller, AlbunsArtist} from './styles';
import TextAll from '../../components/TextAll';
import Musics from '../../components/Musics';
import Albuns from '../../components/AlbunsVertical';
import {useStateValueData} from '../../contexts/ContextProviderData';
import ExplorerTop from '../../components/ExploreTop';

export default () => {
    const {albuns} = useStateValueData();
    return (
        <Container>
            <ExplorerTop valuetop="Albuns" value="Pesquisar por albuns" />
            <ContainerArtist>
                <Scroller>
                    <Albuns data={albuns} />
                </Scroller>
            </ContainerArtist>
        </Container>
    );
};
