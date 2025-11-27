import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Checkbox from "./checkbox";
import {PizzaContext} from "../../../context/pizza/PizzaContext";
import {PizzaConstant} from "../../../constant/PizzaConstant";

function CheckboxGroup({onChange, resetFlag}) {
  const [selectedValues, setSelectedValues] = useState([]);
  const {state, dispatch} = useContext(PizzaContext);
  useEffect(() => setSelectedValues([]), [resetFlag]);
  useEffect(() => {
    dispatch({type: "SELECT_TOPPINGS", payload: PizzaConstant.toppingsList});
  }, [dispatch]);

  const handleSelect = useCallback(
    (option, checked) => {
      setSelectedValues((prev) => {
        const updated = checked
          ? [...prev, option.value]
          : prev.filter((v) => v.name !== option.value.name);
        onChange(updated);
        return updated;
      });
    },
    [onChange]
  );

  const isChecked = useCallback(
    (option) => selectedValues.some((v) => v.name === option.value.name),
    [selectedValues]
  );
  const toppingsOptions = useMemo(
    () => state.selectedToppings || [],
    [state.selectedToppings]
  );
  return (
    <div>
      {toppingsOptions?.map((option, index) => (
        <Checkbox
          key={index}
          option={option}
          checked={isChecked(option)}
          onChange={(e) => handleSelect(option, e.target.checked)}
        />
      ))}
    </div>
  );
}

export default CheckboxGroup;
