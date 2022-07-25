import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowRight } from "react-icons/ai"

import FormBox from '../../form-box/form-box'

import styles from "./cakasa.module.scss"

import mainImg from "../../../assets/projects/cakasa/mainImg.png"
import wireframe from "../../../assets/projects/cakasa/wireframe.png"

import user1 from "../../../assets/projects/cakasa/user_1.png"
import user2 from "../../../assets/projects/cakasa/user_2.png"
import user3 from "../../../assets/projects/cakasa/user_3.png"
import user4 from "../../../assets/projects/cakasa/user_4.png"

import frame1 from "../../../assets/projects/cakasa/frame_1.png"
import frame2 from "../../../assets/projects/cakasa/frame_2.png"
import frame3 from "../../../assets/projects/cakasa/frame_3.png"

const Cakasa = () => {


    const users = [
        {
            client: "Engineering client",
            industry: "Oil and gas",
            name: "Jide, oil and gas",
            id: 1,
            age: 45,
            location: "Sapele , Benin city",
            goals: [
                "- to get a firm to help in the construction of their pipelines",
                "- get feedback on the materials used", "- have on-site meetings",
                "- give comments on feedbacks",
                "- step by step every part of the procurement and installation",
                "-update requirement"
            ],
            image: user1
        },
        {
            client: "Marketing manager",
            name: "Miss Clarence",
            industry: "Business",
            age: 29,
            id: 2,
            location: "Lekki , Lagos city",
            Role: "Marketing manager",
            goals: [
                "- To organise campaigns for clients",
                "- check campaigns statistics",
                "- Check clients feedbacks and reply ",
                "- organise meetings with people in the department",
                "- send monthly data analytics of each campaign"
            ],
            image: user2
        },
        {
            client: "New client",
            name: "Hon. Sule",
            age: 49,
            id: 3,
            industry: "Minister of works and power, Kaduna",
            location: "Kaduna, Nigeria",
            Role: "Marketing manager",
            goals: [
                "- Scan business card / qr code",
                "- upload bio ",
                "- submit proposal ",
                "- get feedback for proposal",
                "- request for meeting schedule"
            ],
            image: user3
        },

        {
            client: "Engineering worker",
            name: "Mr Alex",
            age: 35,
            id: 4,
            industry: "Engineering",
            location: "Lekki, Nigeria",
            Role: "Engineering worker",
            goals: [
                "- Submit progress of project",
                "- attend meeting for the department",
                "- get new updates on a particular project"
            ],
            image: user4
        }


    ]

    return (
        <div className={styles.proj_cont}>
            <div className={styles.proj_header_cont}>
                <h1>CAKASA</h1>

            </div>
            <div className={styles.proj_main_img_cont}>
                <Image alt="cakasa" src={mainImg} />
            </div>
            <div className={styles.proj_details_cont}>
                <div className={styles.home_footer_ln}>

                </div>
                <div className={styles.proj_det_list}>
                    <ul className={styles.proj_det_list_ul}>
                        <li><b>ROLE</b>: Proposal</li>
                        <li><b>PROJECT YEAR</b>: 2022</li>
                        <li><b>TOOLS</b>:<span className={styles.list_green}>Adobe XD, WPS , Notes</span></li>
                        <li><b>CATEGORY</b>:<span className={styles.list_green}> Oil and Gas</span></li>
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
                        <b>Cakasa (Nigeria) company limited</b> is a company that provides engineering, procurement and construction (EPC) services to the Nigeria oil, gas and industrial infrastructural clients. Because of the diversity of their work, they would love to have a CRM( customer relationship management) system. It will dashboards that cater for the various needs of the departments, which include engineering services, construction services, procurement services, maintenance services and gas services.
                    </p>
                </div>
                <div className={styles.proj_feat}>
                    <div className={styles.proj_feat_head}>
                        <h4>
                            KEY FEATURES :
                        </h4>
                    </div>
                    <div className={styles.proj_feat_det}>
                        <ul>
                            <li>- scan business card </li>
                            <li>- project management</li>
                            <li>- centrally managed documents</li>
                            <li>- mobility</li>
                            <li>- user centered interface and structure</li>
                        </ul>
                    </div>
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
                            Inception
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
                                <div id={user.id} className={styles.proj_user_box}>
                                    <div className={styles.proj_user_head}>
                                        <h4>
                                            {user.client}
                                        </h4>
                                    </div>
                                    <div className={styles.proj_user_dets}>
                                        <ul>
                                            <li id={user.name}>
                                                <b>- Name: </b>{user.name}
                                            </li>
                                            <li id={user.age}>
                                                <b>- Age: </b> {user.age}
                                            </li>
                                            <li id={user.location}>
                                                <b>- Location: </b> {user.location}
                                            </li>
                                            <li id={user.industry}>
                                                <b>- Industry: </b> {user.industry}
                                            </li>
                                            <li id={user.Role}>
                                                <b>- Role: </b>{user.Role}
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
                                        <Image alt="user image" src={user.image} />
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
                    <h3>DASHBOARD DEMO</h3>
                </div>
                <div className={styles.project_link}>
                    <Link href="https://drive.google.com/file/d/1BKUfKKZvVeUyLzdUWE3dsydA07uh1wJH/view?usp=sharing">
                        Preview desktop version screens Pdf
                    </Link>
                </div>
                <div className={styles.project_link}>
                    <Link href="https://drive.google.com/file/d/1SnneFa6ZVz9Fs175y8Tqcihkz1NrCQJ1/view?usp=sharing">
                        Preview desktop version video
                    </Link>
                </div>
                <div className={styles.project_wireframe}>
                    <Image alt="dashboard demo" src={frame1} />
                </div>
                <div className={styles.project_wireframe}>
                    <Image alt="dashboard demo" src={frame2} />
                </div>
                <div className={styles.project_wireframe}>
                    <Image alt="dashboard demo" src={frame3} />
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
                <Link href="/projects/cakasa">
                    Go back to top
                </Link>
            </div>
        </div>
    )
}

export default Cakasa