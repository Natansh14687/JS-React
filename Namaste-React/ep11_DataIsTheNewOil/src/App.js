import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const App = () => {
    return (
        <div>
            <UserContext.Provider value={{loggedInUser:"Natansh"}}>
                <UserContext.Provider value={{loggedInUser:"Elon Musk"}}>
                    <Header />
                </UserContext.Provider>
                <Outlet />
            </UserContext.Provider>
            
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element : <App />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : (<Suspense fallback={<h1>Loading.......</h1>}>
                    <About />
                </Suspense>)
                // element : <About />
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/restaurant/:resId",
                element : <RestaurantMenu />,
            },
            {
                path : "/grocery",
                element : (<Suspense fallback={<h1>Loading......</h1>}>
                            <Grocery />
                        </Suspense>)
                // element : <Grocery />
            },
        ],
        errorElement : <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);