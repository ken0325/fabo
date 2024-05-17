import { createContainer } from "unstated-next"
import { useState, useEffect, useRef, SetStateAction } from 'react';
import { SalonCustomerCommentType } from '../../../types/SalonCustomerComment';

export const useWatchSalonComment = () => {
    const [customerComment, setCustomerComment] = useState<SalonCustomerCommentType[]>([]);
    const URL = "";
    // const [loading, setLoading] = useState(false);
    // const fetchData = async () => {
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
    //         console.log(error); 
    //     }
    // };

    useEffect(() => {
        // fetchData();
        setCustomerComment(
            [
                {
                    id: "1", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
                    image: [
                        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
                        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
                        "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
                        "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
                        "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
                        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
                        "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
                        "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
                        "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
                    ]
                },
                {
                    id: "2", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "abc",
                    image: [
                        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
                        "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
                        "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
                    ]
                },
                { id: "3", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "tttttttt", image: [] },
                { id: "4", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "goodgood", image: [] },
                { id: "5", avatar: "/static/images/avatar/1.jpg", name: "2", date: "2024年5月13日", marks: 5.0, comment: "good1", image: [] },
                { id: "6", avatar: "/static/images/avatar/1.jpg", name: "3", date: "2024年5月13日", marks: 2.0, comment: "good2", image: [] },
                { id: "7", avatar: "/static/images/avatar/1.jpg", name: "4", date: "2024年5月13日", marks: 4.0, comment: "good3", image: [] },
                { id: "8", avatar: "/static/images/avatar/1.jpg", name: "5", date: "2024年5月13日", marks: 5.0, comment: "dsfsd", image: [] },
                { id: "9", avatar: "/static/images/avatar/1.jpg", name: "6", date: "2024年5月13日", marks: 5.0, comment: "sdf", image: [] },
                { id: "10", avatar: "/static/images/avatar/1.jpg", name: "7", date: "2024年5月13日", marks: 1.0, comment: "dsf", image: [] },
                { id: "11", avatar: "/static/images/avatar/1.jpg", name: "8", date: "2024年5月13日", marks: 5.0, comment: "sdfsdfsdf", image: [] },
                { id: "12", avatar: "/static/images/avatar/1.jpg", name: "9", date: "2024年5月13日", marks: 1.0, comment: "sdf", image: [] },
                { id: "13", avatar: "/static/images/avatar/1.jpg", name: "0", date: "2024年5月13日", marks: 3.0, comment: "bfdbbb", image: [] },
                { id: "14", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "tttttttt", image: [] },
                { id: "15", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "goodgood", image: [] },
                { id: "16", avatar: "/static/images/avatar/1.jpg", name: "2", date: "2024年5月13日", marks: 5.0, comment: "good1", image: [] },
                { id: "17", avatar: "/static/images/avatar/1.jpg", name: "3", date: "2024年5月13日", marks: 2.0, comment: "good2", image: [] },
                { id: "18", avatar: "/static/images/avatar/1.jpg", name: "4", date: "2024年5月13日", marks: 4.0, comment: "good3", image: [] },
                { id: "118", avatar: "/static/images/avatar/1.jpg", name: "5", date: "2024年5月13日", marks: 5.0, comment: "dsfsd", image: [] },
                { id: "1119", avatar: "/static/images/avatar/1.jpg", name: "6", date: "2024年5月13日", marks: 5.0, comment: "sdf", image: [] },
                { id: "111110", avatar: "/static/images/avatar/1.jpg", name: "7", date: "2024年5月13日", marks: 1.0, comment: "dsf", image: [] },
                { id: "111111", avatar: "/static/images/avatar/1.jpg", name: "8", date: "2024年5月13日", marks: 5.0, comment: "sdfsdfsdf", image: [] },
                { id: "111112", avatar: "/static/images/avatar/1.jpg", name: "9", date: "2024年5月13日", marks: 1.0, comment: "sdf", image: [] },
                { id: "111113", avatar: "/static/images/avatar/1.jpg", name: "0", date: "2024年5月13日", marks: 3.0, comment: "bfdbbb", image: [] },
                { id: "11111", avatar: "/static/images/avatar/1.jpg", name: "0", date: "2024年5月13日", marks: 3.0, comment: "bfdbbb", image: [] },
                { id: "22222", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "tttttttt", image: [] },
                { id: "222", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "goodgood", image: [] },
                { id: "3333", avatar: "/static/images/avatar/1.jpg", name: "2", date: "2024年5月13日", marks: 5.0, comment: "good1", image: [] },
                { id: "4444", avatar: "/static/images/avatar/1.jpg", name: "3", date: "2024年5月13日", marks: 2.0, comment: "good2", image: [] },
                { id: "55555", avatar: "/static/images/avatar/1.jpg", name: "4", date: "2024年5月13日", marks: 4.0, comment: "good3", image: [] },
                { id: "88888", avatar: "/static/images/avatar/1.jpg", name: "5", date: "2024年5月13日", marks: 5.0, comment: "dsfsd", image: [] },
                { id: "777777", avatar: "/static/images/avatar/1.jpg", name: "6", date: "2024年5月13日", marks: 5.0, comment: "sdf", image: [] },
                { id: "111110", avatar: "/static/images/avatar/1.jpg", name: "7", date: "2024年5月13日", marks: 1.0, comment: "dsf", image: [] },
                { id: "888", avatar: "/static/images/avatar/1.jpg", name: "8", date: "2024年5月13日", marks: 5.0, comment: "sdfsdfsdf", image: [] },
                { id: "99999", avatar: "/static/images/avatar/1.jpg", name: "9", date: "2024年5月13日", marks: 1.0, comment: "sdf", image: [] },
                { id: "11110000013", avatar: "/static/images/avatar/1.jpg", name: "0", date: "2024年5月13日", marks: 3.0, comment: "bfdbbb", image: [] },
            ]
        );
    }, [])

    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    const pageCount = Math.ceil(customerComment.length / itemsPerPage);
    const currentItems = customerComment.slice(
        (page - 1) * itemsPerPage,
        (page) * itemsPerPage
    );
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return {
        customerComment,
        pageCount,
        currentItems,
        page,
        handleChange,
    }
}

export const WatchSalonCommentContainer = createContainer(useWatchSalonComment)