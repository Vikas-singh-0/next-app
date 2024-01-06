import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Hello Next</h1>
      <Link href='/users'>Users Page</Link>
      <Link href='/userposts'>Posts</Link>
    </>
  )
}
