import React from 'react'
import styles from './HeadingThree.module.scss'

export default function HeadingThree({children,otherStyles,black}) {

    const theStyles = [styles.heading]
    black && theStyles.push(styles.headingBlack)

    if (otherStyles) {
      theStyles.push(otherStyles)
    }

    console.log(theStyles)

    return (
        <h3 className={theStyles.join(' ')}>
            {children}
        </h3>
    )
}
