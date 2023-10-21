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
            open.addEventListener("mouseover", handleMouseEnter);
            open.addEventListener("mouseout", handleMouseLeave);
        });

        menuClose.forEach(close => {
            close.addEventListener("mouseover", handleMouseEnter);
            close.addEventListener("mouseout", handleMouseLeave);
        });

        links.forEach(link => {
            link.addEventListener("mouseover", handleMouseEnter);
            link.addEventListener("mouseout", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);

            menuOpen.forEach(open => {
                open.removeEventListener("mouseover", handleMouseEnter);
                open.removeEventListener("mouseout", handleMouseLeave);
            });

            menuClose.forEach(close => {
                close.removeEventListener("mouseover", handleMouseEnter);
                close.removeEventListener("mouseout", handleMouseLeave);
            });

            links.forEach(link => {
                link.removeEventListener("mouseover", handleMouseEnter);
                link.removeEventListener("mouseout", handleMouseLeave);
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
