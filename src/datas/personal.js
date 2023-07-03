import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin  } from "@tabler/icons-react";

import garudaImage from "../assets/group41.png"

export const socialIcons = [
    { icon: IconBrandInstagram, href: "https://instagram.com/yusr0nab" },
    { icon: IconBrandGithub, href: "https://github.com/yusronab" },
    { icon: IconBrandLinkedin, href: "https://linkedin.com/yusronab" }
];

export const project = [
    {
        id: 1,
        name: 'Garudanih',
        category: ['Fullstack', 'Frontend', 'Backend'],
        desc: 'Pemesanan tiket pesawat online dengan benchmark Garuda Indonesia, sebagai final project pada saat mengikuti Independent Study di Binar Academy',
        image: garudaImage,
        weblink: "https://google.com",
        codelink: "https://github.com/yusronab"
    },
    {
        id: 2,
        name: 'Foodbot',
        category: ['Android Native'],
        desc: 'Aplikasi rekomendasi resep makanan berdasarkan bahan yang terdeteksi oleh kamera smartphone',
        image: garudaImage,
        weblink: "https://google.com",
        codelink: "https://github.com/yusronab"
    }
];