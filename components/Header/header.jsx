import React from 'react';
import Link from "next/link"

import styles from "./header.module.scss"

const Header = () => {
    return (
        <div className={styles.header_cont}>
            <h1 className={styles.header_cont_logo}>
                <span className={styles.header_logo_span}>Creative</span> Mame
            </h1>
            <div className={styles.header_link_cont}>
                <div className={styles.header_link}>
                    <Link href="/bio">Bio</Link>
                </div>
                <div className={styles.header_link}>
                    <Link href="/projects">Projects</Link>
                </div>
                <div className={styles.header_link}>
                    <Link href="/resume">Resume</Link>
                </div>
                <div className={styles.header_link}>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Header