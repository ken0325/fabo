import { Grid } from "@mui/material";
import { WatchSalonCommentContainer } from "../contexts/WatchSalonCommentContext";

export const SalonCommentContainer = ({ children }: { children: JSX.Element }) => {
    return (
        <WatchSalonCommentContainer.Provider>{children}</WatchSalonCommentContainer.Provider>
    );
};

const WatchSalonCommentPage = () => {
    return (
        <p>this is comment</p>
    );
};

export default WatchSalonCommentPage;