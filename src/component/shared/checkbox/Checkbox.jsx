import React from "react";

function Checkbox({option, checked, onChange}) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="multi-select"
          checked={checked}
          onChange={onChange}
        />
        {option.label} — ₹{option.value.price}
      </label>
    </div>
  );
}

export default Checkbox;
