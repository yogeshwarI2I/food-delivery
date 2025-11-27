import React from "react";

function OrderSummary({state, totalPrice, onReset}) {
  return (
    <div div className="mt-6 p-4 border rounded bg-gray-50">
      <h3 className="text-lg font-bold mb-3">Your Selection</h3>
      <p>
        <strong>Bread:</strong>{" "}
        {state.selectedBread
          ? `${state.selectedBread.name} — ₹${state.selectedBread.price}`
          : "Not selected"}
      </p>

      <p className="mt-3 font-semibold">Toppings:</p>
      {state.selectedToppings.length > 0 ? (
        <ul className="list-disc ml-6">
          {state.selectedToppings.map((topping, index) => (
            <li key={index}>
              {topping.name} — ₹{topping.price}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 ml-2">No toppings selected</p>
      )}
      <p className="mt-4 font-bold text-lg">Total: ₹{totalPrice}</p>
      <button
        onClick={onReset}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Reset Bill
      </button>
    </div>
  );
}

export default OrderSummary;
