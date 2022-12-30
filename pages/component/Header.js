import { useQuery } from '@apollo/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GET_ALL_HEADERDATA } from '../../graphql/api'
import logo from '../../assets/image/logo.svg'

function Header () {
  const { data } = useQuery(GET_ALL_HEADERDATA)

  return (
    <section className="main-nav ">
      <div className='cric-head'>
        <div className='container'>
        <Image src={logo}/>
        </div>
      </div>
      {' '}
      <div className="container header-comps">
        {data?.getMenuTree?.aResults?.map((i, index) => {
          return (
            <Link href="#" key={index} className="main-links">
              {i.sTitle}
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Header
