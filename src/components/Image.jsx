import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

import { Image as CloudinaryImage, Transformation, CloudinaryContext } from 'cloudinary-react';

const ImageContainer = ({ src, hash, alt, imageType, cloudSrc }) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();

        image.onload = () => {
            setImageLoaded(true);
        };
        
        image.src = imageType === 'project' ? 'https://res.cloudinary.com/dngacec9j/image/upload/c_scale/v1/'+cloudSrc : src;
    }, [src, cloudSrc]);


    return (
        <>
            <div
                // className={`blurred ` + `${imageLoaded ? "hidden" : "inline"}`}
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

            {imageType === "project" ? (
                <>
                    <CloudinaryContext cloud_name={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} className={!imageLoaded ? "hide-till-load" : "hide-undo object-cover"}>
                        <CloudinaryImage publicId={cloudSrc}>
                            <Transformation crop='scale' />
                        </CloudinaryImage>
                    </CloudinaryContext>
                </>
            ) : (
                <img
                    src={src}
                    className={!imageLoaded ? "hide-till-load" : "hide-undo object-cover"}
                    loading="lazy"
                    alt={alt}
                    effect="blur"
                />
            )}
        </>
    );
};

export default ImageContainer;