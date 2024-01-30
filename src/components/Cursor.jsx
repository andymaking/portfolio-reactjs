import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

import { ArrowUpRight } from "@phosphor-icons/react";

export const useCursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: -20,
        y: -20
    });

    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const updateMousePosition = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            setMousePosition({ x, y });
        };

        const handleMouseEnter = () => {
            setCursorVariant("link");
        };

        const handleProjektEnter = () => {
            setCursorVariant("projector");
        };

        const handleMouseLeave = () => {
            setCursorVariant("default");
        };


        const links = document.querySelectorAll('a');
        const projekts = document.querySelectorAll('.projekt');
        const menuOpen = document.querySelector('.menu');
        const menuClose = document.querySelector('.menu-close');

        window.addEventListener("mousemove", updateMousePosition);

        menuOpen.addEventListener("mouseenter", handleMouseEnter);
        menuOpen.addEventListener("mouseleave", handleMouseLeave);

        menuClose.addEventListener("mouseenter", handleMouseEnter);
        menuClose.addEventListener("mouseleave", handleMouseLeave);

        links.forEach(link => {
            link.addEventListener("mouseenter", handleMouseEnter);
            link.addEventListener("mouseleave", handleMouseLeave);
        });

        projekts.forEach(projekt => {
            projekt.addEventListener("mouseenter", handleProjektEnter);
            projekt.addEventListener("mouseleave", handleMouseLeave);
        });


        return () => {
            window.removeEventListener("mousemove", updateMousePosition);

            menuOpen.removeEventListener("mouseenter", handleMouseEnter);
            menuOpen.removeEventListener("mouseleave", handleMouseLeave);

            menuClose.removeEventListener("mouseenter", handleMouseEnter);
            menuClose.removeEventListener("mouseleave", handleMouseLeave);

            links.forEach(link => {
                link.removeEventListener("mouseenter", handleMouseEnter);
                link.removeEventListener("mouseleave", handleMouseLeave);
            });

            projekts.forEach(projekt => {
                projekt.removeEventListener("mouseenter", handleProjektEnter);
                projekt.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [mousePosition, cursorVariant]);

    return { mousePosition, cursorVariant };
};


const Cursor = () => {
    const { cursorVariant, mousePosition } = useCursor();

    return ReactDOM.createPortal(
        (
            <div
                className={`cursor ${cursorVariant === 'link' ? 'linked' : ''}${cursorVariant === 'projector' ? 'projector' : ''}`}
                style={{
                    top: mousePosition.y,
                    left: mousePosition.x,
                }}
            >
                {cursorVariant === 'projector' && <ArrowUpRight id="cursor-child"/>}
            </div>
        ),
        document.getElementById('cursor-root')
    );
};

export default Cursor;
