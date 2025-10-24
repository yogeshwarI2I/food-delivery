import React, {useEffect, useState} from "react";

function Select({options, isMultiSelect = false, onChange, resetFlag}) {
  const [selectedValues, setSelectedValues] = useState(
    isMultiSelect ? [] : null
  );

  useEffect(() => {
    setSelectedValues(isMultiSelect ? [] : null);
  }, [resetFlag, isMultiSelect]);

  const handleSelect = (option, checked) => {
    let updated;
    if (isMultiSelect) {
      updated = checked
        ? [...selectedValues, option.value]
        : selectedValues.filter((v) => v.name !== option.value.name);
      setSelectedValues(updated);
      onChange(updated);
    } else {
      setSelectedValues(option.value);
      onChange(option.value);
    }
  };

  const isChecked = (option) =>
    isMultiSelect
      ? selectedValues.some((v) => v.name === option.value.name)
      : selectedValues?.name === option.value.name;

  return (
    <div className="p-3 border rounded mb-4">
      {options.map((option, index) => (
        <label key={index} className="block cursor-pointer">
          <input
            type={isMultiSelect ? "checkbox" : "radio"}
            name={isMultiSelect ? "multi-select" : "single-select"}
            checked={isChecked(option)}
            onChange={(e) => handleSelect(option, e.target.checked)}
          />
          {option.label} — ₹{option.value.price}
        </label>
      ))}
    </div>
  );
}

export default React.memo(Select);
