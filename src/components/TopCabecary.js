import React from 'react';
import styled from 'styled-components/native';
import LogoName from '../assets/img/logo_name.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';
const Container = styled.View`
    background-color: #fff;
    /* height: 70px; */
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
`;
const SearchContainer = styled.View`
    flex-direction: row;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
`;
const SearchBotton = styled.View`
    background-color: #f0f0f0;
    flex: 8;
    border-radius: 15px;
    align-items: center;
    padding: 0 8px;
    flex-direction: row;
    height: 50px;
    elevation: 6;
`;
const UserBotton = styled.View`
    flex: 0.8;
    border-radius: 12px;
    margin-left: 10px;
    overflow: hidden;
    height: 32px;
`;

const SearchBottonInput = styled.View`
    overflow: hidden;
`;
const TextInput = styled.TextInput`
    align-items: center;
    font-family: 'Poppins-SemiBold';
    color: #0d0a1e;
`;
export default () => {
    return (
        <Container>
            <LogoName width="28%" />
            <SearchContainer>
                <SearchBotton>
                    <SearchBottonInput>
                        <MaterialIcons name="search" size={22} color="#000" />
                    </SearchBottonInput>
                    <SearchBottonInput style={{width: '90%'}}>
                        <TextInput
                            placeholderTextColor="#aaa"
                            placeholder="Pesquisar por musicas"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </SearchBottonInput>
                </SearchBotton>
                <UserBotton
                    style={{
                        elevation: 9,
                    }}>
                    <Image
                        source={require('../assets/img/khalid.png')}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                        }}
                    />
                </UserBotton>
            </SearchContainer>
        </Container>
    );
};
