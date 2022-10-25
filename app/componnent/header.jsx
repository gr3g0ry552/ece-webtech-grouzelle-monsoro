

import Link from 'next/link'
import Image from '../'

export default function Header(){
  return (

    <header>
    <div className='headerContent' color='blue'>
      <div className='logoEce'>
        <img src={Image}/>
      </div>
      <div className='Retour Menu'>
        <Link href={`/`}>
          <a>
            
          <h1>
              HOME
           </h1>
          </a>
        </Link>
      </div>
      <div className='menu' style={{textAlign: "right", top: "0px"}}>
      <div className='About'>
        <li>
          <Link href="/about">
            About us
          </Link>
        </li>
      </div>
      <div className='Articles'>
        <li>
          <Link href="/articles">
            Articles
          </Link>
        </li>
      </div>
      <div className='Contacts'>
        <li>
          <Link href="/contacts">
            Contact us
          </Link>
        </li>
      </div>
      </div>
    </div>
    </header>
  )
}
