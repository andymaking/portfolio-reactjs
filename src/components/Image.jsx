import React from "react";
import { Blurhash } from "react-blurhash";

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const ImageContainer = ({ src, hash, alt, imageType }) => {

    return (
        <>
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "none"
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

            {imageType === "project" ? (
                <>
                    <img
                        src={`/${src}`}
                        data-src={src}
                        className={"lazyload object-cover"}
                        alt={alt}
                        effect="blur"
                    />
                </>
            ) : (
                <img
                    src={src}
                    data-src={src}
                    className={"lazyload object-cover"}
                    alt={alt}
                    effect="blur"
                />
            )}
        </>
    );
};

export default ImageContainer;
