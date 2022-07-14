import React from 'react'
import styles from './footer.module.scss'

import { AiOutlineCopyright } from "react-icons/ai"

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_item}>
                <p>
                    Designed by @creativemame
                </p>
            </div>
            <div className={styles.footer_item}>
                <p>
                    Developed by @odafetoearth
                </p>
            </div>
            <div>
                <p>
                    <AiOutlineCopyright /> 2022
                </p>
            </div>
        </div>
    )
}

export default Footer