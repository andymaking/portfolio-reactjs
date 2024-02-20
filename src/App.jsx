import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Nav from './components/NavBar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Loading from './components/Loading';

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const Project = React.lazy(() => import("./pages/CaseStudy"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NoPage = React.lazy(() => import("./pages/NoPage"));

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App = () => {
    const [noPage, setNoPage] = useState(false);

    const location = useLocation();
    const currentPage = useMemo(() => location.pathname, [location.pathname]);

    const pageClass = useMemo(() => {
        if (currentPage === '/')
            return 'home';
        else if (currentPage.startsWith('/portfolio'))
            return currentPage.split('/').length > 2 ? 'portfolio case-study' : 'portfolio';
        else
            return currentPage.slice(1);
    }, [currentPage]);

    useEffect(() => {
        const validRoutes = ['/about', '/portfolio', '/pricing', '/contact'];

        setNoPage(!validRoutes.includes(currentPage));
    }, [currentPage]);

    return (
        <main className={`flex w-full flex-col min-h-screen ${pageClass}`}>
            <ScrollToTop />
            <Nav currentPage={currentPage} noPage={noPage} />

            <React.Suspense fallback={<Loading className="fill">loading</Loading>}>
                <Cursor />

                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio/:projectId" element={<Project />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>

                <Footer />
            </React.Suspense>
        </main>
    );
};

export default App;
