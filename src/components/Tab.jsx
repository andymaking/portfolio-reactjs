import React from "react";

const Tab = ({ tabArray, selectedTab, onTabClick }) => {
    const shuffleWork = tabArray.map((category, index) => (
        <div
            key={index}
            className={`tab flex items-center justify-center ${category === selectedTab ? 'active' : ''}`}
            onClick={() => onTabClick(category)}
        >
            <p className="p1">{category}</p>
        </div>

    ))

    return shuffleWork;
}

export default Tab;
