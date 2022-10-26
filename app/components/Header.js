

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header class="bg-slate-300">
      <title>Create Next App</title>
      <Link href={`/`}>
          <a>
            <span class="text-3xl box-border w-50">
              Web technologies
            </span>
          </a>
        </Link> 
      <div class="container mx-auto px-4 columns-3 gap-4">

        
          <div class="bg-slate-200">
            <Link href="/articles">
              Articles
            </Link>
          </div>
          <div class="bg-red-400">
            <Link href="/about">
              About us
            </Link>
          </div>
          <div class="bg-slate-500">
            <Link href="/contacts">
              Contact us
            </Link>
          </div>
       
      </div>
    </header>
  )
}
