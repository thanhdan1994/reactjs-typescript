import React from 'react'
import styles from '../assets/Footer.module.css'
import Link from 'next/link'
import Icon from '@material-ui/core/Icon'

const Footer = () => (
    <section className={styles.sectionFooter}>
        <ul className={styles.footerColumn1}>
            <li>
                <Link href="">
                    <a>
                        Lịch sử mua hàng
                    </a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a>
                        Tìm hiểu về mua trả góp
                    </a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a>
                        Chính sách bảo hành
                    </a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a>
                        Chính sách đổi trả
                    </a>
                </Link>
            </li>
        </ul>
        <ul  className={styles.footerColumn2}>
        <li>
                <Link href="">
                    <a>
                        Giới thiệu công ty (mwg.vn)
                    </a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a>
                        Gửi góp ý, khiếu nại
                    </a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a>
                        Tìm siêu thị (3.000 shop)
                    </a>
                </Link>
            </li>
        </ul>
        <ul  className={styles.footerColumn3}>
            <li><p>Gọi mua hàng <a href="tel:18001060">1800.1060</a> (7:30 - 22:00)</p></li>
            <li><p>Gọi khiếu nại <a href="tel:18001060">1800.1062</a> (7:30 - 22:00)</p></li>
            <li><p>Gọi bảo hành <a href="tel:18001060">1800.1064</a> (7:30 - 22:00)</p></li>
            <li><p>Kỹ thuật <a href="tel:18001060">1800.1066</a> (7:30 - 22:00)</p></li>
        </ul>
        <ul  className={styles.footerColumn4}>
            <li>
                <Link href="">
                    <a>
                        Tìm hiểu về mua trả góp
                    </a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a>
                        Chính sách bảo hành
                    </a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a>
                        Chính sách đổi trả
                    </a>
                </Link>
            </li>
        </ul>
    </section>
)

export default Footer