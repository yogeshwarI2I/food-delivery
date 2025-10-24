import {useCallback, useMemo, useReducer} from "react";
import Select from "../select/Select";

const initialState = {
  selectedBread: null,
  selectedToppings: [],
  showBill: false,
  billData: null,
  resetFlag: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_BREAD":
      return {...state, selectedBread: action.payload};

    case "SET_TOPPINGS":
      return {...state, selectedToppings: action.payload};

    case "SHOW_BILL":
      return {
        ...state,
        showBill: true,
        billData: {
          bread: state.selectedBread,
          toppings: state.selectedToppings,
          total:
            (state.selectedBread ? state.selectedBread.price : 0) +
            state.selectedToppings.reduce((sum, t) => sum + t.price, 0),
        },
        selectedBread: null,
        selectedToppings: [],
        resetFlag: !state.resetFlag,
      };

    case "CLOSE_BILL":
      return {...state, showBill: false};

    default:
      return state;
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const breadTypes = useMemo(
    () => [
      {label: "Italian", value: {name: "italian", price: 50}},
      {label: "Focaccia", value: {name: "focaccia", price: 70}},
      {label: "Sourdough", value: {name: "sourdough", price: 90}},
    ],
    []
  );

  const toppingsList = useMemo(
    () => [
      {label: "Pepperoni", value: {name: "pepperoni", price: 90}},
      {label: "Mozzarella", value: {name: "mozzarella", price: 140}},
      {label: "Mushrooms", value: {name: "mushrooms", price: 70}},
    ],
    []
  );

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.selectedBread) {
      alert("Please choose a bread first!");
      return;
    }
    dispatch({type: "SHOW_BILL"});
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Pizza Order</h2>

      <Select
        options={breadTypes}
        isMultiselect={false}
        value={state.selectedBread}
        onChange={handleBreadSelect}
        resetFlag={state.resetFlag}
      />
      <br></br>
      <Select
        options={toppingsList}
        isMultiSelect={true}
        value={state.selectedToppings}
        onChange={handleToppingsSelect}
        resetFlag={state.resetFlag}
      />
      <br></br>
      <div className="mt-5 font-semibold text-lg">
        Total Price: ₹{totalPrice}
      </div>
      <br></br>
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Show Bill
      </button>

      {state.showBill && state.billData && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="text-lg font-bold mb-2">Total Bill</h3>

          <p>
            <strong>Bread:</strong>{" "}
            {state.billData.bread
              ? `${state.billData.bread.name} — ₹${state.billData.bread.price}`
              : "Not selected"}
          </p>

          <p className="mt-2 font-semibold">Toppings:</p>
          {state.billData.toppings.length > 0 ? (
            <ul className="list-disc ml-6">
              {state.billData.toppings.map((flavour, index) => (
                <li key={index}>
                  {flavour.name} — ₹{flavour.price}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 ml-2">No toppings selected</p>
          )}

          <p className="mt-3 font-bold text-lg">
            Total: ₹{state.billData.total}
          </p>

          <button
            onClick={() => dispatch({type: "CLOSE_BILL"})}
            className="mt-3 px-3 py-2 border rounded hover:bg-gray-200"
          >
            Close Bill
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
