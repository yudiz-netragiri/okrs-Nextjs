import React from 'react'

function DetailArticle ({ post }) {
  return <div>
    <h2>{post?.title}</h2>
    <p>{post?.body}</p>
  </div>
}

export default DetailArticle

export async function getStaticPaths () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.map((user) => ({
    params: { id: user.id.toString() }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps ({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  return { props: { post } }
}
