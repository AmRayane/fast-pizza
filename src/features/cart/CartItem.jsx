import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deletItem, getTotalPrice } from "./cartSlice";
import UpdateItemQuantity from "../menu/UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, unitPirce, totalPrice } = item;
  const dispatch = useDispatch();

  function handleDeletItem() {
    dispatch(deletItem(pizzaId));
  }
  return (
    <li className="flex justify-between px-3 py-2">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-10">
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity id={pizzaId}></UpdateItemQuantity>
        <Button onClick={handleDeletItem} type="small">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
