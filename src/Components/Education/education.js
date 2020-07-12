import React from 'react'
import styles from './education.module.scss'
import HeadingTwo from '../../Typography/HeadingTwo/headingTwo'

export default function Education() {

    console.log(styles)
    return (
        <section className={styles.education}>
            <HeadingTwo otherStyles={styles.heading}>Timeline</HeadingTwo>
            <div className={styles.timeline}></div>
            <TimelineEvent gridRow={2}>
                <HeadingTwo>Some text</HeadingTwo>
            </TimelineEvent>
            <TimelineEvent right mtop={'2rem'} gridRow={2}>
                <HeadingTwo>Some text</HeadingTwo>
            </TimelineEvent>
            <TimelineEvent gridRow={3}>
                <HeadingTwo>Some text</HeadingTwo>
            </TimelineEvent>
            <TimelineEvent right mtop={'3rem'} gridRow={3}>
                <HeadingTwo>Some text</HeadingTwo>
            </TimelineEvent>
        </section>
    )
}


function TimelineEvent ({children,right,mtop,gridRow}) {
    
    const inlineStyles = {
        gridRow,
        marginTop:mtop
    }

    const theStyles = [styles.event];
    right && theStyles.push(styles.eventRight);

    return (
        <div className={theStyles.join(' ')} style={inlineStyles}>
            {children}
        </div>
    )
}
