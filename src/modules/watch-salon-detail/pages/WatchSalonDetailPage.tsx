import { WatchSalonDetailContainer } from "../contexts/WatchSalonDetailContext";
import { SalonDetailPageBody } from "../components/WatchSalonDetailBody";

export const SalonDetailContainer = ({ children }: { children: JSX.Element }) => {
    return (
        <WatchSalonDetailContainer.Provider>{children}</WatchSalonDetailContainer.Provider>
    );
};

const WatchSalonDetailPage = () => {
    return (
        <SalonDetailContainer>
            <SalonDetailPageBody />
        </SalonDetailContainer>
    );
};

export default WatchSalonDetailPage;