import React from 'react';
import App from '../App';
import {StateProviderData} from './contexts/ContextProviderData';
export default function index() {
    return (
        <StateProviderData>
            <App />
        </StateProviderData>
    );
}
