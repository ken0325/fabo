import { createContainer } from "unstated-next";
import { useState, useEffect } from "react";
import { SalonGalleryType } from "../../../types/SalonGallery";
import { SalonGalleryCategoryType } from "../../../types/SalonGalleryCategory";

export const useWatchSalonGallery = () => {
  const [salonImages, setSalonImages] = useState<SalonGalleryType[]>([]);
  const [salonImagesFiltered, setSalonImagesFiltered] = useState<SalonGalleryType[]>([]);
  const [filterValue, setFilterValue] = useState("");
  //   const URL = "";
  //   const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const pageCount = filterValue === "" ? Math.ceil(salonImages.length / itemsPerPage) : Math.ceil(salonImagesFiltered.length / itemsPerPage);
  const currentItems =
    filterValue === ""
      ? salonImages.slice((page - 1) * itemsPerPage, page * itemsPerPage)
      : salonImagesFiltered.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const [salonGalleryCategory, setSalonGalleryCategory] = useState<SalonGalleryCategoryType[]>([]);

  const filter = (value: string) => {
    setFilterValue(value);
    value === "" ? setSalonImagesFiltered(salonImages) : setSalonImagesFiltered(salonImages.filter((image) => image.type === value));
    setPage(1);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    // fetchData();
    setSalonGalleryCategory([
      {
        id: 1,
        salonId: 100,
        category: '商舖環境',
      },
      {
        id: 2,
        salonId: 100,
        category: '作品集',
      },
    ])
    setSalonImages([
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "商舖環境",
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "商舖環境",
      },
      {
        id: 3,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "商舖環境",
      },
      {
        id: 4,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "商舖環境",
      },
      {
        id: 5,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "商舖環境",
      },
      {
        id: 6,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "商舖環境",
      },
      {
        id: 7,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "商舖環境",
      },
      {
        id: 8,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "商舖環境",
      },
      {
        id: 9,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "商舖環境",
      },
      {
        id: 10,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "商舖環境",
      },
      {
        id: 11,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "商舖環境",
      },
      {
        id: 12,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "商舖環境",
      },
      {
        id: 13,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "商舖環境",
      },
      {
        id: 14,
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        type: "商舖環境",
      },
      {
        id: 15,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        type: "作品集",
      },
      {
        id: 16,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        type: "作品集",
      },
      {
        id: 17,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        type: "作品集",
      },
      {
        id: 18,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        type: "作品集",
      },
      {
        id: 19,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        type: "作品集",
      },
      {
        id: 20,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        type: "作品集",
      },
      {
        id: 21,
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        type: "作品集",
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
    salonGalleryCategory,
  };
};

export const WatchSalonGalleryContainer = createContainer(useWatchSalonGallery);
