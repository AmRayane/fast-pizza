// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../utils/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import UpdateItemQuantity from "../menu/UpdateItemQuantity";
import UpdateOrder from "./UpdateOrder";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-6 divide-y px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-bold">Order #{id} Status</h2>

        <div className="">
          {priority && (
            <span className="mr-4 rounded-full bg-red-500 px-4 py-2 uppercase text-red-50">
              Priority
            </span>
          )}
          <span className="mr-4 rounded-full bg-green-500 px-4 py-2 uppercase text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between rounded-sm bg-stone-300 px-4 py-5">
        <p className="font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrivfed"}
        </p>
        <p className="mt-0 text-xs text-stone-600">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y px-4">
        {cart.map((carteItem) => (
          <OrderItem item={carteItem} id={carteItem.id} />
        ))}
      </ul>

      <div className="items-center space-y-2 rounded-sm bg-stone-300 px-4 py-5">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      <div className="flex w-full justify-end px-5 py-5">
        <UpdateOrder />
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
