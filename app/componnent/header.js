

import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
  return (
    <header>
      <div>
        <Link href={`/`}>
          <a>
            
          <h1>
              Web technologies
           </h1>
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/articles">
            Articles
          </Link>
        </li>
        <li>
          <Link href="/about">
            About us
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            Contact us
          </Link>
        </li>
      </ul>
    </header>
  )
}
