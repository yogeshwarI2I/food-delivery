import React from "react";
import CheckboxGroup from "../shared/checkbox/CheckboxGroup";

function ToppingsGroup({value, onChange, resetFlag}) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-lg">Choose Toppings</h3>
      <CheckboxGroup value={value} onChange={onChange} resetFlag={resetFlag} />
    </div>
  );
}

export default ToppingsGroup;
