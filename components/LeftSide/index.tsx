import { Button } from '@mui/material'
import React from 'react'
import styles from "./LeftSide.module.scss"
import FireIcon from '@mui/icons-material/Whatshot';
import MessageIcon from '@mui/icons-material/ChatBubbleOutline';
import RatingIcon from '@mui/icons-material/TrendingUp';
import ListIcon from '@mui/icons-material/FormatListBulleted';

function LeftSide() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <FireIcon />
            Лента
          </Button>
        </li>
        <li>
          <Button>
            <MessageIcon />
            Сообщения
          </Button>
        </li>
        <li>
          <Button>
            <RatingIcon />
            Рейтинг NJ
          </Button>
        </li>
        <li>
          <Button>
            <ListIcon />
            Рейтинг NJ
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default LeftSide