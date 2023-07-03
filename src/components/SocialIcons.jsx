import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { socialIcons } from "../datas/personal";

export const SocialIcons = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className="icon-group">
            {socialIcons.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: "spring", duration: 1, delay: 1 + (0.2 * index) }}
                >
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                        <item.icon color={isDarkMode ? 'white' : 'black'} />
                    </a>
                </motion.div>
            ))}
            <motion.span
                style={{
                    width: '2px',
                    height: '8rem',
                    backgroundColor: isDarkMode ? 'white' : 'black'
                }}
                color={isDarkMode ? 'white' : 'black'}
                initial={{
                    height: 0,
                }}
                animate={{
                    height: "8rem",
                }}
                transition={{
                    type: "spring",
                    duration: 1,
                    delay: 0.8,
                }}
            ></motion.span>
        </div>
    );
}