import { Grid } from "@mui/material";
import { WatchSalonDetailContainer } from "../contexts/WatchSalonDetailContext";
import { useParams } from 'react-router-dom';

export const SalonDetailContainer = ({ children }: { children: JSX.Element }) => {
    return (
        <WatchSalonDetailContainer.Provider>{children}</WatchSalonDetailContainer.Provider>
    );
};

function ProfilePage() {
    // Get the userId param from the URL.
    let { salonID } = useParams();
    // ...
    console.log(salonID);
}

const WatchSalonDetailContext = () => {
    return (
        <></>
    );
};

const WatchSalonDetailPage = () => {
    return (
        ProfilePage(),
        <SalonDetailContainer>
            <WatchSalonDetailContext />
        </SalonDetailContainer>
    );
};

export default WatchSalonDetailPage;