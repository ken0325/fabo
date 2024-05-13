import { Grid } from "@mui/material";

const BusinessHours = () => {
    return (
        <div>
            <h3>營業時間</h3>
            <p>營業中</p>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                direction="row"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: 50,
                }}>
                <Grid item xs={6}>
                    星期一
                </Grid>
                <Grid item xs={6}>
                    11:00 - 21:00
                </Grid>
                <Grid item xs={6}>
                    星期二
                </Grid>
                <Grid item xs={6}>
                    11:00 - 21:00
                </Grid>
                <Grid item xs={6}>
                    星期三
                </Grid>
                <Grid item xs={6}>
                    11:00 - 21:00
                </Grid>
                <Grid item xs={6}>
                    星期四
                </Grid>
                <Grid item xs={6}>
                    11:00 - 21:00
                </Grid>
                <Grid item xs={6}>
                    星期五
                </Grid>
                <Grid item xs={6}>
                    11:00 - 21:00
                </Grid>
                <Grid item xs={6}>
                    星期六
                </Grid>
                <Grid item xs={6}>
                    11:00 - 21:00
                </Grid>
                <Grid item xs={6}>
                    星期日
                </Grid>
                <Grid item xs={6}>
                    11:00 - 21:00
                </Grid>
            </Grid>
        </div>
    );
};
export default BusinessHours;
