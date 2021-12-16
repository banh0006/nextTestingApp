import React from 'react'
import { Paper } from '@mui/material'
import Image from 'next/image'
import styles from '../../styles/mycarousel.module.scss'

export default function CarouselItem({ item }) {
    return (
        <div className={styles.slide}>
            <Image className="banner-img" src={`/assets/images/${item.imgSrc}`} alt="Banner" layout='fill' priority={true} />
            {/* <img className="banner-img" src={`/assets/images/${item.imgSrc}`} alt="Banner" style={{ width: '100%', height: '100%' }} /> */}
        </div>
    )
}
