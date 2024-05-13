import { Grid } from "@mui/material";
import SalonResult from "../components/salon-result/SalonResult";
import SalonSearch from "../components/salon-search/SalonSearch";
import { WatchSalonContainer } from "../contexts/WatchSalonContext";

export const WatchSalContainer = ({ children }: { children: JSX.Element }) => {
  return (
    <WatchSalonContainer.Provider>{children}</WatchSalonContainer.Provider>
  );
};

const WatchSalonContext = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={4}>
        <SalonResult />
      </Grid>

      <Grid xs={8}>
        <SalonSearch />
      </Grid>
    </Grid>
  );
};

const WatchSalonPage = () => {
  return (
    <WatchSalContainer>
      <WatchSalonContext />
    </WatchSalContainer>
  );
};
export default WatchSalonPage;
