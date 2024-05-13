import "./App.css";
import { UserContextContainer } from "./contexts/UserContext";
import FaboAppBar from "./modules/fabo-app-bar/FaboAppBar";
import { Outlet } from "react-router";
import MenuDrawer from "./modules/navigation/MenuDrawer";
import { useState } from "react";
import FaboFooter from "./modules/fabo-app-footer/FaboFooter";

const MainHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <FaboAppBar
      drawerContent={<MenuDrawer />}
      drawerOpen={drawerOpen}
      drawerOnClose={() => setDrawerOpen(false)}
      drawerOnToggle={handleDrawerToggle}
    />
  );
};

const Footer = () => {
  return (
    <FaboFooter/>
  );
}

const FaboApp = () => {
  return (
    <UserContextContainer.Provider>
      <MainHeader />
      <Outlet />
      <Footer />
    </UserContextContainer.Provider>
  );
};

export default FaboApp;
