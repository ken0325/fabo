import { Suspense } from "react";

export const SalonGalleryPageBody = () => {
    return (
        <Suspense fallback={<div>loading</div>}>
            <p>Gallery</p>
        </Suspense>
    );
};
