import React from 'react'
import styles from '../assets/Filter.module.css'
import Link from 'next/link'

const Filter = () => (
    <section className={styles.sectionFilter}>
        <div className={styles.filterByBrand}>
            <Link href="/">
                <a>
                    <img src="//cdn.tgdd.vn/Brand/1/iPhone-(Apple)42-b_52.jpg" />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <img src="https://cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg" />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <img src="https://cdn.tgdd.vn/Brand/1/OPPO42-b_27.png" />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <img src="https://cdn.tgdd.vn/Brand/1/Xiaomi42-b_45.jpg" />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <img src="https://cdn.tgdd.vn/Brand/1/Vivo42-b_50.jpg" />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <img src="https://cdn.tgdd.vn/Brand/1/Realme42-b_37.png" />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <img src="https://cdn.tgdd.vn/Brand/1/OnePlus42-b_36.jpg" />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <img src="https://cdn.tgdd.vn/Brand/1/Vsmart42-b_40.png" />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <img src="https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg" />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <img src="https://cdn.tgdd.vn/Brand/1/Huawei42-b_30.jpg" />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <img src="https://cdn.tgdd.vn/Brand/1/Mobell42-b_19.jpg" />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <img src="https://cdn.tgdd.vn/Brand/1/Itel42-b_54.jpg" />
                </a>
            </Link>
        </div>
        <div className={styles.filterByPrice}>
            <label>Chọn mức giá: </label>
            <Link href="/">
                <a>Dưới 2 triệu</a>
            </Link>
            <Link href="/">
                <a>Từ 2 - 5 triêu</a>
            </Link>
            <Link href="/">
                <a>Từ 5 - 10 triêu</a>
            </Link>
            <Link href="/">
                <a>Trên 10 triệu</a>
            </Link>
            <Link href="/">
                <a>Từ 10 - 20 triêu</a>
            </Link>
        </div>
    </section>
)

export default Filter