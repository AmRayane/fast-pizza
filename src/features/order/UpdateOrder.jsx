import { useFetcher, useParams } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../utils/apiRestaurant";

export default function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="POST">
      <Button type="primary">Add priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  console.log(params);
  await updateOrder(params.orderId, data);
  return null;
}
