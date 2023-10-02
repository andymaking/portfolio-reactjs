import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import { HomePageScroll } from './functions/scrollHandler';

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";


import Nav from './components/NavBar';
import SideBar from "./components/SideBar";
import Footer from './components/Footer';


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
    const pageClass = location.pathname.slice(1);

    return (
        <>
            <SideBar isMenuClicked={isMenuClicked} closeMenu={closeMenu}/>

            <main className={`body flex w-full flex-col min-h-screen ` + `${isMenuClicked ? 'main-shift ' : ''}` + `${pageClass}`}>
                <Nav isMenuClicked={isMenuClicked} openMenu={openMenu} isSecondary={isNavbarSecondary} />

                <ScrollToTop />

                <Routes>
                    <Route
                        path="/"
                        element={<Home />} />
                    <Route
                        path="about"
                        element={<About />} />
                    <Route
                        path="portfolio"
                        element={<Work />} />
                    <Route
                        path="pricing"
                        element={<Pricing />} />
                    <Route
                        path="contact"
                        element={<Contact />} />
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Routes>

                <Footer ref={footerContainerRef} />
            </main>
        </>
    );
};

export default App;
