import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from 'react-router-dom';

import { handleClick } from '../functions/click';


const Links = ({ type, href, children, target, extra }) => {
    const classNames = "flex flex-row content-end items-center justify-start " + extra;

    const navigate = useNavigate();

    const handleLinkClick = (event) => {
        if (target !== "_blank") {
            handleClick(event, href, navigate); // Call the imported handleClick function
        }
    };

    return (
        <Link
            className={classNames}
            type={type}
            to={href}
            target={target}
            onClick={handleLinkClick}
        >
            {children}
        </Link>
    );
};



Links.propTypes = {
    href: PropTypes.string,
    type: PropTypes.oneOf(["primary", "secondary", "none"]),
    children: PropTypes.node,
    target: PropTypes.string,
};

export default Links;
