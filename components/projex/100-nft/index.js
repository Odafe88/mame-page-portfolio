import React from 'react'
import styles from "./hundred.module.scss"

import FormBox from '../../form-box/form-box'

import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineArrowRight } from "react-icons/ai"

import mainImg from "../../../assets/projects/100-nft/mainImg.png"
import wireframe from "../../../assets/projects/100-nft/wireframe.png"
import screen from "../../../assets/projects/100-nft/screens.png"

import user1 from "../../../assets/projects/100-nft/user_1.png"
import user2 from "../../../assets/projects/100-nft/user_2.png"
import user3 from "../../../assets/projects/100-nft/user_3.png"

import page1 from "../../../assets/projects/100-nft/page_1.png"
import page2 from "../../../assets/projects/100-nft/page_2.png"
import page3 from "../../../assets/projects/100-nft/page_3.png"
import page4 from "../../../assets/projects/100-nft/page_4.png"
import page5 from "../../../assets/projects/100-nft/page_5.png"

const Hundred = () => {
    const users = [
        {
            client: "User 1 ",
            name: "Jude arts",
            age: 23,
            location: "Finland",
            maingoal: "new user that wants buy an existing word phrase",
            goals: [
                "- To buy an already existing",
                "- To print NFT on T-shirt",
                "- Customise T-Shirt",
                "- Generate unique code for easy identification",
                "- Track printing and delivery"
            ],
            image: user1
        },
        {
            client: "User 2",
            name: "Kristine",
            age: 18,
            location: "Netherland",
            maingoal: "Someone that ordered t shirt that wants check tracking.",
            goals: [
                "- To track delivery milestones of T-shirt",
                "- Report any abnormality in delivery process ",
                "- Confirm delivery"
            ],
            image: user2
        },

        {
            client: "User 3 ",
            name: "Brenda",
            age: 24,
            location: "Canada",
            maingoal: "new user wants to get a T -shirt and NFT",
            goals: [
                "- To register as a new user",
                "- Connect to wallet ",
                "- Generate unique code for easy identification",
                "- buy and customise t shirt",
                "- Track printing and delivery"
            ],
            image: user3
        }

    ]

    return (
        <div className={styles.proj_cont}>
            <div className={styles.proj_header_cont}>
                <h1>100% NFT</h1>

            </div>
            <div className={styles.proj_main_img_cont}>
                <Image alt="100% nft" src={mainImg} />
            </div>
            <div className={styles.proj_details_cont}>
                <div className={styles.home_footer_ln}>

                </div>
                <div className={styles.proj_det_list}>
                    <ul className={styles.proj_det_list_ul}>
                        <li><b>ROLE</b>: Web 3 UI / UX Design</li>
                        <li><b>PROJECT YEAR</b>: 2022</li>
                        <li><b>TOOLS</b>:<span className={styles.list_green}>Adobe XD, WPS , Notes, Zoom, Slack</span></li>
                        <li><b>CATEGORY</b>:<span className={styles.list_green}> WEB 3 ( Blockchain based )</span></li>
                        <li><b>SKILLS</b>: Empathy mapping, Effective communication, User interface design, prototyping, Feedback and collaborative skills,Task Management and autonomy, Problem solving skill, Creativity.Presentation and story telling skill,Wireframe and user story, Interaction Design.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.proj_descr_cont}>
                <div className={styles.proj_descr_head}>
                    <h1>
                        BRIEF DESCRIPTION
                    </h1>
                </div>
                <div className={styles.proj_descr}>
                    <p>
                        <b>100 % NFT </b>is an nft marketplace for customizing T-shirt for non-fungible tokens. It also allows the users to create their own NFT designs in form of words or word phrases. When another user buys a word phrase from the site for printing, the original creator will get 20% of the sales commission. For a buyer to suggest or upload their own NFT Design ( word / phrase) , they have to buy an existing word phrase. And as a buyer also if you have an existing design (word/phrase) that you want to buy , during checkout you need to suggest a NFT design (word/phrase) . A buyer can also auction their phrases in their collections for sale.
                    </p>
                </div>

            </div>

            <div className={styles.proj_process_cont}>
                <div className={styles.proj_process_head}>
                    <h1>
                        GENERAL WORKFLOW
                    </h1>
                </div>
                <div className={styles.process_descr_box}>
                    <div className={styles.process_descr}>
                        <div className={styles.process_descr_head}>
                            <h4>
                                Inception
                            </h4>
                        </div>
                        <p>
                            Initiate Project
                        </p>
                    </div>
                    <div className={styles.process_pointer}>
                        <AiOutlineArrowRight />
                    </div>
                    <div className={styles.process_descr}>
                        <div className={styles.process_descr_head}>
                            <h4>
                                Construction iterations
                            </h4>
                        </div>
                        <p>
                            Build a working system; iterate based on requirements
                        </p>
                    </div>
                    <div className={styles.process_pointer}>
                        <AiOutlineArrowRight />
                    </div>
                    <div className={styles.process_descr}>
                        <div className={styles.process_descr_head}>
                            <h4>
                                Transition
                            </h4>
                        </div>
                        <p>
                            deploy into production
                        </p>
                    </div>
                    <div className={styles.process_pointer}>
                        <AiOutlineArrowRight />
                    </div>
                    <div className={styles.process_descr}>
                        <div className={styles.process_descr_head}>
                            <h4>
                                Production
                            </h4>
                        </div>
                        <p>
                            operate and support release
                        </p>

                    </div>
                    <div className={styles.process_pointer}>
                        <AiOutlineArrowRight />
                    </div>
                    <div className={styles.process_descr}>
                        <div className={styles.process_descr_head}>
                            <h4>
                                Retirement
                            </h4>
                        </div>
                        <p>
                            remove from production
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.proj_descr_cont}>
                <div className={styles.proj_descr_head}>
                    <h1>
                        USER STORY
                    </h1>
                </div>
                <div className={styles.proj_descr}>
                    <p>
                        In this case we will be considering three potential users, which include Engineering client , marketing manager , new user using card
                    </p>
                </div>
                <div className={styles.proj_user_cont}>
                    {
                        users.map((user) => {
                            return (
                                <div id={user.name} className={styles.proj_user_box}>
                                    <div className={styles.proj_user_head}>
                                        <h4>
                                            {user.client}
                                        </h4>
                                    </div>
                                    <div className={styles.proj_user_dets}>
                                        <ul id={user.name}>
                                            <li id={user.name}>
                                                <b>- Name: </b>{user.name}
                                            </li>
                                            <li id={user.age}>
                                                <b>- Age: </b> {user.age}
                                            </li>
                                            <li id={user.location}>
                                                <b>- Location: </b> {user.location}
                                            </li>
                                            <li id={user.maingoal}>
                                                <b>- Main goal: </b> {user.maingoal}
                                            </li>
                                            <li id={user.goals}>
                                                <b>- Goals: </b><ul>
                                                    {user.goals.map((goal) => {
                                                        return (
                                                            <li id={goal}>{goal}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className={styles.proj_user_img}>
                                        <Image alt={user.name} src={user.image} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className={styles.project_wireframe_cont}>

                <div className={styles.proj_wire_head}>
                    <h3>WIREFRAMES</h3>
                </div>
                <div className={styles.project_wireframe}>
                    <Image alt="wireframes" src={wireframe} />
                </div>
            </div>

            <div className={styles.project_wireframe_cont}>

                <div className={styles.proj_wire_head}>
                    <h3>DESKTOP VIEW</h3>
                </div>
                <div className={styles.project_link}>
                    <Link href="https://drive.google.com/file/d/1CCCWHseqQYPjOX6Xobs2ylqLE_YX4-sG/view?usp=sharing">
                        Preview desktop version screens Pdf
                    </Link>
                </div>
                <div className={styles.project_link}>
                    <Link href="https://drive.google.com/file/d/1wB253HigqaIzxKgtIxUtwBF4mLRfR6DG/view?usp=sharing">
                        Preview desktop version video
                    </Link>
                </div>
                <div className={styles.project_wireframe}>
                    <Image alt="Desktop view" src={screen} />
                </div>
            </div>
            <div className={styles.project_wireframe_cont}>

                <div className={styles.proj_wire_head}>
                    <h3>MOBILE VIEW</h3>
                </div>
                <div className={styles.project_link}>
                    <Link href="https://drive.google.com/file/d/1mHLm6AjRCKU3PLNgrMPUVE9ZFKX5OeaS/view?usp=sharing">
                        Preview desktop version screens Pdf
                    </Link>
                </div>
                <div className={styles.project_link}>
                    <Link href="https://drive.google.com/file/d/1zKaFJtNYIou27-tW0R4u8ANZ_kEqod-A/view?usp=sharing">
                        Preview desktop version video
                    </Link>
                </div>
                <div className={styles.project_wireframe_grid}>
                    <div className={styles.grid_item_1}>
                        <Image alt="page1" src={page1} />
                    </div>
                    <div>
                        <Image alt="page2" src={page2} />
                    </div>
                    <div>
                        <Image alt="page3" src={page3} />
                    </div>
                    <div>
                        <Image alt="page4" src={page4} />
                    </div>
                    <div>
                        <Image alt='page5' src={page5} />
                    </div>
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

            <div className={styles.footer_link}>
                <Link href="/projects/100-nft">
                    Go back to top
                </Link>
            </div>
        </div>
    )
}

export default Hundred