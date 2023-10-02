import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const Links = ({type, href, children}) => {

    const classNames = "flex flex-row content-end items-center justify-start";

    return (
        <Link
            className={classNames}
            type={type}
            to={href}
        >
            {children}
        </Link>
    )

}


Links.propTypes = {
    href: PropTypes.string,
    type: PropTypes.oneOf(["primary", "secondary"]),
    children: PropTypes.node,
};

export default Links;
