import { WatchSalonCommentContainer } from "../contexts/WatchSalonCommentContext";
import { SalonCommentPageBody } from "../components/WatchSalonCommentBody";

export const SalonCommentContainer = ({ children }: { children: JSX.Element }) => {
    return (
        <WatchSalonCommentContainer.Provider>{children}</WatchSalonCommentContainer.Provider>
    );
};

const WatchSalonCommentPage = () => {
    return (
        <SalonCommentContainer>
          <SalonCommentPageBody />
        </SalonCommentContainer>
      );
};

export default WatchSalonCommentPage;