import Link from 'next/link'
import React from 'react'
import styles from '../assets/Slider.module.css'

const Slider = () => (
    <section className={styles.slider}>
        <div className={styles.main}>
            <Link href="/">
                <a>
                    <img src="https://cdn.tgdd.vn/2020/11/banner/800-170-800x170-3.png" />
                </a>
            </Link>
        </div>
        <div className={styles.ads}>
            <Link href="/">
                <a className={styles.ads1}>
                    <img src="https://cdn.tgdd.vn/2020/11/banner/A31-11-390-80-390x80.png" />
                </a>
            </Link>
            <Link href="/">
                <a className={styles.ads2}>
                    <img src="https://cdn.tgdd.vn/2020/11/banner/A92-sticky-390-80-390x80.png" />
                </a>
            </Link>
        </div>
    </section>
)

export default Slider