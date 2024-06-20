import { createContainer } from "unstated-next";
import { useState, useEffect } from "react";
import { SalonGalleryType } from "../../../types/SalonGallery";

export const useWatchSalonGallery = () => {
  const [salonImages, setSalonImages] = useState<SalonGalleryType[]>([]);
  const [salonImagesFiltered, setSalonImagesFiltered] = useState<SalonGalleryType[]>([]);
  const [filterType, setFilterType] = useState("");
  //   const URL = "";
  //   const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const pageCount = filterType === "" ? Math.ceil(salonImages.length / itemsPerPage) : Math.ceil(salonImagesFiltered.length / itemsPerPage);
  //   const [pageCount, setPageCount] = useState(0);
  // const currentItems = salonImages.slice(
  //   (page - 1) * itemsPerPage,
  //   page * itemsPerPage
  // );

    // const currentItems =
    //   filterType === ""
    //     ? salonImages.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    //     : salonImages
    //         .filter((image) => image.type === filterType)
    //         .slice((page - 1) * itemsPerPage, page * itemsPerPage);
    const currentItems =
      filterType === ""
        ? salonImages.slice((page - 1) * itemsPerPage, page * itemsPerPage)
        : salonImagesFiltered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const filter = (value: string) => {
    setFilterType(value);
    value === "" ? setSalonImagesFiltered(salonImages) : setSalonImagesFiltered(salonImages.filter((image) => image.type === value));
    setPage(1);
    // setPageCount(
    //   Math.ceil(
    //     salonImages.filter((image) => image.type === filterType).length /
    //       itemsPerPage
    //   )
    // );
    // setPage(1);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    // fetchData();
    setSalonImages([
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "A",
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "A",
      },
      {
        id: 3,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "A",
      },
      {
        id: 4,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "A",
      },
      {
        id: 5,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "A",
      },
      {
        id: 6,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "A",
      },
      {
        id: 7,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "A",
      },
      {
        id: 8,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "A",
      },
      {
        id: 9,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "A",
      },
      {
        id: 10,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "A",
      },
      {
        id: 11,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "A",
      },
      {
        id: 12,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "A",
      },
      {
        id: 13,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "A",
      },
      {
        id: 14,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "A",
      },
      {
        id: 15,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        type: "B",
      },
      {
        id: 16,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        type: "B",
      },
      {
        id: 17,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        type: "B",
      },
      {
        id: 18,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        type: "B",
      },
      {
        id: 19,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        type: "B",
      },
      {
        id: 20,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        type: "B",
      },
      {
        id: 21,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        type: "B",
      },
    ]);
  }, []);

  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //         const response = await fetch(URL)
  //             .then((res) => {
  //                 return res.json();
  //             })
  //             .then((data) => {
  //                 setCustomerComment(data);
  //                 setLoading(false);
  //             });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return {
    salonImages,
    pageCount,
    currentItems,
    page,
    handleChange,
    filter,
  };
};

export const WatchSalonGalleryContainer = createContainer(useWatchSalonGallery);
