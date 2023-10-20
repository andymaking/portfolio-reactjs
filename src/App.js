import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { HomePageScroll } from './functions/scrollHandler';

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";


import Nav from './components/NavBar';
import SideBar from "./components/SideBar";
import Footer from './components/Footer';
import Cursor from './components/Cursor';


// import NoPage from "./pages/NoPage";

function ScrollToTop() {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the pathname changes
    }, [pathname]);

    return null;
}


const App = () => {

    const [isNavbarSecondary, setIsNavbarSecondary] = useState(false);
    const testimonialsContainerRef = useRef(null);
    const footerContainerRef = useRef(null);

    useEffect(() => {
        HomePageScroll(setIsNavbarSecondary, testimonialsContainerRef, footerContainerRef);

        window.addEventListener('scroll', () => {
            HomePageScroll(setIsNavbarSecondary, testimonialsContainerRef, footerContainerRef);
        });

        return () => {
            window.removeEventListener('scroll', () => {
                HomePageScroll(setIsNavbarSecondary, testimonialsContainerRef, footerContainerRef);
            });
        };
    }, []);

    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const openMenu = () => {
        setIsMenuClicked(true);
    };

    const closeMenu = () => {
        setIsMenuClicked(false);
    };

    const location = useLocation();
    const pageClass = location.pathname === '/' ? 'home' : location.pathname.slice(1);

    return (
        <>
            <Cursor />

            <SideBar isMenuClicked={isMenuClicked} closeMenu={closeMenu} />

            <main className={`body flex w-full flex-col min-h-screen ` + `${isMenuClicked ? 'main-shift ' : ''}` + `${pageClass}`}>

                <ScrollToTop />

                <Nav isMenuClicked={isMenuClicked} openMenu={openMenu} isSecondary={isNavbarSecondary} />

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

                <Footer ref={footerContainerRef} />
            </main>
        </>
    );
};

export default App;
