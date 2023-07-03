import { useEffect } from "react";
import { useLocation } from "react-router-dom";

useEffect

function ScrollToElement() {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollElements = {
            "/": null,
            "/about": "about",
            "/project": "project",
            "/contact": "contact",
        };

        const scrollToTop = () => {
            const scrollDuration = 500;
            const scrollOffset = 0;

            const cosParameter = (window.scrollY - scrollOffset) / 2;
            let scrollCount = 0;
            let oldTimestamp = performance.now();

            const step = (newTimestamp) => {
                scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));

                if (scrollCount >= Math.PI) {
                    window.scrollTo(0, 0);
                } else if (window.scrollY !== 0) {
                    window.scrollTo(0, Math.round(scrollOffset + cosParameter + cosParameter * Math.cos(scrollCount)));
                    oldTimestamp = newTimestamp;
                    window.requestAnimationFrame(step);
                }
            };

            window.requestAnimationFrame(step);
        };

        const elementId = scrollElements[pathname];
        if (elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            scrollToTop();
        }
    }, [pathname]);

    return null;
}

export default ScrollToElement;