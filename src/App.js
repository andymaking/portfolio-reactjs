import React, { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Project from "./pages/Project";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

import Nav from './components/NavBar';
import SideBar from "./components/SideBar";
import Footer from './components/Footer';
import Cursor from './components/Cursor';

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
    const pageClass = location.pathname === '/' ? 'home' : location.pathname.split('/')[1];

    return (
        <>
            <Cursor />

            <SideBar isMenuClicked={isMenuClicked} closeMenu={closeMenu} />

            <main className={`body flex w-full flex-col min-h-screen ` + `${isMenuClicked ? 'main-shift ' : ''}` + `${pageClass}`}>

                <ScrollToTop />

                <Nav isMenuClicked={isMenuClicked} openMenu={openMenu} />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <HelmetProvider>
                                    <Helmet>
                                        <title>Jude Joshua | Top Product Designer For Businesses And Brands.</title>
                                    </Helmet>
                                </HelmetProvider>
                                <Home />
                            </>
                        } exact />
                    <Route
                        path="/about"
                        element={
                            <>
                                <HelmetProvider>
                                    <Helmet>
                                        <title>About | Top Product Designer For Businesses And Brands.</title>
                                    </Helmet>
                                </HelmetProvider>
                                <About />
                            </>
                        } />
                    <Route
                        path="/portfolio"
                        element={
                            <>
                                <HelmetProvider>
                                    <Helmet>
                                        <title>Portfolio | Top Product Designer For Businesses And Brands.</title>
                                    </Helmet>
                                </HelmetProvider>
                                <Work />
                            </>
                        } />
                    <Route
                        path="/portfolio/:projectId"
                        element={
                            <>
                                <HelmetProvider>
                                    <Helmet>
                                        <title></title>
                                    </Helmet>
                                </HelmetProvider>
                                <Project />
                            </>
                        } />
                    <Route
                        path="/pricing"
                        element={
                            <>
                                <HelmetProvider>
                                    <Helmet>
                                        <title>Pricing | Top Product Designer For Businesses And Brands.</title>
                                    </Helmet>
                                </HelmetProvider>
                                <Pricing />
                            </>
                        } />
                    <Route
                        path="/contact"
                        element={
                            <>
                                <HelmetProvider>
                                    <Helmet>
                                        <title>Contact | Top Product Designer For Businesses And Brands.</title>
                                    </Helmet>
                                </HelmetProvider>
                                <Contact />
                            </>
                        } />
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Routes>

                <Footer />
            </main>
        </>
    );
};

export default App;