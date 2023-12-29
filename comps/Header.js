import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <Link href="/apps">Apps</Link>
      <Link href="/about">About</Link>
      <Link href="/">Home</Link>
    </div>
  );
}
