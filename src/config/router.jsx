import { createBrowserRouter } from "react-router-dom";
// importing pages
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            }, {
                path: "/about",
                element: <About />
            }, {
                path: "/projects",
                element: <Projects />
            }, {
                path: "/experience",
                element: <Experience />
            }
        ]
    }
]);

export default router;