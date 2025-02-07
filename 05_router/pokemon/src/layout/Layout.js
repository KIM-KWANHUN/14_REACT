import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {Outlet} from 'react-router-dom';

function Layout() {
    return(
        <>
        <Header/>
        <Nav/>
        <Outlet/>
        <Footer/>
        </>
    );
}

export default Layout;