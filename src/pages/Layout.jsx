// importing from react-router-dom
import { Outlet } from "react-router-dom";
// importing from components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout() {
    return (
        <>
            <NavBar />

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }} >
                <Outlet />
            </div>
            
            <Footer />
        </>
    );
};
