import React, { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Nav from './components/NavBar';
import SideBar from "./components/SideBar";
import Footer from './components/Footer';
import Cursor from './components/Cursor';

// const Nav = React.lazy(() => import("./components/NavBar"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Work = React.lazy(() => import("./pages/Work"));
const Project = React.lazy(() => import("./pages/Project"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const Contact = React.lazy(() => import("./pages/Contact"));


function ScrollToTop() {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the pathname changes
    }, [pathname]);

    return null;
}


const App = () => {

    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const openMenu = () => {
        setIsMenuClicked(true);
    };

    const closeMenu = () => {
        setIsMenuClicked(false);
    };

    const location = useLocation();
    const currentPage = location.pathname;
    const pageClass = currentPage === '/' ? 'home' : currentPage.split('/')[1];

    return (
        <>

            <SideBar isMenuClicked={isMenuClicked} closeMenu={closeMenu} currentPage={currentPage} />

            <main className={`body flex w-full flex-col min-h-screen ` + `${isMenuClicked ? 'main-shift ' : ''}` + `${pageClass}`}>

                <ScrollToTop />

                <React.Suspense fallback={''}>
                    <Cursor />
                    
                    <Nav isMenuClicked={isMenuClicked} openMenu={openMenu} currentPage={currentPage} />
                    
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Home />
                                </>
                            } exact />
                        <Route
                            path="/about"
                            element={
                                <>
                                    <About />
                                </>
                            } />
                        <Route
                            path="/portfolio"
                            element={
                                <>
                                    <Work />
                                </>
                            } />
                        <Route
                            path="/portfolio/:projectId"
                            element={
                                <>
                                    <Project />
                                </>
                            } />
                        <Route
                            path="/pricing"
                            element={
                                <>
                                    <Pricing />
                                </>
                            } />
                        <Route
                            path="/contact"
                            element={
                                <>
                                    <Contact />
                                </>
                            } />
                        {/* <Route path="*" element={<NoPage />} /> */}
                    </Routes>

                    <Footer />
                </React.Suspense>
            </main>
        </>
    );
};

export default App;