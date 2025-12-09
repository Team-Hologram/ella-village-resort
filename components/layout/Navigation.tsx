import React from 'react'
import Link from 'next/link'

export default function Navigation(){
  return (
    <nav>
      <Link href="/" style={{marginRight:16}}>Home</Link>
      <Link href="/about" style={{marginRight:16}}>About</Link>
      <Link href="/experiences" style={{marginRight:16}}>Experiences</Link>
      <Link href="/accommodation" style={{marginRight:16}}>Accommodation</Link>
      <Link href="/explore" style={{marginRight:16}}>Explore</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}
