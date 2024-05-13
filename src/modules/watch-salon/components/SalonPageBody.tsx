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
        <h1>【髮型屋推介】香港No.2 Hair Salon 網上預約平台｜獨家優惠</h1>
      </div>

      <Grid container spacing={2}>
        <Grid xs={3}  style={{paddingRight: '2%'}}>
          <SalonSearch />
        </Grid>
        <Grid xs={9}>
          <SalonResult />
        </Grid>
      </Grid>
    </Grid>
  );
};
