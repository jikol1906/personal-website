import React from 'react'
import styles from './Card.module.scss'

export default function Card({children,img}) {
    return (
        <div className={styles.card}>
            <img src={img}/>
            {children}
        </div>
    )
}
