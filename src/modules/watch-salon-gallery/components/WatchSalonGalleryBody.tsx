import { Suspense } from "react";
import Pagination from "@mui/material/Pagination";
import { WatchSalonGalleryContainer } from "../contexts/WatchSalonGalleryContext";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const SalonGalleryPageBody = () => {
  const contextValue = WatchSalonGalleryContainer.useContainer();
  return (
    <Suspense fallback={<div>loading</div>}>
      <p>Gallery</p>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={()=>{contextValue.filter('')}}>All</Button>
        <Button variant="outlined" onClick={()=>{contextValue.filter('A')}}>A type</Button>
        <Button variant="outlined" onClick={()=>{contextValue.filter('B')}}>B type</Button>
      </Stack>
      <ImageList cols={6}>
        {contextValue.currentItems.map((item, index, arr) => (
          <ImageListItem key={item.id}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Pagination
        count={contextValue.pageCount}
        page={contextValue.page}
        onChange={contextValue.handleChange}
      />
    </Suspense>
  );
};
