import { Suspense } from "react";
import Pagination from "@mui/material/Pagination";
import { WatchSalonGalleryContainer } from "../contexts/WatchSalonGalleryContext";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import ImageViewer from "react-simple-image-viewer";
// react-native-image-zoom-viewer
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export const SalonGalleryPageBody = () => {
  const contextValue = WatchSalonGalleryContainer.useContainer();
  return (
    <Suspense fallback={<div>loading</div>}>
      <p>Gallery</p>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={()=>{contextValue.filter('')}}>All</Button>
        {contextValue.salonGalleryCategory.map((item) => (
          <Button variant="outlined" key={item.id} onClick={()=>{contextValue.filter(item.category)}}>{item.category}</Button>
        ))}
      </Stack>
      <ImageList cols={6}>
        {contextValue.currentItems.map((item, index, arr) => (
          <ImageListItem key={item.id}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              loading="lazy"
              alt=""
              onClick={() => contextValue.openImageViewer(index)}
            />
          </ImageListItem>
        ))}
        {contextValue.isViewerOpen && (
        <ImageViewer
          src={contextValue.currentItems.map((e) => (e.img))}
          currentIndex={contextValue.currentImage}
          onClose={contextValue.closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
          closeOnClickOutside={true}
          rightArrowComponent={<ArrowCircleRightIcon sx={{ fontSize: 80 }}></ArrowCircleRightIcon>}
          leftArrowComponent={<ArrowCircleLeftIcon sx={{ fontSize: 80 }}></ArrowCircleLeftIcon>}
        />
      )}
      </ImageList>
      <Pagination
        count={contextValue.pageCount}
        page={contextValue.page}
        onChange={contextValue.handleChange}
      />
    </Suspense>
  );
};
