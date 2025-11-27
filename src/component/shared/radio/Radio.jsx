import React from "react";

function Radio({checked, onChange, option}) {
  return (
    <div>
      {" "}
      <label className="block cursor-pointer">
        <input
          type="radio"
          name="single-select"
          checked={checked}
          onChange={onChange}
        />{" "}
        {option.label} — ₹{option.value.price}
      </label>
    </div>
  );
}
export default Radio;
