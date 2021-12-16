import React from 'react'
import { makeStyles } from '@mui/styles'
import styles from '../../styles/notification-bar.module.scss'
import { Grid } from '@mui/material'
import WrapperContainer from '../elements/WrapperContainer'

// const useStyles = makeStyles({
//     flexContainer: {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '34px',
//         backgroundColor: '#000'
//     }
// })

export default function NotificatioinBar({ content }) {
    // const classes = useStyles()
    return (
        <div style={{ backgroundColor: '#000000', minHeight: '34px', display: 'flex', alignItems: 'center' }}>
            <WrapperContainer>
                <Grid container>
                    <Grid item xs={12}>
                        <p style={{ textAlign: 'center', margin: '0' }}>
                            <strong style={{ color: '#FFD700' }}>{content}</strong>
                        </p>
                    </Grid>
                </Grid>
            </WrapperContainer>
        </div>
    )
}
