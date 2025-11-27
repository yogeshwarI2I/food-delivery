export const pizzaReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_BREAD":
      return {...state, selectedBread: action.payload};

    case "SELECT_TOPPINGS":
      return {...state, selectedToppings: action.payload};
    default:
      return state;
  }
};

export const initialState = {
  selectedBread: [],
  selectedToppings: [],
};
