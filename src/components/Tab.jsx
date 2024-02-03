import React from "react";

const Tab = ({ tabArray, selectedTab, onTabClick }) => {

    const shuffleWork = tabArray.map((category, index) => (
        <React.Fragment key={index}>
            <div className="svg-wrap">
                <svg viewBox="0 0 400 10" xmlns="http://www.w3.org/2000/svg">
                    <path id="svg_line" d="m 1.986,8.91 c 55.429038,4.081 111.58111,5.822 167.11781,2.867 22.70911,-1.208 45.39828,-0.601 68.126,-0.778 28.38173,-0.223 56.76079,-1.024 85.13721,-1.33 24.17379,-0.261 48.42731,0.571 72.58115,0.571"></path>
                </svg>
            </div>
            <div
                className={`tab flex items-center justify-center ${category === selectedTab ? 'active' : ''}`}
                onClick={() => onTabClick(category)}
            >
                <p className="p1">{category}<svg className="link-svgline"><use xlinkHref="#svg_line"></use></svg></p>
            </div>
        </React.Fragment>

    ))

    return shuffleWork;
}

export default Tab;
