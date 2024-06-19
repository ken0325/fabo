import { WatchSalonHairstylistContainer } from "../contexts/WatchSalonHairstylistContext";
import { SalonHairstylistPageBody } from "../components/WatchSalonHairstylistBody";

export const SalonHairstylistContainer = ({ children }: { children: JSX.Element }) => {
    return (
        <WatchSalonHairstylistContainer.Provider>{children}</WatchSalonHairstylistContainer.Provider>
    );
};

const WatchSalonHairstylistPage = () => {
    return (
        <SalonHairstylistContainer>
            <SalonHairstylistPageBody />
        </SalonHairstylistContainer>
    );
};

export default WatchSalonHairstylistPage;