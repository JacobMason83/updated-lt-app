import { createContext, useContext, useReducer } from "react";
// setting up data layer
// need this to track the basket or other data needed for the app itself
// this is the data layer 
// this is setting up the context so that it will be able to set across the application will make much easier for getting data from the db
export const StateContext = createContext()

// build a provider that will allow for the reducer, initial state and the children to be brought into the stroe
export const StateProvider = ({reducer, initalState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
)

// export this as a hook we created called useDataStore
export const useDataStore = () => useContext(StateContext)