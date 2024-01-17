// importing from react
import { RouterProvider } from 'react-router-dom';
// importing from config
import router from './config/router';
// importing stylesheet
import "../src/index.css";

const App = () => {
    return (
        <div>
            {/* 
                RouterProvider takes an input called browserRouter 
                BrowserRouter is created using the command createBrowswerRouter
                It is created in the router.jsx file inside the config folder
                It is then passed to the RouterProvider
            */}
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
