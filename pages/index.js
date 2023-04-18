import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Users from './users'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [count, setCount] = useState(0); 

  return (
    <>
      <h1>The Index Pages</h1>
      <table>
        <thead>
          <tr>
              <th>
                <Link href="/">Home</Link>
              </th>
              <th>
                 <Link href="/first">First</Link>
              </th>
              <th>
                 <Link href="/second">Second</Link>
              </th>
          </tr>
        </thead>
      </table>
      <hr/>
      <Users count={count} setCount={setCount}/>
    </>
  )
}
