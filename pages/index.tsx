import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Seo from 'components/Seo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Seo title='Social Media Belt' description='Social Media Belt'/>
      <ul>
        <li>
          <Link href='/app'>App</Link>
        </li>
        <li>
          <Link href='/devpleno'>Dev PLeno</Link>
        </li>
      </ul>
    </div>
  )
}
