import { Suspense } from "react";

export const SalonHairstylistPageBody = () => {
    return (
        <Suspense fallback={<div>loading</div>}>
            <p>Hairstylist</p>
        </Suspense>
    );
};
