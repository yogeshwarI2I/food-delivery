import RadioGroup from "../shared/radio/RadioGroup";

function BreadGroup({value, onChange, resetFlag}) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-lg">Choose Bread</h3>
      <RadioGroup value={value} onChange={onChange} resetFlag={resetFlag} />
    </div>
  );
}

export default BreadGroup;
