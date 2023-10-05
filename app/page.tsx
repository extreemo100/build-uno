import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    
    <main>
    <Link href="/images">
        <h1>Images</h1>
      </Link>
      <Link href="/videos">
        <h1>Videos</h1>
      </Link>
      <Link href="/experiences">
        <h1>Experiences</h1>
      </Link>
    </main>

  )
}
