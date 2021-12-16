import React from 'react'
import styles from '../../styles/top-menu.module.scss'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

export default function TopMenu() {
    return (
        <ul className={styles.top_menu}>
            <li className={styles.location}>
                <a>US</a>
                <ul>
                    <ArrowDropUpIcon style={{ position: 'absolute', top: '-22px', fontSize: '38px', color: '#000', left: '62%!important' }} />
                    <a href="https://www.canadawheels.ca/">CAN</a>
                </ul>
            </li>
            <li className={styles.account}>
                <a>
                    Account
                    <span>
                        <img src="/assets/images/account_user.png" alt="account" />
                    </span>
                </a>
                <ul>
                    <ArrowDropUpIcon style={{ position: 'absolute', top: '-22px', fontSize: '38px', color: '#000', left: '83%!important' }} />
                    <div className={styles.account_create}>
                        <p>
                            <a>Login</a>
                        </p>
                        <p>Or please create a</p>
                        <p>
                            <a>New account</a>
                            with us
                        </p>
                    </div>
                    <div className={styles.menu_extra}>
                        <ul>
                            <li className="orders">
                                <a>
                                    <span>my </span>
                                    Order status
                                </a>
                                <img src="/assets/images/orders_icon.png" />
                            </li>
                            <li className="cars">
                                <a>
                                    <span>my </span>
                                    Cars
                                </a>
                                <img src="/assets/images/cars_icon.png" />
                            </li>
                            <li className="wish-list">
                                {' '}
                                <a>
                                    <span>my </span>
                                    Wish List
                                </a>
                                <img src="/assets/images/wish_list_icon.png" />
                            </li>
                            <li className="compare-list">
                                {' '}
                                <a>
                                    <span>my </span>
                                    Compare List
                                </a>
                                <img src="/assets/images/compare_list_icon.png" />
                            </li>
                        </ul>
                    </div>
                </ul>
            </li>
            <li className={styles.help_center}>
                <a></a>
                <ul>
                    <ArrowDropUpIcon style={{ position: 'absolute', top: '-22px', fontSize: '38px', color: '#000', left: '86%!important' }} />
                    <div className={styles.help_center__menu_extra}>
                        <ul>
                            <li>
                                <a></a>
                                <img src="/assets/images/support_icon.png"></img>
                            </li>
                            <li className={styles.contact}>
                                <a>Contact us</a>
                                <img src="/assets/images/contact_icon.png"></img>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.menu_content}>
                        <p>Professionals are standing by for your support</p>
                        <p>We are happy to help.</p>
                    </div>
                </ul>
            </li>
        </ul>
    )
}
