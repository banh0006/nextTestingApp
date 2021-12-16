import React from 'react'
import { Container, Typography, Button, Paper, Card, CardContent, CardActions } from '@mui/material'
import CustomizedTabs from '../components/CustomizedTabs'
import NotificatioinBar from '../components/layout/NotificatioinBar'
import styles from '../styles/global.module.scss'
import TopBand from '../components/layout/TopBand'
import MainLogoContainer from '../components/layout/MainLogoContainer'
import MainCarousel from '../components/layout/MainCarousel'

export default function ContactPage() {
    return (
        <div className={styles.main_container}>
            {/* <NotificatioinBar content="==ASWHEELS== COVID-19: Wishing health and safety to all our customers, we are open and processing orders." />
            <TopBand />
            <MainLogoContainer /> */}
            <MainCarousel />
           
        </div>
    )
}
