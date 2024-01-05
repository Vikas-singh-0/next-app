import Link from "next/link";
import React from "react";
import styles from '@/styles/Header.module.css';
export default function Header() {
  return (
    <nav id={styles.navbar}>
      <Link href="/apps">Apps</Link>
      <Link href="/about">About</Link>
      <Link href="/">Home</Link>
    </nav>
  );
}
