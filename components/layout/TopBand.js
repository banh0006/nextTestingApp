import { Grid } from '@mui/material'
import React from 'react'
import styles from '../../styles/top-band.module.scss'
import WrapperContainer from '../elements/WrapperContainer'
import TopMenu from '../elements/TopMenu'

export default function TopBand() {
    return (
        <div className={styles.top_red_band}>
            <WrapperContainer>
                <Grid container columns={{ xs: 12 }}>
                    <Grid item xs={5} style={{ letterSpacing: '3px' }}>
                        1·800·453·4484
                    </Grid>
                    <Grid item xs={7}>
                        <TopMenu />
                    </Grid>
                </Grid>
            </WrapperContainer>
        </div>
    )
}
