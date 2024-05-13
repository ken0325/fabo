import { Button, Rating, Stack } from "@mui/material";
import { Suspense } from "react";

interface Props {}
const HomePage = (props: Props) => {
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
    )
};
export default HomePage;