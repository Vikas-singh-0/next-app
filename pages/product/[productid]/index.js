import { useRouter } from 'next/router'
import React from 'react'

export default function index() {
  const router = useRouter()
  const productId = router.query.productid
  return (
    <div>this is product id page {productId}</div>
  )
}
