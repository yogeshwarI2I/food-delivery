import BreadGroup from "../component/home/BreadGroup";
import ToppingsGroup from "../component/home/ToppingsGroup";
import OrderSummary from "../component/shared/order/OrderSummary";
import usePizzaOrder from "../hooks/usePizzaOrder";

function Home() {
  const {
    state,
    totalPrice,
    handleBreadSelect,
    handleToppingsSelect,
    handleReset,
  } = usePizzaOrder();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🍕 Pizza Order</h2>
      <BreadGroup
        value={state.selectedBread}
        onChange={handleBreadSelect}
        resetFlag={state.resetFlag}
      />

      <ToppingsGroup
        value={state.selectedToppings}
        onChange={handleToppingsSelect}
        resetFlag={state.resetFlag}
      />
      <OrderSummary
        state={state}
        totalPrice={totalPrice}
        onReset={handleReset}
      />
    </div>
  );
}

export default Home;
