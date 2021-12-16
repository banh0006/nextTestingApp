import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Item from '../elements/CarouselItem'
import styles from '../../styles/mycarousel.module.scss'
import { IconButton } from '@mui/material'
import Autoplay from 'embla-carousel-autoplay'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export default function MainCarousel() {
    const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 768
    const autoPlay = isSmallScreen ? undefined : [Autoplay({ delay: 5000 })]
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, autoPlay)
    const items = [
        {
            imgSrc: 'banner1.jpeg'
        },
        {
            imgSrc: 'banner2.jpeg'
        },
        {
            imgSrc: 'banner3.jpeg'
        },
        {
            imgSrc: 'banner4.jpg'
        }
    ]

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const preButton = (
        <div className={styles.pre_button} onClick={scrollPrev}>
            <IconButton color="inherit" size="large">
                <ChevronLeftIcon fontSize="inherit" />
            </IconButton>
        </div>
    )

    const nextButton = (
        <div className={styles.next_button} onClick={scrollNext}>
            <IconButton color="inherit" size="large">
                <ChevronRightIcon fontSize="inherit" />
            </IconButton>
        </div>
    )

    return (
        <div className={styles.embla}>
            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.container}>
                    {items.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                </div>
            </div>
            {!isSmallScreen && preButton}
            {!isSmallScreen && nextButton}
        </div>
    )
}
