import React, {useState, useEffect} from 'react';
import {useStateValueData} from '../../contexts/ContextProviderData';
import ControlsPlay from '../../components/ControlsPlay';
import {Container} from './styles';
export default () => {
    const {data} = useStateValueData();
    return (
        <Container>
            <ControlsPlay />
        </Container>
    );
};
