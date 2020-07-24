import React from 'react'
import styles from './PersonalProjects.module.scss'
import Background from '../Background/Background'

export default function PersonalProjects() {
    return (
        <>
        <Background type={'sectionLeft'} gridRow={'8/11'}/>
        <section id="personal-projects" className={styles.section}>
            <h1>some text</h1>
        </section>
        </>
    )
}
