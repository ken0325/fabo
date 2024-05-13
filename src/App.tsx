import "./App.css";
import { UserContextContainer } from "./contexts/UserContext";
import FaboAppBar from "./modules/fabo-app-bar/FaboAppBar";
import { Outlet } from "react-router";

const MainHeader = () => {
  return <FaboAppBar />;
};

const FaboApp = () => {
  return (
    <UserContextContainer.Provider>
      <MainHeader />
      <Outlet />
    </UserContextContainer.Provider>
  );
};

export default FaboApp;
