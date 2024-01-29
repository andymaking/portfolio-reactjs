export const handleClick = (event, href, navigate) => {

    const el = document.querySelector('.page-transition');
    const cursor = document.querySelector('.cursor');


    if (hasClassInAncestors(event.target, "menu-links-holder")) {
        event.preventDefault();

        function delayAndGo() {

            setTimeout(() => {
                el.className = 'page-transition page-transition--width';
                cursor.classList.remove('linked', 'projector');
            }, 20);

            setTimeout(() => {
                el.className = 'page-transition page-transition--width page-transition--in';
            }, 100);

            setTimeout(() => {
                el.className = 'page-transition page-transition--width page-transition--out';
            }, 1600);

            setTimeout(() => {
                el.className = 'page-transition';
            }, 1800);

            setTimeout(() => {
                navigate(href);
            }, 1500);

        }

        delayAndGo();
    }

};

const hasClassInAncestors = (element, className) => {
    if (!element) {
        return true;
    }

    if (element.classList.contains(className)) {
        return false;
    }

    return hasClassInAncestors(element.parentElement, className);
};
