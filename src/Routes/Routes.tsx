import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../modules/homee/HomeePage";
import WatchSalonPage from "../modules/watch-salon/pages/WatchSalonPage";
import ApplyFormPage from "../modules/join-as-partner/ApplyFormPage";
import WatchSalonDetailPage from "../modules/watch-salon-detail/pages/WatchSalonDetailPage";
import WatchSalonCommentPage from "../modules/watch-salon-comment/pages/WatchSalonCommentPage";
import WatchSalonGalleryPage from "../modules/watch-salon-gallery/pages/WatchSalonGalleryPage";
import WatchSalonHairstylistPage from "../modules/watch-salon-hairstylist/pages/WatchSalonHairstylistPage";

export const router = createBrowserRouter([    
    {
        path: "/",
        element: <App/>,
        children: [
            { path: "", element: <HomePage/>},
            // join us
            { path: "apply", element: <ApplyFormPage/>},
            // salon
            { path: "search", element: <WatchSalonPage/>},
            { path: "salon/:salonID/detail", element: <WatchSalonDetailPage/>},
            { path: "salon/:salonID/comment", element: <WatchSalonCommentPage/>},
            { path: "salon/:salonID/gallery", element: <WatchSalonGalleryPage/>},
            { path: "salon/:salonID/hairstylist", element: <WatchSalonHairstylistPage/>},
        ]
    }
]
)