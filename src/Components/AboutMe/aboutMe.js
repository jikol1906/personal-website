import React from 'react'
import styles from './aboutMe.module.scss'
import HeadingTwo from '../../Typography/HeadingTwo/headingTwo'

export default function AboutMe() {
    return (
        <section className={styles.about}>
            <HeadingTwo underlined>About Me</HeadingTwo>
        </section>
    )
}
