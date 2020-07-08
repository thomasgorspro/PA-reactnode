import React, { createContext, useReducer } from "react";
import {
  initialState as authInitialState,
  reducer as authReducer,

} from "./reducers/auth";

const RootContext = createContext(null);

function combineReducers(reducerDict) {
  return function (state = {}, action) {
    return Object.keys(reducerDict).reduce((stateGlobal, curr) => {
      let slice = reducerDict[curr](state[curr], action);
      return { ...stateGlobal, [curr]: slice };
    }, state);
  };
}

const reducers = combineReducers({
  auth: authReducer,
});

const initialState = {
  auth: authInitialState,
};

export const RootProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {children}
    </RootContext.Provider>
  );
};

export default RootContext;
