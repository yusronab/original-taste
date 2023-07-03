import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Link } from "react-router-dom";
import { IconBrandGithub } from "@tabler/icons-react";
import { fadeIn } from "../../datas/variant";
import { motion } from "framer-motion";

const ProjectSlide = ({ item }) => {
    const { isDarkMode } = useContext(ThemeContext);
    return (
        <div className="swiper-content" style={{ backgroundImage: `linear-gradient(to right, ${isDarkMode ? '#f0f0f0' : '#000'}, #0000), url(${item.image})` }}>
            <div style={{ color: isDarkMode ? "black" : "white" }}>
                <span>{item.name}</span>
                <span>{item.desc}</span>
            </div>
            <motion.div variants={fadeIn('', 'spring', 1, 2)} style={{ zIndex: 10 }}>
                <Link
                    to={'https://github.com/yusronab'}
                    className={`btn-on-about ${isDarkMode ? 'light' : 'dark'}`}
                >
                    <IconBrandGithub />
                    <p style={{ padding: '12px 0' }}>Source code</p>
                </Link>
            </motion.div>
        </div>
    );
}

export default ProjectSlide;