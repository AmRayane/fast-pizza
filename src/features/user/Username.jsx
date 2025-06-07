import { useSelector } from "react-redux";

export default function Username() {
  const userName = useSelector((state) => state.user.userName);
  if (!Username) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}
