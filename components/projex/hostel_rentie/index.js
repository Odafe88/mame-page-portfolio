import React from 'react'
import styles from "./hostel.module.scss"

import FormBox from '../../form-box/form-box'

import mainImg from "../../../assets/projects/hostel_rentie/mainImg.png"
import wireframe from "../../../assets/projects/hostel_rentie/wireframe.png"

import { AiOutlineArrowRight } from "react-icons/ai"

import Image from 'next/image'
import Link from 'next/link'

const Hostel = () => {
    return (
        <div className={styles.proj_cont}>
            <div className={styles.proj_header_cont}>
                <h1>Hostel Rentie</h1>

            </div>
            <div className={styles.proj_main_img_cont}>
                <Image alt="hostel rentie" src={mainImg} />
            </div>
            <div className={styles.proj_details_cont}>
                <div className={styles.home_footer_ln}>

                </div>
                <div className={styles.proj_det_list}>
                    <ul className={styles.proj_det_list_ul}>
                        <li><b>ROLE</b>: UI Designer</li>
                        <li><b>PROJECT YEAR</b>: 2022</li>
                        <li><b>TOOLS</b>:<span className={styles.list_green}> Notes, Adobe Xd , Adobe photoshop</span></li>
                        <li><b>CATEGORY</b>:<span className={styles.list_green}> Real Estate</span></li>
                        <li><b>SKILLS</b>: Empathy mapping, Effective communication, User interface design, Prototyping, Feedback and collaborative skills, Task Management and autonomy, Problem solving skill, Creativity.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.proj_descr_cont}>
                <div className={styles.proj_descr_head}>
                    <h1>
                        DESCRIPTION
                    </h1>
                </div>
                <div className={styles.proj_descr}>
                    <p>
                        Hostelrentie is a platform for bridging the gap between house agencies and students seeking accomodation. It helps simplify getting accommodation for students. The organisation wanted to add an extension of the site that enables students to be able to search for roommates.
                    </p>
                </div>
            </div>
            <div className={styles.proj_process_cont}>
                <div className={styles.proj_process_head}>
                    <h1>
                        DESIGN PROCESS
                    </h1>
                </div>
                <div className={styles.process_descr_box}>
                    <div className={styles.process_descr}>
                        <div className={styles.process_descr_head}>
                            <h4>
                                Analysis
                            </h4>
                        </div>
                        <p>
                            (Conduct field research to understand how the requirements)
                        </p>
                    </div>
                    <div className={styles.process_pointer}>
                        <AiOutlineArrowRight />
                    </div>
                    <div className={styles.process_descr}>
                        <div className={styles.process_descr_head}>
                            <h4>
                                Design
                            </h4>
                        </div>
                        <p>
                            ( create a well-polished interface prototype that breathes with the user and a thorough design specification)
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.project_link}>
                <Link href="https://drive.google.com/file/d/1HbtxysLkTMuGj91IxvaybKq0wvzZE0Ix/view?usp=sharing">
                    Preview project screens Pdf
                </Link>
            </div>

            <div className={styles.project_wireframe_cont}>
                <div className={styles.project_wireframe}>
                    <Image alt="dashboard demo" src={wireframe} />
                </div>
            </div>

            <div className={styles.footer_link}>
                <Link href="/projects">
                    Check other projects
                </Link>
            </div>

            <div className={styles.project_form_box}>
                <div className={styles.home_footer_ln}>

                </div>
                <FormBox />
            </div>

        </div>
    )
}

export default Hostel