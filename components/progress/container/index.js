import React from 'react'
import styles from "./container.module.css"

const Container = ({ animationDuration, children, isFinished }) => {
    return (
        <div className={styles.container_main} style={{
            opacity: isFinished ? 0 : 1,
            transition: `opacity ${animationDuration}ms linear`,
        }}>
            {children}
        </div>
    )
}

export default Container