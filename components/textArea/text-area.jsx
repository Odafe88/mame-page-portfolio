import React from 'react'
import styles from "./textArea.module.scss"


const TextArea = ({ handleChange, label, name }) => (
    <div className={styles.text_area_container}>
        {
            label ?
                <label className={styles.text_area_label} htmlFor={name}>{label}:</label>
                : null
        }
        <textarea className={styles.text_area} onChange={handleChange} name={name}></textarea>


    </div>
)

export default TextArea;