import React, { useState, useEffect } from "react";
// import "./App.css";
import { motion } from "framer-motion";

const App = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    console.log(mousePosition);

    // Set cursor variant to change color on hover text

    const [cursorVariant, setCursorVariant] = useState("default");
 

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    // Variant animation
    // const variants = {
    //     default: {
    //         x: mousePosition.x - 8,
    //         y: mousePosition.y - 8
    //     },
    //     text: {
    //         height: 150,
    //         width: 150,
    //         x: mousePosition.x - 70,
    //         y: mousePosition.y - 70,
    //         backgroundColor: "aqua",
    //         mixBlendMode: "difference"
    //     }
    // };

    // function for textLeave and textEnter
    // const textEnter = () => setCursorVariant("text");
    // const textLeave = () => setCursorVariant("default");

    return (

            <motion.div
                className="cursor"
                // variants={variants}
                animate={cursorVariant}
            ></motion.div>

    );
};

export default App;
