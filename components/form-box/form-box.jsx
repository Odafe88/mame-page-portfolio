import React from 'react'
import FormInput from '../formInput/form-input'
import TextArea from '../textArea/text-area'
import styles from "./formBox.module.scss"
import Link from 'next/link'

import { BsWhatsapp, BsTwitter, BsLinkedin } from "react-icons/bs"

const FormBox = () => {

    const handleChange = () => {

    }
    return (
        <div className={styles.contact_form_cont}>
            <form>
                <div className={styles.inputs_box}>
                    <FormInput type="text" handleChange={handleChange} label="Name" name="userName" />
                    <FormInput type="email" handleChange={handleChange} label="Email" name="userEmail" />
                    <TextArea name="message" handleChange={handleChange} label='Message' />
                </div>
                <div className={styles.form_btn_cont}>
                    <button className={styles.form_btn}>
                        Lets connect!
                    </button>
                </div>
            </form>
            <div className={styles.contact_social_cont}>
                <div className={styles.whatsapp_btn_cont}>
                    <button className={styles.whatsapp_btn}><BsWhatsapp className={styles.icon} /><Link href="/"> Whatsapp</Link></button>
                </div>
                <div className={styles.linkedin_btn_cont}>
                    <button className={styles.linkedin_btn}><BsLinkedin className={styles.icon} /> <Link href="/">LinkedIn</Link></button>
                </div>
                <div className={styles.twitter_btn_cont}>
                    <button className={styles.twitter_btn}><BsTwitter className={styles.icon} /> <Link href="/">Twitter</Link></button>
                </div>
            </div>
        </div>
    )
}

export default FormBox