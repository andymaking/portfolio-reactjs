import React, { useState, useEffect } from "react";

import { ArrowUpRight } from "@phosphor-icons/react";

export const useCursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const variants = {
        default: {},
        link: {}
    };

    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.pageX,
                y: e.pageY
            });
        };

        const handleMouseEnter = () => {
            setCursorVariant("link");
        };
        const handleMouseLeave = () => {
            setCursorVariant("default");
        };

        const links = document.querySelectorAll('a');

        window.addEventListener("mousemove", mouseMove);
        links.forEach(link => {
            link.addEventListener("mouseover", handleMouseEnter);
            link.addEventListener("mouseout", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", mouseMove);
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

    return (
        <div
            className={`cursor ` + `${cursorVariant === 'link' ? 'linked' : ''}`}
            style={{
                top: mousePosition.y,
                left: mousePosition.x,
            }}
        >
        </div>
    );
};

export default Cursor;
