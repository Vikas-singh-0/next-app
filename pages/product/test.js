import React from 'react'
import { useRouter } from "next/router"

export default function Productid() {
  const router = useRouter();
  const {productid} = router.query;
  return (
    <div>{productid}</div>
  )
}
