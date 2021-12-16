import React from 'react'
import WrapperContainer from '../elements/WrapperContainer'
import styles from '../../styles/main-logo-container.module.scss'
import { Grid } from '@mui/material'

import SearchBox from '../elements/SearchBox'
import RightMenu from '../elements/RightMenu'

export default function MainLogoContainer() {
    return (
        <WrapperContainer className={`${styles.container}`}>
            <Grid container columns={{ xs: 12, md: 12, lg: 12 }}>
                <Grid item md={6} xs={8} lg={5}>
                    <div className={styles.menu_resp}>
                        <a className="popup-modal"></a>
                    </div>
                    <a className={styles.default_logo} href="http://www.aswheels.com/">
                        <img src="/assets/images/canada-wheels-logo.png" alt="Canadawheels Inc" />
                    </a>
                </Grid>
                <SearchBox />
                <RightMenu />
            </Grid>
        </WrapperContainer>
    )
}
