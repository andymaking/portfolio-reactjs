import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

export const useCursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
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

        const handleMouseLeave = () => {
            setCursorVariant("default");
        };

        const links = document.querySelectorAll('a');
        const menuClose = document.querySelectorAll('.menu-close');
        const menuOpen = document.querySelectorAll('.menu');

        window.addEventListener("mousemove", updateMousePosition);

        menuOpen.forEach(open => {
            open.addEventListener("mouseenter", handleMouseEnter);
            open.addEventListener("mouseleave", handleMouseLeave);
        });

        menuClose.forEach(close => {
            close.addEventListener("mouseenter", handleMouseEnter);
            close.addEventListener("mouseleave", handleMouseLeave);
        });

        links.forEach(link => {
            link.addEventListener("mouseenter", handleMouseEnter);
            link.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);

            menuOpen.forEach(open => {
                open.removeEventListener("mouseenter", handleMouseEnter);
                open.removeEventListener("mouseleave", handleMouseLeave);
            });

            menuClose.forEach(close => {
                close.removeEventListener("mouseenter", handleMouseEnter);
                close.removeEventListener("mouseleave", handleMouseLeave);
            });

            links.forEach(link => {
                link.removeEventListener("mouseenter", handleMouseEnter);
                link.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return { mousePosition, cursorVariant };
};


const Cursor = () => {
    const { cursorVariant, mousePosition } = useCursor();

    return ReactDOM.createPortal(
        (
            <div
                className={`cursor ` + `${cursorVariant === 'link' ? 'linked' : ''}`}
                style={{
                    top: mousePosition.y,
                    left: mousePosition.x,
                }}
            >
            </div>
        ),
        document.getElementById('cursor-root')
    );
};

export default Cursor;
