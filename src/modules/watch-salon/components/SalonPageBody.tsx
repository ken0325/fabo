import { Grid } from "@mui/material";
import SalonSearch from "./salon-page-body/salon-search/SalonSearch";
import SalonResult from "./salon-page-body/salon-result/SalonResult";

export const SalonPageBody = () => {
  return (
    <Grid>
      <div
        style={{
          paddingBottom: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>全部髮型屋</h1>
      </div>

      <Grid container spacing={2}>
        <Grid xs={3}>
          <SalonSearch />
        </Grid>
        <Grid xs={1}>
        </Grid>
        <Grid xs={8}>
          <SalonResult />
        </Grid>
      </Grid>
    </Grid>
  );
};
