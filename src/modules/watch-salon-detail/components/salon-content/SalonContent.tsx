import { Grid, Stack } from "@mui/material";
import SalonInfo from './salon-info/SalonInfo';
import SalonFeatures from './salon-features/SalonFeatures';
import SalonPlan from './salon-plan/SalonPlan';
import SalonIntroduction from './salon-introduction/SalonIntroduction';
import SalonCustomerComment from './salon-customer-comment/SalonCustomerComment';
import SalonHairstylist from './salon-hairstylist/SalonHairstylist';

const SalonContent = () => {
    return (
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid item xs={8} style={{
                paddingRight: 50,
            }}>
                <Stack>
                    {/* <SalonPlan /> */}
                    <SalonIntroduction />
                    <SalonCustomerComment />
                </Stack>
            </Grid>
            <Grid item xs={4}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Stack>
                        <SalonInfo />
                        <SalonFeatures />
                        <SalonHairstylist />
                    </Stack>
                </div>
            </Grid>
        </Grid>
    );
}

export default SalonContent;
