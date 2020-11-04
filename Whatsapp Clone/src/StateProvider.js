//setup data layer
//We need this to track the basket

import React, { createContext, useContext, useReducer} from 'react'

//This is the data layer
export const StateContext = createContext()

//Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* this chiildren refers to app js. look into the index.js file */}
        {children}
    </StateContext.Provider>
)

//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext)