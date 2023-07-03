import { motion } from "framer-motion";
import { useContext } from "react";
import { Tilt } from "react-tilt";
import { ThemeContext } from "../ThemeContext";
import { fadeIn, slideIn, staggerContainer } from "../datas/variant";
import imagePerson from "../assets/image1.png";
import filePdf from "../assets/magang_cv_yusron.pdf";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function About() {
    const { isDarkMode } = useContext(ThemeContext);

    const defaultOptions = {
        tiltMaxAngleX: 40,
        tiltMaxAngleY: 40,
        perspective: 800,
        transitionSpeed: 3500,
        scale: 1,
        gyroscope: true,
        glareEnable: true,
        glareMaxOpacity: 1,
        glareColor: "#ffffff",
        glarePosition: "bottom",
        glareBorderRadius: "20px"
    }

    return (
        <div id="about" className={`page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amout: 0.25 }}
                className="about-container"
            >
                <motion.div variants={slideIn('left', 'tween', 0.2, 1)}>
                    <Tilt options={defaultOptions} className="image-tilt">
                        <img src={imagePerson} alt="" />
                    </Tilt>
                </motion.div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <motion.div variants={slideIn('right', 'tween', 0.2, 1)}>
                        <span className="title">Introduction.</span>
                        <p>Saya seorang mahasiswa di Politeknik Harapan Bersama dengan minat kuat dalam pengembangan web dan Android. Saya memiliki pengalaman dalam menggunakan React.js, Express.js, Android Native, dan Flutter. Saya selalu bersemangat untuk belajar dan mengembangkan keterampilan saya di bidang ini.</p>
                    </motion.div>
                    <motion.div style={{ display: "flex", gap: 16 }} variants={fadeIn('', 'spring', 1, 2)}>
                        <Link
                            to={filePdf}
                            download="Pdf Document"
                            target="_blank"
                            rel="norefferer"
                            className={`btn-on-about ${isDarkMode ? 'dark' : 'light'}`}
                        >
                            <IconDownload />
                            <p className="text">Download Pdf</p>
                        </Link>
                        <Link
                            to={'/contact'}
                            className={`btn-on-about ${isDarkMode ? 'dark' : 'light'}`}
                        >
                            <IconArrowRight />
                            <p className="text">Get in touch</p>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}