import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import { useCursor } from "./Cursor";


const Links = ({ type, href, children, target, extra }) => {

    const classNames = "flex flex-row content-end items-center justify-start " + extra;

    const { handleMouseEnter } = useCursor();

    return (
        <Link
            className={classNames}
            type={type}
            to={href}
            target={target}
            onMouseOver={handleMouseEnter}
        >
            {children}
        </Link>
    )

}


Links.propTypes = {
    href: PropTypes.string,
    type: PropTypes.oneOf(["primary", "secondary", "none"]),
    children: PropTypes.node,
};

export default Links;
