import React from 'react'
import styles from '../../styles/global.module.scss'

import NotificatioinBar from '../layout/NotificatioinBar'
import TopBand from '../layout/TopBand'
import MainLogoContainer from '../layout/MainLogoContainer'

export default function Layout({ children }) {
    return (
        <div className={styles.main_container}>
             <NotificatioinBar content="==ASWHEELS== COVID-19: Wishing health and safety to all our customers, we are open and processing orders." />
            <TopBand />
            <MainLogoContainer />
            {children}
        </div>
    )
}
