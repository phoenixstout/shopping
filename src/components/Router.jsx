import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Shop";
import ErrorPage from "./ErrorPage";
import Cart from "./Cart";

export default function Router() {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Shop />,
            errorElement: <ErrorPage />
        },
        {
            path:'/Cart',
            element: <Cart />
        }
    ])

    return <RouterProvider router={router}/>
}