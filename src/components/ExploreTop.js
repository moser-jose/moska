import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Logo from '../assets/img/logo.svg';

const Cabecario = styled.View`
    height: 150px;
    padding: 20px;
`;
const Voltar = styled.TouchableOpacity`
    /* position: absolute;
    left: 15px;
    top: 20px; */
    background-color: #35384090;
    height: 35px;
    width: 35px;
    border-radius: 17.5px;
    justify-content: center;
    align-items: center;
`;
const SearchContainer = styled.View``;
const SearchBotton = styled.View`
    flex-direction: row;
    align-items: center;
    elevation: 6;
    background-color: #f0f0f0;
    border-radius: 15px;
    padding: 0 8px;
`;
const SearchBottonInput = styled.View``;
const Texto = styled.Text`
    align-items: center;
    font-family: 'Poppins-Bold';
    color: #0d0a1e;
    font-size: 30px;
    margin: 10px 0;
`;

const TextInput = styled.TextInput`
    align-items: center;
    font-family: 'Poppins-SemiBold';
    color: #0d0a1e;
    padding-top: 15px;
`;
const TextoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export default ({value, valuetop}) => {
    const navigation = useNavigation();
    return (
        <Cabecario>
            <Voltar onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons
                    name="arrow-left-thick"
                    color="#fff"
                    size={23}
                />
            </Voltar>
            <TextoContainer>
                <Texto>{valuetop}</Texto>
                <Logo width="60" />
            </TextoContainer>
            <SearchContainer>
                <SearchBotton>
                    <SearchBottonInput>
                        <MaterialIcons name="search" size={22} color="#000" />
                    </SearchBottonInput>
                    <SearchBottonInput style={{width: '90%'}}>
                        <TextInput
                            placeholderTextColor="#aaa"
                            placeholder={value}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </SearchBottonInput>
                </SearchBotton>
            </SearchContainer>
        </Cabecario>
    );
};
