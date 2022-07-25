import React from 'react'
import styles from "./bio.module.scss"

import { RiComputerLine } from "react-icons/ri"
import { FaPuzzlePiece } from "react-icons/fa"

import portImg1 from "../../assets/portImg1.png"
import cert1 from "../../assets/Group_81.svg"

import { FormBox } from '../../components';
import Link from 'next/link'
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
                            <RiComputerLine />
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
                            <FaPuzzlePiece />
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
                <div className={styles.home_footer_ln}>

                </div>
            </div>
            <div className={styles.bio_shalaye_cont}>
                <div className={styles.bio_shalaye_p}>
                    <p>
                        <b>Curious, who is Mame?</b><br></br>
                        Why did she name herself <b>Creativemame?</b><br></br>
                        Why did she choose Web3 and product design?<br></br>
                        What else can this girl be interested in? What else? Why? How? And the <b>“W” questions</b> continue like that.<br></br>
                        Just rest back and learn more about me or the tush way, relax and read my bio.
                    </p>
                    <p>
                        I try everything. I believe in experimenting. You should try it too. That little business idea, try it too. Ranging from me <b>learning baking, to wire works, beads, sewing, selling wigs, running pre-order/ importation, selling snacks</b> in different ranges even trying to become an artist and visiting almost every studio in my area, what confidence, cos my voice is ….. Let’s leave it that way.
                    </p>
                    <p>
                        Or even in tech I started with <b>desktop publishing and moved to Corel draw</b>. That made me feel like a <b>tech sis in secondary school</b>. To <b>graphics design in photoshop</b>. Then boom I had to choose between illustrations because I loved <b>fashion illustrations</b>. I remember being called out a few times in secondary school for drawing fashion illustrations in secondary school. I was only fair ( not good ) in illustration and that was just fashion/outfit type. I knew the enterprising me will want to try more ventures when I move forward.
                    </p>
                    <p>
                        I had to choose <b>Website development</b>.
                    </p>
                    <p>
                        So that I don’t have to pay for branding and website when I want to try any of my ideas. I did website development for a while. Then back to my Graphics design. And the spirit of trial entered again. I started <b>experimenting with Adobe premiere pro</b> with my 1GB ram laptop, later upgraded to 4GB but, you know it finally led to the end of that laptop. So I had to stop for a while. I tried other things during this period outside tech. Like starting a <b>mental health awareness page for teens and young adults</b>. (Askmame).
                    </p>
                    <p>
                        But I always wanted to go back to something related to tech. Once I got another laptop for a birthday from my dad. I started to learn or let’s say continue to learn my video editing. I did that for almost 4 months and I didn’t make the kind of progress I wanted for the amount of time I was putting into it.
                    </p>
                    <p>
                        Used a month to pick another skill, <b>3D design on Adobe Dimension</b>. At this point, I just wanted to go back to my website development. I learned that you use UI designs and code them. Joined the <b>GDSC club for UNILAG for UI/UX</b>.
                    </p>
                    <p>
                        After the first week, I just said this is it. Like this will allow me to create product solutions for even other people’s ideas.
                    </p>
                    <p>
                        The rest is history, maybe.
                    </p>
                </div>
                <div className={styles.bio_expo_cont}>
                    <div className={styles.shalaye_btn_cont}>
                        <Link href="https://wa.link/sedglk">
                            <button className={styles.home_expo_btn1}>
                                Hire me
                            </button>
                        </Link>

                        <Link href="https://drive.google.com/drive/folders/11Q8QzyEp0Hq91XoaPy9yBT7IlrwEouIM?usp=sharing">
                            <button className={styles.home_expo_btn2}>
                                Download Cv
                            </button>
                        </Link>
                    </div>
                    <div className={styles.shalaye_consult}>
                        <p>Enjoy free 15 minutes consultation</p>
                        <Link href="https://wa.link/sedglk">
                            <button className={styles.home_consult_btn}>
                                Book me
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.bio_cert_cont}>
                <div className={styles.home_footer_ln}>

                </div>
                <div className={styles.bio_cert_heading}>
                    <h1>
                        Certifications
                    </h1>
                </div>
                <div className={styles.cert_box_cont}>
                    <Image className={styles.cert_box} src={cert1} />
                </div>
            </div>
            <div className={styles.bio_formbox}>
                <div className={styles.home_footer_ln}>

                </div>
                <FormBox />
            </div>
            <div className={styles.footer_link}>
                <Link href="/bio">
                    Go Back to top
                </Link>
            </div>
        </div>
    )
}

export default BioPage