import { Paper, Button, IconButton, Avatar } from '@mui/material'
import React from 'react'
import styles from "./Header.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import PenIcon from '@mui/icons-material/Mode';
import MessageIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowIcon from '@mui/icons-material/ExpandMore';

export default function Header() {
    return (
        <Paper classes={{ root: styles.wrapper }} elevation={0}>
            <div className="d-flex align-center">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <svg className={styles.logo} width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.059 24.353h11.647v8.47H1.059v-8.47Z" fill="#EAA502" /><path d="M1.059 10.588h11.647v22.236l8.47-7.412V10.588h11.647v-9.53H1.06v9.53Z" fill="#000" /><path opacity=".15" d="M9.53 24.353h3.176v8.47l-3.177-8.47Z" fill="#000" /></svg>
                <div className={styles.searchBlock}>
                    <SearchIcon />
                    <input placeholder='Поиск' />
                </div>
                <Button variant='contained' className={styles.penButton}>
                    Новая запись
                </Button>
            </div>
            <div className={styles.headerRight}>
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                <Avatar className={styles.avatar} alt="Remy Sharp" src="https://oshiprint.in/image/cache/catalog/poster/new/mqp966-320x320h.jpeg.webp" />
                <ArrowIcon className={styles.arrow} />
            </div>
        </Paper>
    )
}
