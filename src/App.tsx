import "./App.css";
import { UserContextContainer } from "./contexts/UserContext";
import FaboAppBar from "./modules/fabo-app-bar/FaboAppBar";
import { Outlet } from "react-router";
import MenuDrawer from "./modules/navigation/MenuDrawer";
import { useState } from "react";
import { Container, styled } from "@mui/material";

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
const StyledContainer = styled(Container)({ minHeight: "calc(100vh - 96px)"})

const FaboApp = () => {
  return (
    <UserContextContainer.Provider>
      <MainHeader />
      <StyledContainer maxWidth="lg">
      <Outlet />
      </StyledContainer>
    </UserContextContainer.Provider>
  );
};

export default FaboApp;
