import { useContext, useState } from "react"
import { ThemeContext } from "../ThemeContext"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ProjectList from "../components/Project/ProjectList";
import ProjectSlide from "../components/Project/ProjectSlide";
import { project } from "../datas/personal";

export default function Project() {
    const { isDarkMode } = useContext(ThemeContext);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div id="project" className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`} style={{ position: "relative" }}>
            <ProjectList thumbsSwiper={thumbsSwiper}>
                {project.map((el, index) => (
                    <SwiperSlide key={index}>
                        <ProjectSlide item={el} />
                    </SwiperSlide>
                ))}
            </ProjectList>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-toggle"
            >
                {project.map((el, index) => (
                    <SwiperSlide key={index}>
                        <img src={el.image} />
                    </SwiperSlide>
                ))}
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}