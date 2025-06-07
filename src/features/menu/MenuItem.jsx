import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteMenuItem from "../cart/DeleteMenuItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const isInCart = useSelector(getCurrentQuantityById(id)) > 0;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`w-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-grow flex-col">
        <p className="pt-0.8 font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          <div className="flex gap-4">
            {!soldOut && isInCart && (
              <UpdateItemQuantity id={id}></UpdateItemQuantity>
            )}
            {isInCart && <DeleteMenuItem id={id}>Delete</DeleteMenuItem>}
            {!soldOut && !isInCart && (
              <Button onClick={handleAddToCart} type="small">
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
