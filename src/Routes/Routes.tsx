import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../modules/home/HomePage";
import WatchSalonPage from "../modules/watch-salon/pages/WatchSalonPage";
import ApplyFormPage from "../modules/join-as-partner/ApplyFormPage";
import WatchSalonDetailPage from "../modules/watch-salon-detail/pages/WatchSalonDetailPage";

export const router = createBrowserRouter([    
    {
        path: "/",
        element: <App/>,
        children: [
            { path: "", element: <HomePage/>},
            { path: "search", element: <WatchSalonPage/>},
            { path: "apply", element: <ApplyFormPage/>},
            { path: "detail/:salonID", element: <WatchSalonDetailPage/>}
        ]
    }
]
)