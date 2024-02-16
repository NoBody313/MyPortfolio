import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from "./pages/home.jsx";
import Error from "./pages/Error.jsx";
import About from "./pages/about.jsx";
import Project from "./pages/project.jsx";
import Contact from "./pages/contact.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/project",
        element: <Project/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
