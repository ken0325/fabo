import { WatchSalonGalleryContainer } from "../contexts/WatchSalonGalleryContext";
import { SalonGalleryPageBody } from "../components/WatchSalonGalleryBody";

export const SalonGalleryContainer = ({ children }: { children: JSX.Element }) => {
    return (
        <WatchSalonGalleryContainer.Provider>{children}</WatchSalonGalleryContainer.Provider>
    );
};

const WatchSalonGalleryPage = () => {
    return (
        <SalonGalleryContainer>
            <SalonGalleryPageBody />
        </SalonGalleryContainer>
    );
};

export default WatchSalonGalleryPage;