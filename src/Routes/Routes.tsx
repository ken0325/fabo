import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../modules/home/HomePage";
import WatchSalonPage from "../modules/watch-salon/pages/WatchSalonPage";

export const router = createBrowserRouter([    
    {
        path: "/",
        element: <App/>,
        children: [
            { path: "", element: <HomePage/>},
            { path: "search", element: <WatchSalonPage/>}
        ]
    }
]
)