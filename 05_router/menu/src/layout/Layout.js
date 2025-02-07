import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Header from "../components/Header";
import { Outlet } from 'react-router-dom';
function Layout() {
    return (
        <div>
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}
export default Layout;