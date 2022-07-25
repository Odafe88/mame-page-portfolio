import React from 'react';
import Link from "next/link"
import { motion } from "framer-motion"

import Image from 'next/image';

import { useState } from "react";
import { useRouter } from 'next/router';

import styles from "./header.module.scss"

import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {

    const [active, setActive] = useState(false);
    const [clicked, setClicked] = useState(false);

    const router = useRouter()
    const currentRoute = router.pathname;

    const handleClick = () => {
        setClicked(!clicked)
    }

    const MobileMenu = () => (
        <motion.div className={clicked ? styles.mobile_cont_active : styles.mobile_cont} initial="hidden" animate="visible" variants={{
            hidden: {
                top: -700,
                right: 0,
                left: 0,
                transition: {
                    delay: .2
                }
            },
            visible: {
                top: 0,
                right: 0,
                left: 0,
                transition: {
                    delay: .2
                }
            },
        }}>
            <div onClick={handleClick} className={styles.header_link}>
                <Link href="/bio">Bio</Link>
            </div>
            <div onClick={handleClick} className={styles.header_link}>
                <Link href="/projects">Projects</Link>
            </div>
            <div onClick={handleClick} className={styles.header_link}>
                <Link target="_blank" href="https://creativemame.medium.com">Blog</Link>
            </div>
            <div onClick={handleClick} className={styles.header_link}>
                <Link href="https://drive.google.com/drive/folders/11Q8QzyEp0Hq91XoaPy9yBT7IlrwEouIM?usp=sharing">Resume</Link>
            </div>
            <div onClick={handleClick} className={styles.header_link}>
                <Link href="/contact">Contact</Link>
            </div>
        </motion.div>
    )

    return (
        <div className={styles.header_cont}>
            <div className={styles.header_home_link}>
                <Link href="/">
                    <h1 className={styles.header_cont_logo}>
                        <span className={styles.header_logo_span}>Creative</span> Mame
                    </h1>
                </Link>
            </div>

            <MobileMenu />
            <button className={styles.head_bar} onClick={handleClick} >
                {clicked ? <AiOutlineClose className={styles.head_bar1} /> : <GiHamburgerMenu className={styles.head_bar1} />}
            </button>
            <div className={styles.header_link_cont}>
                <div className={currentRoute == "/bio" ? styles.header_link_active : styles.header_link}>
                    <Link href="/bio">Bio</Link>
                </div>
                <div className={currentRoute == "/projects" ? styles.header_link_active : styles.header_link}>
                    <Link href="/projects">Projects</Link>
                </div>
                <div className={styles.header_link}>
                    <Link href="https://creativemame.medium.com">Blog</Link>
                </div>
                <div className={styles.header_link}>
                    <Link href="https://drive.google.com/drive/folders/11Q8QzyEp0Hq91XoaPy9yBT7IlrwEouIM?usp=sharing">Resume</Link>
                </div>
                <div className={currentRoute == "/contact" ? styles.header_link_active : styles.header_link}>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Header