

import FormBox from '../../form-box/form-box'
import styles from "./valuwa.module.scss"

import { AiOutlineArrowRight } from "react-icons/ai"

import Image from 'next/image'
import Link from 'next/link'

import mainImg2 from "../../../assets/projects/valuwa/mainImg2.png"
import wireframe from "../../../assets/projects/valuwa/wireframe.png"
import screenImg from "../../../assets/projects/valuwa/screenImg.png"


const Valuwa = () => {
    return (
        <div className={styles.proj_cont}>
            <div className={styles.proj_header_cont}>
                <h1>VALUWA</h1>

            </div>
            <div className={styles.proj_main_img_cont}>
                <Image src={mainImg2} />
            </div>
            <div className={styles.proj_details_cont}>
                <div className={styles.home_footer_ln}>

                </div>
                <div className={styles.proj_det_list}>
                    <ul className={styles.proj_det_list_ul}>
                        <li><b>ROLE</b>: UI Designer</li>
                        <li><b>PROJECT YEAR</b>: 2021</li>
                        <li><b>TOOLS</b>:<span className={styles.list_green}>Adobe XD, Adobe Illustrator, Adobe photoshop , Notes</span></li>
                        <li><b>CATEGORY</b>:<span className={styles.list_green}> Real Estate</span></li>
                        <li><b>SKILLS</b>: Brand Identity Design, Logo Design, Empathy mapping, Effective communication, User interface design, prototyping, Feedback and collaborative skills,Task Management and autonomy, Problem solving skill, Creativity.Presentation and story telling skill,Wireframe and personna production,Interaction Design.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.proj_descr_cont}>
                <div className={styles.proj_descr_head}>
                    <h1>
                        THE PROBLEM
                    </h1>
                </div>
                <div className={styles.proj_descr}>
                    <p>
                        Having to face trust issues when searching for properties online. To reduce exorbitant agent fees. Processes to get housing properties in Nigeria are complicated and complex. To get reliable inspected housing properties.
                    </p>
                </div>
            </div>
            <div className={styles.proj_descr_cont}>
                <div className={styles.proj_descr_head}>
                    <h1>
                        THE SOLUTION
                    </h1>
                </div>
                <div className={styles.proj_descr}>
                    <p>
                        A user friendly search process. Feature of easy access to verified house inspectors to help inspect houses before approval. Easy access to inspected houses.
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
                                Branding
                            </h4>
                        </div>
                        <p>
                            (created naming, style guide and logo for the brand)
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
                            (create a well-polished interface prototype that breathes with the user and a thorough design specification)
                        </p>
                    </div>
                </div>
            </div>


            <div className={styles.project_wireframe_cont}>

                <div className={styles.proj_wire_head}>
                    <h3>DESKTOP VERSION</h3>
                </div>
                <div className={styles.project_link}>
                    <Link href="https://drive.google.com/file/d/1MKU-u9vpGYYKiqNGlC51LxiKxbUOK5sJ/view?usp=sharing">
                        Preview desktop version screens Pdf
                    </Link>
                </div>
                <div className={styles.project_link}>
                    <Link href="https://drive.google.com/file/d/1y8O9YWDp0oKkdF_-B3ZOu9e2Uc9WQslm/view?usp=sharing">
                        Preview desktop version video
                    </Link>
                </div>
                <div className={styles.project_link}>
                    <Link href="https://xd.adobe.com/view/cfb0fd4a-dd08-4fca-8ca7-0e46123c768d-9ae3/?fullscreen">
                        Explore desktop version link
                    </Link>
                </div>
                <div className={styles.project_wireframe}>
                    <Image src={wireframe} />
                </div>
            </div>

            <div className={styles.project_wireframe_cont}>

                <div className={styles.proj_wire_head}>
                    <h3>MOBILE VERSION</h3>
                </div>
                <div className={styles.project_link}>
                    <Link href="https://drive.google.com/file/d/1YFDj4-PJwN_jhuXQjLDBjUcHZi260MVS/view?usp=sharing">
                        Preview mobile version screens Pdf
                    </Link>
                </div>
                <div className={styles.project_link}>
                    <Link href="https://drive.google.com/file/d/1YjOl_dZ-PnuwjOnRmmP-CbRUaLB92IgJ/view?usp=sharing">
                        Preview mobile version video
                    </Link>
                </div>
                <div className={styles.project_link}>
                    <Link href="https://xd.adobe.com/view/1cdf296c-fdcf-4bd6-81b3-0c2221761e9c-498c/?fullscreen">
                        Explore mobile version link
                    </Link>
                </div>
                <div className={styles.project_wireframe}>
                    <Image src={screenImg} />
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


export default Valuwa;