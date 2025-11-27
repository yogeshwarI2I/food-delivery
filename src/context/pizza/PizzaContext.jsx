import React, {createContext, useMemo, useReducer} from "react";
import {initialState, pizzaReducer} from "./PizzaProvider";

// eslint-disable-next-line react-refresh/only-export-components
export const PizzaContext = createContext({
  state: initialState,
  dispatch: () => {},
});

export function PizzaProvider({children}) {
  const [state, dispatch] = useReducer(pizzaReducer, initialState);
  const contextValue = useMemo(() => ({state, dispatch}), [state]);
  return (
    <PizzaContext.Provider value={contextValue}>
      {children}
    </PizzaContext.Provider>
  );
}
