export function OtherPageScroll(navbarStateSetter, footerContainerRef) {
    const footerElement = footerContainerRef.current;
    if (!footerElement) {
        return;
    }

    const footerDistanceFromTop = footerElement.getBoundingClientRect().top + window.scrollY - 128;
    const footerContainerHeight = footerElement.clientHeight + 120;

    const distanceScrolled = window.scrollY;
    const footerDist = footerDistanceFromTop + footerContainerHeight;

    navbarStateSetter(distanceScrolled > footerDistanceFromTop && distanceScrolled < footerDist);
}

export function HomePageScroll(navbarStateSetter, testimonialsContainerRef, footerContainerRef) {

    const footerElement = footerContainerRef.current;
    const testimonialsElement = testimonialsContainerRef.current;

    if (!footerElement || !testimonialsElement) {
        return;
    }

    const footerDistanceFromTop = footerElement.getBoundingClientRect().top + window.scrollY - 128;
    const footerContainerHeight = footerElement.clientHeight + 120;

    const testimonialDistanceFromTop = testimonialsElement.getBoundingClientRect().top + window.scrollY - 128;
    const testimonialsContainerHeight = testimonialsElement.offsetHeight;

    const distanceScrolled = window.scrollY;

    const footerDist = footerDistanceFromTop + footerContainerHeight;

    const testimonialDist = testimonialDistanceFromTop + testimonialsContainerHeight;

    navbarStateSetter(distanceScrolled > testimonialDistanceFromTop && distanceScrolled < testimonialDist || distanceScrolled > footerDistanceFromTop && distanceScrolled < footerDist);
}