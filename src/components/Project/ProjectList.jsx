import { Swiper } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProjectList = ({ thumbsSwiper, children }) => {
    return (
        <Swiper
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-cover"
        >{children}</Swiper>
    );
}

export default ProjectList;