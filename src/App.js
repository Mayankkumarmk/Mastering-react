import React, {Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";
import Error from "./components/Error";

//core react 
// const nesDiv = React.createElement("div", { id: "parent" }, [

//     React.createElement("div", { id: "child1" }, [
//         React.createElement("h1", {}, "Hey i am h1 tag 🚀"),
//         React .createElement("h2", {}, "Hey i am h2 tag")
//     ]),

//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "Hey i am h1 tag"),
//         React.createElement("h2", {}, "Hey i am h2 tag")
//     ])  
// ])


//as it is funcional component somewhere a funcion.(so need {} curly baraces along with return )
//cant use {} lonely.
//babel is the monster that converts jsx into react element(object) 
const AppLayout = () => (
    <div>
        <div className="app">
            <Header />
            <Outlet />
        </div>
    </div>
)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />

            },
            {
                path: "/about",
                element: <About />

            },
            {
                path: "/grocery",
                element: <Suspense> <Grocery /></Suspense>

            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }

        ],
        errorElement: <Error />
    }

])


// const heading = React.createElement("h1", {}, "Hello World by React!")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

