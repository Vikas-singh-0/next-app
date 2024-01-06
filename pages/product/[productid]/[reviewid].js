import { useRouter } from 'next/router'
import React from 'react'

export default function index() {
  const router = useRouter()
  const reviewid = router.query.reviewid
  console.log(router);
  return (
    <div>this is review {reviewid} page </div>
  )
}
