import { Grid } from "@mui/material";
import { WatchSalonDetailContainer } from "../contexts/WatchSalonDetailContext";
// import { useParams } from 'react-router-dom';
import { SalonDetailPageBody } from "../components/WatchSalonDetailBody";

export const SalonDetailContainer = ({ children }: { children: JSX.Element }) => {
    return (
        <WatchSalonDetailContainer.Provider>{children}</WatchSalonDetailContainer.Provider>
    );
};

// function ProfilePage() {
//     let { salonID } = useParams();
//     console.log(salonID);
// }

// const WatchSalonDetailContext = () => {
//     return (
//         <></>
//     );
// };

const WatchSalonDetailPage = () => {
    return (
        // ProfilePage(),
        <SalonDetailContainer>
            <SalonDetailPageBody />
        </SalonDetailContainer>
    );
};

export default WatchSalonDetailPage;