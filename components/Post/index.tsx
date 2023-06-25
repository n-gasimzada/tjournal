/* eslint-disable react/no-unescaped-entities */
import { Paper } from "@mui/material"
import styles from "./Post.module.scss"

import React from 'react'
import Image from "next/image"
import { Typography } from "@material-ui/core"

function Post() {
  return (
    <Paper elevation={0} className='p-20' classes={{root: styles.paper}}>
    <Typography variant='h5' className={styles.title}>Кот прилёг отдохнуть в английсом парке миниатюр - и стал героем шуток и фотожаб о "гигантском пушистом захватчике"</Typography>
    <Typography className='mt-15 mb-15'>Пока одни не могли соотнести размеры животного и окружения, другие начали создавать апокалиптические с котом в главной роли</Typography>
    <Image width={600} height={600} src="https://s00.yaplakal.com/pics/pics_original/8/0/4/15854408.jpg" alt='cat'/>
  </Paper>
  )
}

export default Post