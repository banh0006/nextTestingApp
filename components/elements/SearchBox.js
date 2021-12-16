import React from 'react'
import { Grid, Paper, IconButton, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import styles from '../../styles/main-logo-container.module.scss'

export default function SearchBox() {
    return (
        <Grid item xs={12} lg={4} className={styles.search__div}>
            <div>
                <Paper sx={{ display: 'flex' }}>
                    <InputBase className={styles.search_input} sx={{ ml: 1, flex: 1 }} placeholder="Search our massive selection here" />
                    <IconButton className={styles.search_icon}>
                        <SearchIcon fontSize="inherit" />
                    </IconButton>
                </Paper>
            </div>
        </Grid>
    )
}
