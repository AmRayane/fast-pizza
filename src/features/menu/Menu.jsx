import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../utils/apiRestaurant";
import MenuItem from "../menu/MenuItem.jsx";
function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="m-auto divide-y divide-stone-200 px-3">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
