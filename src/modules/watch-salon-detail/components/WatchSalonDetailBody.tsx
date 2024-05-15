import { Grid } from "@mui/material";
import { Suspense } from "react";
import SalonHeader from "../components/salon-header/SalonHeader";
import SalonContent from "../components/salon-content/SalonContent";

export const SalonDetailPageBody = () => {
    return (
        <Suspense fallback={<div>loading</div>}>
            <Grid marginBottom={10}>
                <SalonHeader />
                <SalonContent />
            </Grid>
        </Suspense>
    );
};
