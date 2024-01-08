import React from 'react'
import { useRouter } from 'next/router'
export default function postId() {
  const router = useRouter();
  const {postId} = router.query;
  if(router.isFallback) return <div>...Loading</div>
  return (
    <div>{postId}</div>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `http://localhost:3000/api/posts/${params.postId}`
  )
  const data = await response.json()
  console.log('dat',data);
  if (!data[0].id) {
    return {
      notFound: true
    }
  }

  console.log(`Generating page for /posts/${params.postId}`)
  return {
    props: {
      post: data[0]
    }
  }
}
export async function getStaticPaths() {
  return {
    paths: [
      {params: {postId: '1'}},
      {params: {postId: '2'}},
      {params: {postId: '3'}},
    ], fallback: true
  }
}