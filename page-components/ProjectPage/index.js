import React from 'react'
import styles from "./project-page.module.scss"

import proj1 from "../../assets/projects/proj1.png"
import proj2 from "../../assets/projects/proj2.png"
import proj3 from "../../assets/projects/proj3.png"
import proj4 from "../../assets/projects/proj4.png"

import Link from 'next/link'
import Image from 'next/image'

const ProjectPage = () => {

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

    return (
        <div className={styles.proj_cont}>
            <div className={styles.proj_head_cont}>
                <h2>Projects</h2>
            </div>
            <div className={styles.home_proj_box}>
                {projects.map((project) => {
                    return (
                        <div className={styles.home_proj}>
                            <div className={styles.home_proj_img}>
                                <Image src={project.image} />
                            </div>
                            <div className={styles.home_proj_text}>
                                <p>
                                    <b>{project.name}</b> {project.excerpt}
                                </p>
                            </div>
                            <Link href={project.url}>
                                <div className={styles.home_proj_btn}>
                                    Check Full Project
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ProjectPage