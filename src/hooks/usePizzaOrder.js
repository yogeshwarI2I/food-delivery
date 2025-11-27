import React, {useCallback, useMemo, useReducer} from "react";
const initialState = {
  selectedBread: null,
  selectedToppings: [],
  resetFlag: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_BREAD":
      return {...state, selectedBread: action.payload};
    case "SET_TOPPINGS":
      return {...state, selectedToppings: action.payload};
    case "RESET_BILL":
      return {...initialState, resetFlag: !state.resetFlag};
    default:
      return state;
  }
}

function usePizzaOrder() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const totalPrice = useMemo(
    () =>
      (state.selectedBread ? state.selectedBread.price : 0) +
      state.selectedToppings.reduce((sum, t) => sum + t.price, 0),
    [state.selectedBread, state.selectedToppings]
  );

  const handleBreadSelect = useCallback(
    (bread) => dispatch({type: "SET_BREAD", payload: bread}),
    []
  );

  const handleToppingsSelect = useCallback(
    (toppings) => dispatch({type: "SET_TOPPINGS", payload: toppings}),
    []
  );

  const handleReset = useCallback(() => dispatch({type: "RESET_BILL"}), []);
  return {
    state,
    totalPrice,
    handleBreadSelect,
    handleToppingsSelect,
    handleReset,
  };
}

export default usePizzaOrder;
