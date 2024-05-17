import { Grid } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import CustomerCommentCard from "./customer-comment/CustomerCommentCard";
import { WatchSalonCommentContainer } from "../contexts/WatchSalonCommentContext";

export const SalonCommentPageBody = () => {
  const contextValue = WatchSalonCommentContainer.useContainer();

  return (
    <Grid>
      <div
        style={{
          paddingBottom: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>XXXX的所有評價</h1>
      </div>
      {contextValue.currentItems.map((item, index, arr) => (
        <CustomerCommentCard key={item.id} id={item.id} name={item.name} date={item.date} marks={item.marks} comment={item.comment} image={item.image} avatar={item.avatar} />
      ))}
      {/* <CustomerCommentCard /> */}
      {/* <Pagination count={contextValue.pageCount} onClick={() => contextValue.handlePageChange(contextValue.pageCount - 1)}/> */}
      <Pagination count={contextValue.pageCount} page={contextValue.page} onChange={contextValue.handleChange} />
    </Grid>
  );
};
