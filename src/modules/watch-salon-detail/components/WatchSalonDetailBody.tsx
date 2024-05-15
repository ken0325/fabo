import { Grid, ImageListItem, Link, Stack } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Suspense } from "react";
import { Paper, styled } from "@mui/material";
import SalonInfo from "../components/salon-info/SalonInfo";
import SalonFeatures from "../components/salon-features/SalonFeatures";
import SalonImages from "../components/salon-images/SalonImages";
import VerifiedIcon from '@mui/icons-material/Verified';
import Introduction from "../components/salon-introduction/SalonIntroduction";
import CustomerComment from "../components/customer-comment/CustomerComment";
import SalonPlan from "../components/salon-plan/SalonPlan";

export const SalonDetailPageBody = () => {
    return (
        <Suspense fallback={<div>loading</div>}>
            <Grid marginBottom={10}>
                <div
                    style={{
                        display: "flex"
                    }}
                >
                    <h1>Hair Ponder(旺角店)</h1>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginLeft: 20
                        }}
                    >
                        <VerifiedIcon></VerifiedIcon><h5>認證商戶</h5>
                    </div>
                </div>
                <div
                    style={{
                        paddingBottom: 10,
                        display: "flex",
                        justifyContent: "start",
                    }}
                >
                    <StarIcon></StarIcon>
                    {'4.7(54個評價) 服務: 4.7 環境: 4.6 消費: 4.7'}
                </div>
                <div
                    style={{
                        paddingBottom: 10,
                        display: "flex",
                        justifyContent: "start",
                    }}
                >
                    <LocationOnIcon></LocationOnIcon>
                    {'旺角'}
                </div>
                <SalonImages />
                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                    <Grid item xs={8} style={{
                        paddingRight: 50,
                    }}>
                        <Stack>
                            <SalonPlan />
                            <Introduction />
                            <CustomerComment />
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
                            </Stack>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Suspense>
    );
};



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

