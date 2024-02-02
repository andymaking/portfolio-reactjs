import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Nav from './components/NavBar';
import SideBar from "./components/SideBar";
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Loading from './components/Loading';


const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Work = React.lazy(() => import("./pages/Portfolio"));
const Project = React.lazy(() => import("./pages/CaseStudy"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NoPage = React.lazy(() => import("./pages/NoPage"));


function ScrollToTop() {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


const App = () => {

    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [noPage, setNoPage] = useState(false);

    const openMenu = () => {
        setIsMenuClicked(true);
    };

    const closeMenu = () => {
        setIsMenuClicked(false);
    };

    const location = useLocation();
    const currentPage = location.pathname;

    const pageClass =
        currentPage === '/'
            ? 'home'
            : currentPage.startsWith('/portfolio')
                ? currentPage.split('/').length > 2
                    ? 'portfolio case-study'
                    : 'portfolio'
                : currentPage.slice(1);

    useEffect(() => {
        const validRoutes = ['/about', '/portfolio', '/pricing', '/contact'];

        if (!validRoutes.includes(currentPage)) {
            setNoPage(true);
        } else {
            setNoPage(false);
        }

    }, [currentPage]);


    return (
        <>
            <SideBar isMenuClicked={isMenuClicked} closeMenu={closeMenu} currentPage={currentPage} noPage={noPage} />

            <main className={`flex w-full flex-col min-h-screen ${pageClass}`}>

                <ScrollToTop />

                <React.Suspense fallback={
                    <Loading className="fill">loading</Loading>
                }>
                    <Cursor />

                    <Nav openMenu={openMenu} currentPage={currentPage} />

                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home />
                            } exact />
                        <Route
                            path="/about"
                            element={
                                <About />
                            } />
                        <Route
                            path="/portfolio"
                            element={
                                <Work />
                            } />
                        <Route
                            path="/portfolio/:projectId"
                            element={
                                <Project />
                            } />
                        <Route
                            path="/pricing"
                            element={
                                <Pricing />
                            } />
                        <Route
                            path="/contact"
                            element={
                                <Contact />
                            } />
                        <Route path="*"
                            element={
                                <NoPage />
                            }
                        />
                    </Routes>

                    <Footer />
                </React.Suspense>
            </main>
        </>
    );
};

export default App;