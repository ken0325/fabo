import { WatchSalonContainer } from "../contexts/WatchSalonContext";
import { SalonPageBody } from "../components/SalonPageBody";

export const WatchSalContainer = ({ children }: { children: JSX.Element }) => {
  return (
    <WatchSalonContainer.Provider>{children}</WatchSalonContainer.Provider>
  );
};

const WatchSalonPage = () => {
  return (
    <WatchSalContainer>
      <SalonPageBody />
    </WatchSalContainer>
  );
};
export default WatchSalonPage;
