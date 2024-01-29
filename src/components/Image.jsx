import React from "react";
import { Blurhash } from "react-blurhash";

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// import { Image as CloudinaryImage, Transformation, CloudinaryContext } from 'cloudinary-react';

const ImageContainer = ({ src, hash, alt, imageType }) => {

    // src = imageType === 'project' ? 'https://res.cloudinary.com/dngacec9j/image/upload/c_scale/v1/' + cloudSrc : src;

    return (
        <>
            <div
                style={{
                    position: "absolute",
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
                    {/* <CloudinaryContext cloud_name={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}>
                        <CloudinaryImage publicId={cloudSrc} data-src={src} alt={alt} loading="lazy" className={"lazyload object-cover"}>
                            <Transformation crop='scale' />
                        </CloudinaryImage>
                    </CloudinaryContext> */}
                    <img
                        src={`/`+ `${src}`}
                        data-src={src}
                        className={"lazyload object-cover"}
                        alt={alt}
                        // effect="blur"
                        loading="lazy"
                    />
                </>
            ) : (
                <img
                    src={src}
                    data-src={src}
                    className={"lazyload object-cover"}
                    alt={alt}
                    // effect="blur"
                    loading="lazy"
                />
            )}
        </>
    );
};

export default ImageContainer;