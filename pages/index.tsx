/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Post from '@/components/Post'
import LeftSide from '@/components/LeftSide'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>NJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />

      <div>
        <div className='wrapper'>
          <LeftSide />
        </div>
        <div className='content'>
          <Post />
        </div>
        <div className='rightSide'></div>
      </div>
    </div >
  )
}
