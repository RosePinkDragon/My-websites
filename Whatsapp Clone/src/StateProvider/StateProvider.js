//setup data layer
//We need this to track the basket

import React, { createContext, useContext, useReducer} from 'react'

//This is the data layer
export const StateContext = createContext()

//Build a provider
export const StateProvider = ({ reducer, initialState, childer }) => {
    <StateContext.Provider value={useReducer }
}
