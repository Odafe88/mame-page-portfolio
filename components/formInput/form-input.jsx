import React from 'react'
import styles from "./formInput.module.scss"

const FormInput = ({ label, handleChange, ...otherProps }) => {
    return (
        <div className={styles.input_group}>
            <label className={styles.form_label}>{label}:</label>
            <input className={styles.form_input} onChange={handleChange} {...otherProps} />
        </div>
    )
}

export default FormInput