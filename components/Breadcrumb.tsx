import React from 'react'
import Link from 'next/link'
import styles from '../assets/Breadcumb.module.css'

const Breadcrumb = () => (
    <section className={styles.sectionBreadcumb}>
        <ul>
            <li>
                <Link href="/">
                    <a>Phu kien</a>
                </Link>
                <span>›</span>
            </li>
            <li>
                <Link href="/">
                    <a>Op lung</a>
                </Link>
                <span>›</span>
            </li>
            <li>
                <Link href="/">
                    <a>Op lung iphone 12 pro max</a>
                </Link>
            </li>
        </ul>
    </section>
)

export default Breadcrumb