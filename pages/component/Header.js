import { useQuery } from '@apollo/client'
import Link from 'next/link'
import React from 'react'
import { GET_ALL_HEADERDATA } from '../../graphql/api'

function Header () {
  const { data } = useQuery(GET_ALL_HEADERDATA)

  return <section className='main-nav mt-2'> <div className='container header-comps'>
    {
    data?.getMenuTree?.aResults?.map((i, index) => {
      return <Link href="#" key={index} className='main-links'>{i.sTitle}</Link>
    })}</div>
    </section>
}

export default Header
