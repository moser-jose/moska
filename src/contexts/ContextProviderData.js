import React, {createContext, useEffect, useState, useContext} from 'react';
import data from '../api/data.json';
export const StateContext = createContext();
export const StateProviderData = ({children}) => {
    return (
        <StateContext.Provider value={{data}}>{children}</StateContext.Provider>
    );
};

export const useStateValueData = () => useContext(StateContext);
