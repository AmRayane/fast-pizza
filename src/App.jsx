import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Menu, { loader as menuLoader } from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder.jsx";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout.jsx";
import Error from "./ui/Error.jsx";
import { useSelector } from "react-redux";
import { action as updateOrderAction } from "./features/order/UpdateOrder.jsx";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader, // This will load the menu data before rendering   the Menu component
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader, // This will load the order data before rendering the Order component
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  const store = useSelector((state) => state);
  console.log(store);
  return <RouterProvider router={router} />;
}

export default App;
