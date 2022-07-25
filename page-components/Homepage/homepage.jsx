import React from 'react';
import styles from "./homepage.module.scss";
import Image from "next/image";
import Link from "next/link"

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"
import { RiComputerLine } from "react-icons/ri"
import { FaPuzzlePiece } from "react-icons/fa"

import { FormBox } from '../../components';

import portImg1 from "../../assets/portImg1.png";

import proj1 from "../../assets/projects/proj1.png"
import proj2 from "../../assets/projects/proj2.png"
import proj3 from "../../assets/projects/proj3.png"
import proj4 from "../../assets/projects/proj4.png"

import polygon from "../../assets/shapes/polygon.svg"
import ellipse from "../../assets/shapes/ellipse.svg"


const Homepage = () => {

    const projects = [
        {
            name: "100% NFT",
            image: proj1,
            url: "/projects/100-nft",
            excerpt: "is a WEB3 based T-shirt store."
        },
        {
            name: "Cakasa",
            image: proj2,
            url: "/projects/cakasa",
            excerpt: "is an Oil and gas company."
        },
        {
            name: "Valuwa ",
            image: proj3,
            url: "/projects/valuwa",
            excerpt: "is a real estate solution that helps solve housing problems."
        },
        {
            name: "Hostel rentie",
            image: proj4,
            url: "/projects/hostel-rentie",
            excerpt: "provides solutions to accommodation for students."
        }
    ];

    const testimonials = [
        {
            text: "Lovely Mame, Love how you used the illustrations too, really made a point with them. This is way better than expected. Thank you Mame.",
            signature: "Edward"
        },
        {
            text: "Great job. I appreciate your thorough service delivery. Thanks for the effort. You are the best in swiftness.",
            signature: "Samuel"
        },
        {
            text: "Mame, I am proud of your growth.",
            signature: "Chinaza"
        }

    ]

    return (
        <div className={styles.home_container}>
            <div className={styles.home_main}>
                <div className={styles.home_cont_expo}>
                    <h1 className={styles.home_expo_h1}>
                        Experience the future by building on web3 with Mame.
                    </h1>
                    <p className={styles.home_expo_p}>
                        UI/UX design <b>enhances</b> the user experience and <b>increases customer satisfaction</b>, resulting in an increase in the number of users.<br></br>
                        Know your users need , understand what they will like you solve in their need, help them satisfy their needs by giving them <b>user friendly platforms</b><br></br>
                        <b>( website, app etc)</b>. let them enjoy the future with <b>better security and decentralisation</b>.
                    </p>
                    <div className={styles.home_expo_btn_cont}>
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
                    <div className={styles.home_consult}>
                        <p>Enjoy free 15 minutes consultation</p>
                        <Link href="https://wa.link/sedglk">
                            <button className={styles.home_consult_btn}>
                                Book me
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={styles.home_img_cont}>
                    <Image alt="intro image" src={portImg1} />

                </div>
            </div>
            <div className={styles.home_who}>
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
                <div className={styles.who_btn_cont}>
                    <Link href="/bio">
                        <button className={styles.who_btn}>
                            Learn more about Mame
                        </button>
                    </Link>
                </div>

            </div>
            <div className={styles.home_proj_cont}>
                <div className={styles.home_footer_ln}>

                </div>
                <div className={styles.proj_head_cont}>
                    <h2>Projects</h2>
                </div>
                <div className={styles.home_proj_box}>
                    {projects.map((project) => {
                        return (
                            <div className={styles.home_proj} key={project.name}>
                                <div className={styles.home_proj_img}>
                                    <Image alt="project image" src={project.image} />
                                </div>
                                <div className={styles.home_proj_text}>
                                    <p>
                                        <b>{project.name}</b> {project.excerpt}
                                    </p>
                                </div>
                                <div className={styles.home_proj_btn}>
                                    <Link href={project.url}>
                                        Check Full Project
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.home_footer_ln}>

                </div>
            </div>
            <div className={styles.home_test_cont}>
                <div className={styles.test_head_cont}>
                    <h2>
                        Testimonials
                    </h2>
                </div>
                <div className={styles.home_test_box}>
                    {
                        testimonials.map((testimonial) => {
                            return (
                                <div id={testimonial.text} className={styles.home_test}>
                                    <div className={styles.test}>
                                        <RiDoubleQuotesL className={styles.test_quote_left} />
                                        <br></br>
                                        <div className={styles.test_quote_p} >
                                            <p><i>{testimonial.text}</i></p>
                                        </div>
                                        <br></br>

                                        <RiDoubleQuotesR className={styles.test_quote_right} />

                                    </div>
                                    <div className={styles.test_sign}>
                                        <p>{testimonial.signature}</p>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
                <div className={styles.home_footer_ln}>

                </div>
            </div>
            <div className={styles.home_resume_cont}>
                <div className={styles.polygon_resume}>
                    <Image alt="styles" src={polygon} />
                </div>
                <div className={styles.home_resume_header}>
                    <h3>Resume</h3>
                </div>
                <div className={styles.home_resume_excerpt}>
                    <p>You want to see my skillset and experience you should download my resume below.</p>
                </div>
                <div className={styles.home_resume_btn}>
                    <Link href="https://drive.google.com/drive/folders/11Q8QzyEp0Hq91XoaPy9yBT7IlrwEouIM?usp=sharing">
                        Click here to check CV
                    </Link>
                </div>
                <div className={styles.ellipse_resume}>
                    <Image alt="styles" src={ellipse} />
                </div>

                <div className={styles.home_footer_ln}>

                </div>
            </div>
            <div className={styles.home_contact_cont}>

                <div className={styles.contact_form_cont}>
                    <FormBox />
                </div>
            </div>
            <div className={styles.footer_link}>
                <Link href="/">
                    Go Back to top
                </Link>
            </div>
        </div >
    )
}

export default Homepage