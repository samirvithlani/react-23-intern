import { Outlet } from "react-router-dom";
import { UserLogin } from "./components/users/UserLogin";

const useAuth = () => {
  var flag = localStorage.getItem("_id") ? true : false;
  return flag;
};

const ProtectedRoutes = () => {
  const flag = useAuth();

  return flag ? <Outlet /> : <UserLogin />;
};
export default ProtectedRoutes;
