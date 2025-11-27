import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Radio from "./Radio";
import {PizzaConstant} from "../../../constant/PizzaConstant";
import {PizzaContext} from "../../../context/pizza/PizzaContext";

function RadioGroup({onChange, resetFlag}) {
  const [selectedValue, setSelectedValue] = useState(null);
  const {state, dispatch} = useContext(PizzaContext);
  useEffect(() => setSelectedValue(null), [resetFlag]);

  useEffect(() => {
    dispatch({type: "SELECT_BREAD", payload: PizzaConstant.breadTypes});
  }, [dispatch]);

  const handleSelect = useCallback(
    (option) => {
      setSelectedValue(option.value);
      onChange(option.value);
    },
    [onChange]
  );

  const isChecked = useCallback(
    (option) => {
      return selectedValue?.name === option.value.name;
    },
    [selectedValue]
  );
  const breadOptions = useMemo(
    () => state.selectedBread || [],
    [state.selectedBread]
  );
  return (
    <div>
      {breadOptions?.map((option, index) => (
        <Radio
          key={index}
          checked={isChecked(option)}
          onChange={() => handleSelect(option)}
          option={option}
        />
      ))}
    </div>
  );
}

export default RadioGroup;
