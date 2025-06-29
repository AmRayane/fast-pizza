import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.message || error.data}</p>
      <LinkButton>Go back </LinkButton>
    </div>
  );
}

export default NotFound;
