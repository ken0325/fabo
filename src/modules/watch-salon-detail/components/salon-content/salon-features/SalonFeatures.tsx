import { Grid, Stack } from "@mui/material";
import BatterySaverIcon from '@mui/icons-material/BatterySaver';
import WifiIcon from '@mui/icons-material/Wifi';

const Features = () => {
    return (
        <div>
            <h1>|&nbsp;商户特色</h1>
            <Stack>
                <Grid
                    container 
                    direction="row"
                    justifyContent="start"
                >
                    <BatterySaverIcon />
                    <div>免費電話充電</div>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="start"
                >
                    <WifiIcon />
                    <div>免費Wifi</div>
                </Grid>
            </Stack>
        </div>
    );
};

export default Features;
