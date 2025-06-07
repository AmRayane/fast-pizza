import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="my-10 p-10 text-center">
      <h1 className="mb-10 text-xl font-semibold text-stone-700 md:text-2xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName ? (
        <Button to="/menu" type="primary">
          Continue ordering {userName}
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
