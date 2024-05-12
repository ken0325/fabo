import { Suspense } from "react";
import "./App.css";
import { Button, Rating, Stack } from "@mui/material";
import { UserContextContainer } from "./contexts/UserContext";
import FaboAppBar from "./modules/fabo-app-bar/FaboAppBar";

const MainHeader = () => {
  return <FaboAppBar />;
};

const MainContent = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button variant="contained">Hello world</Button>
          <Stack spacing={1}>
            <Rating name="size-small" defaultValue={2} size="small" />
            <Rating name="size-medium" defaultValue={2} />
            <Rating name="size-large" defaultValue={2} size="large" />
          </Stack>
        </header>
      </div>
    </Suspense>
  );
};

const FaboApp = () => {
  return (
    <UserContextContainer.Provider>
      <MainHeader />
      <MainContent />
    </UserContextContainer.Provider>
  );
};

export default FaboApp;
