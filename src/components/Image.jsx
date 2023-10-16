import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageContainer = ({ src, hash, alt }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.onload = () => {
            setImageLoaded(true);
        };
        image.src = src;
    }, [src]);

    return (
        <>
            <div
                className={`blurred ` + `${imageLoaded ? "hidden" : "inline"}`}
                style={{
                    position: "absolute",
                    zIndex: "1",
                    width: "100%",
                    height: "100%"
                }}
            >
                <Blurhash
                    width="100%"
                    height="100%"
                    hash={hash}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            </div>
            <img
                src={src}
                className={!imageLoaded ? "hidden" : "inline object-cover"}
                loading="lazy"
                alt={alt}
            />
        </>
    );
};

export default ImageContainer;