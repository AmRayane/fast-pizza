import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantitym,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "../cart/cartSlice";

export default function UpdateItemQuantity({ id }) {
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantitym(id))}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}
