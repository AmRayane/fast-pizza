import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { useSelector } from "react-redux";

export default function Header() {
  const userName = useSelector((state) => state.user.userName);

  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-3 py-5 uppercase">
      <Link to="/" className="tracking-widest">
        fast pizza
      </Link>
      <SearchOrder />
      {userName && <Username />}
    </header>
  );
}
