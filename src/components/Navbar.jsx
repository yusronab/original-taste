import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../ThemeContext';

const Navbar = () => {
    const { isDarkMode, toggleMode } = useContext(ThemeContext);

    return (
        <nav>
            <div className={`nav-link ${isDarkMode ? 'light': 'dark'}`}>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/project'}>Portfilio</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
            <div
                style={{
                    background: isDarkMode ? "skyblue" : "grey",
                    justifyContent: isDarkMode && "flex-end",
                    width: "3rem",
                    padding: "0.25rem",
                    display: "flex",
                    margin: "0 1.5em",
                    borderRadius: 9999,
                    cursor: "pointer",
                }}
                onClick={toggleMode}
            >
                <motion.div
                    className={isDarkMode ? 'moon' : 'crescent-moon'}
                    layout
                    transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                    }}
                ></motion.div>
            </div>
        </nav>
    );
}

export default Navbar;