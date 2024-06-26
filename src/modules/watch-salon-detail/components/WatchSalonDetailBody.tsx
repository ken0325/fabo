import { Grid, Stack } from "@mui/material";
import { Suspense } from "react";
import SalonBaseInfo from "../components/salon-base-info/SalonBaseInfo";
import SalonFeature from "../components/salon-features/SalonFeatures";
import SalonPlan from "../components/salon-plan/SalonPlan";
import SalonInformation from "../components/salon-information/SalonInformation";
import SalonIntroduction from "../components/salon-introduction/SalonIntroduction";
import SalonCustomerComment from "../components/salon-customer-comment/SalonCustomerComment";
import SalonHairstylist from "../components/salon-hairstylist/SalonHairstylist";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const SalonDetailPageBody = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Grid container spacing={2} style={{ marginTop: "10px" }}>
        <Grid item xs={12}>
          <SalonBaseInfo />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{ marginBottom: "10px", marginTop: "10px" }}
      >
        <Grid item xs={12} sm={12} md={8}>
          <SalonPlan />
          <SalonIntroduction />
          <SalonCustomerComment />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Stack direction="column" spacing={2}>
            <SalonFeature />
            <SalonInformation />
            <SalonHairstylist />
          </Stack>
        </Grid>
      </Grid>
    </Suspense>
  );
};
