import { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { routeVariants, childVariants } from "../datas/variant";
import { ThemeContext } from "../ThemeContext";
import { IconBrandWhatsapp, IconUserCircle } from "@tabler/icons-react";
import { SocialIcons } from "../components/SocialIcons";

export default function Hero() {
    const { isDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        const text = document.querySelector("h1");

        const handleMousemove = (e) => {
            const widthMid = parseInt(window.innerWidth / 2);
            const heightMid = parseInt(window.innerHeight / 2);

            let x = e.clientX - widthMid;
            let y = heightMid - e.clientY;

            const factor = 0.16;

            if (isDarkMode) {
                text.style.textShadow = `
                ${-x * factor}px
                ${y * factor}px
                5px rgba(255, 255, 255, .4)`;
            } else {
                text.style.textShadow = `
                ${-x * factor}px
                ${y * factor}px
                5px rgba(0, 0, 0, .4)`;
            }
        }

        document.addEventListener("mousemove", handleMousemove);

        return () => {
            document.removeEventListener("mousemove", handleMousemove);
        };
    }, [isDarkMode])

    return (
        <div className={`page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <motion.div
                variants={routeVariants}
                initial="initial"
                animate="final"
            >
                <motion.h1
                    variants={childVariants}
                    initial="initial"
                    animate="final"
                    className="my-name"
                >
                    Yusron Arly Bazarah
                </motion.h1>
            </motion.div>
            <p>halo bang</p>
            <a href="" className="whatsapp-btn" target="_blank">
                <IconBrandWhatsapp />
                <div className="chat-tooltip">
                    <IconUserCircle color="#525252" />
                    <div className="text">Monggo di japri mawon</div>
                </div>
            </a>
            <SocialIcons />
        </div>
    )
}