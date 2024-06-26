import { Container, Grid, Stack } from "@mui/material";
import BatterySaverIcon from "@mui/icons-material/BatterySaver";
import WifiIcon from "@mui/icons-material/Wifi";

const SalonFeatures = () => {
  return (
    <Container
      style={{ height: "auto", padding: "5px" }}
    >
      <h1>|&nbsp;商户特色</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} sm={12}>
          <Stack direction="row" justifyContent="start">
            <BatterySaverIcon />
            <div>免費電話充電</div>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={12}>
          <Stack direction="row" justifyContent="start">
            <WifiIcon />
            <div>免費Wifi</div>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SalonFeatures;
