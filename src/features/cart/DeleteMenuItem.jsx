import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deletItem } from "./cartSlice";

export default function DeleteMenuItem({ children, id }) {
  const dispatch = useDispatch();
  function handleDeleteItem() {
    dispatch(deletItem(id));
  }
  return (
    <Button type="small" onClick={handleDeleteItem}>
      {children}
    </Button>
  );
}
