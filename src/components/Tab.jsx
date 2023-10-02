import React from "react";

const Tab = ({ tabArray }) => {


    const shuffleWork = tabArray.map((category, index) => (
        <div
            key={index}
            className={`tab flex items-center justify-center ${
              index === 0 ? 'active' : ''
            }`}
        >
            <p className="p1">{category}</p>
        </div>

    ))

    return shuffleWork;
}

export default Tab;