import React from 'react'
import Link from 'next/link'
import styles from '../assets/Header.module.css'
import Icon from '@material-ui/core/Icon'

const Header = () => (
    <header>
        <div className={styles.wrapMain}>
            <Link href="/">
                <a className={styles.logo}>
                    <img src="https://www.thegioididong.com/Content/desktop/images/theme1111/logo-min.jpg" />
                </a>
            </Link>
            <div className={styles.mainMenu}>
                <nav className={styles.nav1}>
                    <ul className={styles.itemsList}>
                        <li>
                            <Link href="/">
                                <a className={styles.myCart}>
                                    <Icon className={styles.icon} color="primary">phone_iphone</Icon>
                                    <span>Điện thoại</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className={styles.myCart}>
                                    <Icon className={styles.icon} color="primary">laptop</Icon>
                                    <span>Laptop</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className={styles.myCart}>
                                    <Icon className={styles.icon} color="primary">watch</Icon>
                                    <span>Đồng hồ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className={styles.myCart}>
                                    <Icon className={styles.icon} color="primary">linked_camera</Icon>
                                    <span>Máy ảnh</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className={styles.myCart}>
                                    <Icon className={styles.icon} color="primary">local_printshop</Icon>
                                    <span>Máy in</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className={styles.myCart}>
                                    <Icon className={styles.icon} color="primary">sim_card</Icon>
                                    <span>Thẻ nhớ, sim</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav className={styles.nav2}>
                    <ul className={styles.itemsList}>
                        <li>
                            <Link href="/">
                                <a className={styles.myCart}>
                                    <span className={styles.nav2Text}>Tin tức công nghệ</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className={styles.myCart}>
                                    <span className={styles.nav2Text}>Giới thiệu về chúng tôi</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className={styles.myCart}>
                                    <span className={styles.nav2Text}>Liên hệ</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
)

export default Header