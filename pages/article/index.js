import React from 'react'
import Link from 'next/link'

function article ({ posts }) {
  return <div>
    {posts.slice(0, 10).map((post, index) => (
        <div key={index}>
   <Link href={`/article/${post.id}`} >{post.title}</Link>
   </div>
    ))
  }</div>
}

export default article

export async function getStaticProps (context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: { posts }
  }
}
