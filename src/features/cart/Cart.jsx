import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../cart/cartSlice";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";
function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleClearCart() {
    dispatch(clearCart());
    navigate("/");
  }
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-bold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((cartItem) => (
          <CartItem item={cartItem} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button onClick={handleClearCart} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
