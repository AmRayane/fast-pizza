import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
function EmptyCart() {
  return (
    <div className="space-y-3 px-4 py-5">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
