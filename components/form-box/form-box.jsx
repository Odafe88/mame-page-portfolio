import React from 'react'
import FormInput from '../formInput/form-input'
import TextArea from '../textArea/text-area'
import styles from "./formBox.module.scss"
import Link from 'next/link'
import { useRef, useState } from 'react'

import { BsWhatsapp, BsTwitter, BsLinkedin, BsJournal } from "react-icons/bs"
import { GiCoinsPile } from 'react-icons/gi'

const FormBox = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const form = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            name,
            email,
            message,
        };
        console.log(data);

        // fetch('/api/form', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then((res) => {
        //     console.log("Your response has been recieved");
        //     if (res.status === 200) {
        //         console.log('Message sent succesfully!')
        //         setSubmitted(true)
        //         setName('')
        //         setEmail('')
        //         setBody('')
        //     }
        // })

    };

    return (
        <div className={styles.contact_form_cont}>
            <div className={styles.home_contact_head}>
                <h3>
                    Lets work together
                </h3>
            </div>
            <div className={styles.home_contact_excerpt}>
                <p>
                    You will like to connect with them then you can connect by submiting the form below and connecting with me on my socials
                </p>
            </div>
            <form ref={form} onSubmit={handleSubmit} >
                <div className={styles.inputs_box}>
                    <FormInput type="text" handleChange={(e) => { setName(e.target.value) }} label="Name" name="name" />
                    <FormInput type="email" handleChange={(e) => { setEmail(e.target.value) }} label="Email" name="email" />
                    <TextArea name="message" handleChange={(e) => { setMessage(e.target.value) }} label='Message' />
                </div>
                <div className={styles.form_btn_cont}>
                    <button type='submit' className={styles.form_btn}>
                        Lets connect!
                    </button>
                </div>
            </form>
            <div className={styles.contact_social_cont}>
                <div className={styles.whatsapp_btn_cont}>
                    <Link href="https://wa.link/pv7mg7">
                        <button className={styles.whatsapp_btn}><BsWhatsapp className={styles.icon} />
                            Whatsapp
                        </button>
                    </Link>
                </div>
                <div className={styles.linkedin_btn_cont}>
                    <Link href="https://www.linkedin.com/in/omomame-imafidon-7a9839204">
                        <button className={styles.linkedin_btn}><BsLinkedin className={styles.icon} />
                            LinkedIn
                        </button>
                    </Link>
                </div>
                <div className={styles.twitter_btn_cont}>
                    <Link href="https://twitter.com/CreativeMame">
                        <button className={styles.twitter_btn}><BsTwitter className={styles.icon} />
                            Twitter
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FormBox