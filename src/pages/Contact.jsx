import { motion } from "framer-motion";
import { useContext } from "react"
import { ThemeContext } from "../ThemeContext";
import { slideIn, staggerContainer } from "../datas/variant";

export default function Contact() {
    const { isDarkMode } = useContext(ThemeContext);
    
    return (
        <div id="contact" className={`page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <div className="contact-container">
                    <motion.div variants={slideIn('left', 'tween', 0.2, 1)}>
                        <div className="box" style={{ border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.222)' : '1px solid rgba(0, 0, 0, 0.222)' }}>
                            <div style={{ marginBottom: '7%' }}>
                                <span className="title">CONTACT.</span>
                                <p>Get in touch</p>
                            </div>
                            <form>
                                <div className="inputbox">
                                    <input required="required" type="text" />
                                    <span>Name</span>
                                    <i style={{ background: isDarkMode ? 'white' : 'black' }}></i>
                                </div>
                                <div className="inputbox">
                                    <input required="required" type="text" />
                                    <span>Email</span>
                                    <i style={{ background: isDarkMode ? 'white' : 'black' }}></i>
                                </div>
                                <div className="inputbox">
                                    <input required="required" type="text" />
                                    <span>Message</span>
                                    <i style={{ background: isDarkMode ? 'white' : 'black' }}></i>
                                </div>
                            </form>
                            <button className="button">
                                Get in touch
                                <div className="hoverEffect">
                                    <div></div>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}