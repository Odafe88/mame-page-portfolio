import React from 'react'
import styles from "./bio.module.scss"

import portImg1 from "../../assets/portImg1.png"
import whoIcon1 from "../../assets/who1_icon.svg"
import whoIcon2 from "../../assets/who2_icon.svg"

import Image from "next/image"

const BioPage = () => {
    return (
        <div className={styles.bio_container}>
            <div className={styles.bio_header}>
                <h1>
                    Bio
                </h1>
            </div>
            <div className={styles.bio_img_cont}>
                <Image src={portImg1} />
            </div>
            <div className={styles.bio_who}>
                <div className={styles.home_who_header}>
                    <h2>Who is Mame?</h2>
                </div>
                <div className={styles.who_details_cont}>
                    <div className={styles.who_details}>
                        <div className={styles.who_details_img}>
                            <Image src={whoIcon1} />
                        </div>
                        <div className={styles.who_details_text}>
                            <p>
                                She is a <b>certfied Web3 product designer.</b>
                                Mame is passionate about <b>creating solutions</b><br></br> like <b>user friendly interfaces</b> ( like websites, mobile apps , branding etc)
                                to <b>enhance users<br></br> experience</b> in using your project or product.
                            </p>
                        </div>
                    </div>
                    <div className={styles.who_details}>
                        <div className={styles.who_details_img}>
                            <Image src={whoIcon2} />
                        </div>
                        <div className={styles.who_details_text}>
                            <p>
                                Mame is <b>certified</b> from <b>University college of London</b> for <b>Introduction to blockchain technology</b>.
                                She is also a <b>certified UX designer</b> from the <b>Google UX design course</b>.
                                She is a currently taking a <b>Finance course from RMIT University, Australia</b>.
                                She recently completed an <b>NFT zero to mastery course</b>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.who_btn_cont}>
                    <button className={styles.who_btn}>
                        Learn more about Mame
                    </button>
                </div>
                <div className={styles.home_footer_ln}>

                </div>
            </div>
        </div>
    )
}

export default BioPage