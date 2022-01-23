import React, { createContext, useState, useContext } from 'react';
import { InputDefault } from '../Tools/InputDefault';

const DataContext = createContext()

export default function DataProvider({ children }){
    const [data, setData] = useState(InputDefault)
    return(
        <DataContext.Provider value={{ data , setData }}>
            { children }
        </DataContext.Provider>
    );
}
export function useData() {
    const context = useContext(DataContext)
    const { data , setData } = context
    return { data , setData }
}